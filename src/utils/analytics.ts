declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    clarity: {
      (...args: any[]): void;
      q?: any[];
    };
  }
}

const IS_PROD = import.meta.env.PROD;

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const CLARITY_ID = import.meta.env.VITE_CLARITY_PROJECT_ID;
const GSC_VERIFICATION = import.meta.env.VITE_GSC_VERIFICATION;

// Tracker flags to prevent duplicate initializations and duplicate events
let isGaInitialized = false;
let isClarityInitialized = false;
let isGscInitialized = false;

/**
 * Dynamically injects Google Search Console Verification Meta Tag in Production
 */
export const initGsc = (): void => {
  if (!IS_PROD || !GSC_VERIFICATION || isGscInitialized) return;

  try {
    const meta = document.createElement("meta");
    meta.name = "google-site-verification";
    meta.content = GSC_VERIFICATION;
    document.head.appendChild(meta);
    isGscInitialized = true;
  } catch (error) {
    console.error("[Analytics] GSC initialization failed:", error);
  }
};

/**
 * Dynamically loads and initializes Google Analytics 4 (GA4) in Production
 */
export const initGA = (): void => {
  if (!IS_PROD || !GA_ID || isGaInitialized) return;

  try {
    // 1. Inject Gtag script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    // 2. Setup dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };

    // 3. Initialize config
    window.gtag("js", new Date());
    
    // Disable default automatic page view tracking in config to prevent duplicate pageviews.
    // Instead, page views are tracked manually upon tab navigation in our SPA.
    window.gtag("config", GA_ID, {
      send_page_view: false
    });

    isGaInitialized = true;
  } catch (error) {
    console.error("[Analytics] GA4 initialization failed:", error);
  }
};

/**
 * Dynamically loads and initializes Microsoft Clarity in Production
 */
export const initClarity = (): void => {
  if (!IS_PROD || !CLARITY_ID || isClarityInitialized) return;

  try {
    window.clarity = window.clarity || function(...args: any[]) {
      (window.clarity.q = window.clarity.q || []).push(args);
    };

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;

    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }

    isClarityInitialized = true;
  } catch (error) {
    console.error("[Analytics] Microsoft Clarity initialization failed:", error);
  }
};

/**
 * Main initializer to trigger all analytics services.
 */
export const initAnalytics = (): void => {
  initGsc();
  initGA();
  initClarity();
};

/**
 * Track a page view/tab change
 * @param pathName The name or route of the page/tab
 */
export const trackPageView = (pathName: string): void => {
  if (!IS_PROD) {
    console.log(`[Analytics Dev Log] Page View Tracked: /${pathName}`);
    return;
  }

  // GA4 Page View
  if (isGaInitialized && GA_ID && window.gtag) {
    window.gtag("event", "page_view", {
      page_path: `/${pathName}`,
      page_title: pathName.charAt(0).toUpperCase() + pathName.slice(1),
      send_to: GA_ID
    });
  }
};

/**
 * Track custom events (e.g. CTA clicks, form submissions)
 * @param eventName The name of the event
 * @param params Event parameters
 */
export const trackEvent = (eventName: string, params?: Record<string, any>): void => {
  if (!IS_PROD) {
    console.log(`[Analytics Dev Log] Custom Event: ${eventName}`, params);
    return;
  }

  // Track to GA4
  if (isGaInitialized && window.gtag) {
    window.gtag("event", eventName, params);
  }

  // Track to Microsoft Clarity
  if (isClarityInitialized && window.clarity) {
    window.clarity("event", eventName);
  }
};
