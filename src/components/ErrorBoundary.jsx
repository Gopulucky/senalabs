import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }
    static getDerivedStateFromError(error) { return { hasError: true }; }
    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-bg-deep flex items-center justify-center px-6">
                    <div className="max-w-md w-full text-center">
                        <pre className="font-mono text-aurora-cyan text-sm mb-6 opacity-60">{`
  ╔══════════════════╗
  ║   ERROR  ⚠️      ║
  ║   CODE: 500      ║
  ╚══════════════════╝`}</pre>
                        <h1 className="font-display text-2xl font-bold text-text-primary mb-4">Something went wrong</h1>
                        <p className="text-text-secondary mb-8">We apologize for the inconvenience. Please try refreshing the page.</p>
                        <div className="space-x-4">
                            <button onClick={() => window.location.reload()} className="btn-aurora btn-aurora-primary">Refresh Page</button>
                            <Link to="/" className="btn-aurora btn-aurora-outline inline-block">Go Home</Link>
                        </div>
                        {import.meta.env.DEV && this.state.error && (
                            <details className="mt-8 text-left glass-card p-4">
                                <summary className="cursor-pointer text-sm font-mono text-text-muted">$ cat error.log</summary>
                                <pre className="mt-2 text-xs text-coral overflow-auto font-mono">
                                    {this.state.error.toString()}
                                    {this.state.errorInfo?.componentStack}
                                </pre>
                            </details>
                        )}
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
