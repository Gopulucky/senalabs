// Navigation Link Component - Enterprise pattern
// Features: Active state, prefetch on hover, accessibility

import React, { useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getRouteByPath } from '../../routes';

/**
 * Enterprise NavLink with prefetch capability
 * Inspired by Next.js Link and Remix NavLink
 */
export const NavLink = ({
    to,
    children,
    className = '',
    activeClassName = '',
    prefetch = true,
    onClick,
    ...props
}) => {
    const location = useLocation();
    const isActive = location.pathname === to ||
        (to !== '/' && location.pathname.startsWith(to));

    // Prefetch route component on hover
    const handleMouseEnter = useCallback(() => {
        if (prefetch) {
            const route = getRouteByPath(to);
            if (route?.element?.preload) {
                route.element.preload();
            }
        }
    }, [to, prefetch]);

    const combinedClassName = `${className} ${isActive ? activeClassName : ''}`.trim();

    return (
        <Link
            to={to}
            className={combinedClassName}
            onMouseEnter={handleMouseEnter}
            onClick={onClick}
            aria-current={isActive ? 'page' : undefined}
            {...props}
        >
            {children}
        </Link>
    );
};

/**
 * Loading Skeleton for content
 */
export const Skeleton = ({ className = '', variant = 'text' }) => {
    const baseClasses = 'animate-pulse bg-gray-200 rounded';

    const variants = {
        text: 'h-4 w-full',
        title: 'h-8 w-3/4',
        avatar: 'h-12 w-12 rounded-full',
        card: 'h-48 w-full',
        image: 'h-64 w-full',
    };

    return <div className={`${baseClasses} ${variants[variant]} ${className}`} />;
};

/**
 * Page Loading Component
 */
export const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-gray-500">Loading...</p>
        </div>
    </div>
);

/**
 * Transition wrapper for page animations
 */
export const PageTransition = ({ children }) => (
    <div className="animate-fadeIn">
        {children}
    </div>
);

export default { NavLink, Skeleton, PageLoader, PageTransition };
