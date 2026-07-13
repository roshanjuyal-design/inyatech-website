import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[ErrorBoundary] Uncaught error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-dark-bg text-white relative overflow-hidden">
          {/* Ambient Background Glows */}
          <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-brand-primary/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-brand-accent/10 blur-[100px] pointer-events-none" />

          <div className="glass-panel max-w-md w-full p-8 rounded-2xl border border-white/10 text-center relative z-10 shadow-2xl backdrop-blur-xl">
            {/* Branded Error Icon */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            <h1 className="text-2xl font-bold font-display tracking-tight text-white mb-3">
              Something went wrong
            </h1>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              An unexpected error occurred. We have logged the error and our team has been notified. Please try reloading the page.
            </p>

            <button
              onClick={this.handleReload}
              className="w-full py-3 px-6 rounded-xl font-semibold bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:from-brand-primary/90 hover:to-brand-secondary/90 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Reload Page
            </button>

            {this.state.error && (
              <details className="mt-6 text-left group">
                <summary className="text-xs text-gray-500 hover:text-gray-400 cursor-pointer focus:outline-none select-none transition-colors">
                  Technical Details
                </summary>
                <div className="mt-3 p-3 bg-black/40 rounded-lg border border-white/5 font-mono text-[10px] text-red-300 max-h-40 overflow-auto whitespace-pre-wrap select-text">
                  {this.state.error.toString()}
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
