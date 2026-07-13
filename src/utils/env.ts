/**
 * Runtime validation for required environment variables.
 * Logs clear warning messages if any required variables are missing or empty.
 */
export const validateEnv = (): void => {
  const missingVars: string[] = [];

  const checkVar = (name: string, value: string | undefined, description: string) => {
    if (!value || value.trim() === '') {
      missingVars.push(`${name} (${description})`);
    }
  };

  checkVar(
    'VITE_GA_MEASUREMENT_ID',
    import.meta.env.VITE_GA_MEASUREMENT_ID,
    'Google Analytics 4 Measurement ID'
  );
  checkVar(
    'VITE_CLARITY_PROJECT_ID',
    import.meta.env.VITE_CLARITY_PROJECT_ID,
    'Microsoft Clarity Project ID'
  );
  checkVar(
    'VITE_GSC_VERIFICATION',
    import.meta.env.VITE_GSC_VERIFICATION,
    'Google Search Console Verification Token'
  );

  if (missingVars.length > 0) {
    const isProd = import.meta.env.PROD;
    const prefix = isProd ? '[ENV WARNING]' : '[ENV INFO]';
    console.warn(
      `%c${prefix} Missing environment variables:\n` +
      missingVars.map(v => `  - ${v}`).join('\n') +
      `\n\nAnalytics services will be disabled or run with empty settings. ` +
      `Please ensure these are configured in your deployment settings or .env file.`,
      'color: #ffb703; font-weight: bold;'
    );
  }
};
