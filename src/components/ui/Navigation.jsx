// Navigation Components – Aurora Terminal Theme
import React, { useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getRouteByPath } from '../../routes';

export const NavLink = ({ to, children, className = '', activeClassName = '', prefetch = true, onClick, ...props }) => {
    const location = useLocation();
    const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
    const handleMouseEnter = useCallback(() => {
        if (prefetch) { const route = getRouteByPath(to); if (route?.element?.preload) route.element.preload(); }
    }, [to, prefetch]);
    return (
        <Link to={to} className={`${className} ${isActive ? activeClassName : ''}`.trim()} onMouseEnter={handleMouseEnter} onClick={onClick} aria-current={isActive ? 'page' : undefined} {...props}>
            {children}
        </Link>
    );
};

export const Skeleton = ({ className = '', variant = 'text' }) => {
    const variants = { text: 'h-4 w-full', title: 'h-8 w-3/4', avatar: 'h-12 w-12 rounded-full', card: 'h-48 w-full', image: 'h-64 w-full' };
    return <div className={`animate-pulse bg-bg-elevated rounded ${variants[variant]} ${className}`} />;
};

export const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
            <div className="font-mono text-aurora-cyan text-2xl animate-pulse">⠋</div>
            <p className="font-mono text-text-muted text-sm">loading...</p>
        </div>
    </div>
);

export const PageTransition = ({ children }) => (<div className="animate-fadeInUp">{children}</div>);
export default { NavLink, Skeleton, PageLoader, PageTransition };
