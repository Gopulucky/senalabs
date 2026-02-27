import React from 'react';

/**
 * Loading Spinner Component
 */
export const Spinner = ({ size = 'md', className = '' }) => {
    const sizes = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
        xl: 'w-12 h-12',
    };

    return (
        <div className={`${sizes[size]} ${className}`}>
            <svg
                className="animate-spin"
                viewBox="0 0 24 24"
                fill="none"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                />
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
            </svg>
        </div>
    );
};

/**
 * Loading Button Component
 */
export const LoadingButton = ({
    children,
    loading = false,
    disabled = false,
    className = '',
    ...props
}) => {
    return (
        <button
            disabled={loading || disabled}
            className={`relative ${className} ${loading || disabled ? 'opacity-70 cursor-not-allowed' : ''}`}
            {...props}
        >
            {loading && (
                <span className="absolute inset-0 flex items-center justify-center">
                    <Spinner size="sm" />
                </span>
            )}
            <span className={loading ? 'invisible' : ''}>
                {children}
            </span>
        </button>
    );
};

/**
 * Alert Component for displaying messages
 */
export const Alert = ({ type = 'info', message, onClose }) => {
    const styles = {
        success: 'bg-green-50 text-green-800 border-green-200',
        error: 'bg-red-50 text-red-800 border-red-200',
        warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
        info: 'bg-blue-50 text-blue-800 border-blue-200',
    };

    const icons = {
        success: '✓',
        error: '✕',
        warning: '⚠',
        info: 'ℹ',
    };

    return (
        <div className={`p-4 rounded-lg border ${styles[type]} flex items-start gap-3`}>
            <span className="text-lg">{icons[type]}</span>
            <p className="flex-1">{message}</p>
            {onClose && (
                <button onClick={onClose} className="opacity-60 hover:opacity-100">
                    ✕
                </button>
            )}
        </div>
    );
};

export default { Spinner, LoadingButton, Alert };
