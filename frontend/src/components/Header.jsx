// Enterprise Header Component
// Features: Prefetch on hover, active link highlighting, mobile menu with context

import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, APP_NAME } from '../constants';
import { getRouteByPath } from '../routes';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    // Prefetch route on hover (enterprise pattern)
    const handleLinkHover = useCallback((path) => {
        const route = getRouteByPath(path);
        // Trigger lazy load preload if available
        if (route?.element?.preload) {
            route.element.preload();
        }
    }, []);

    // Check if link is active
    const isActiveLink = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary shadow-lg py-3' : 'bg-primary py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-3 cursor-pointer group"
                    onMouseEnter={() => handleLinkHover('/')}
                >
                    <img
                        src="/images/logo.jpeg"
                        alt={APP_NAME}
                        className="h-10 w-10 rounded-full object-cover group-hover:ring-2 ring-white/30 transition-all"
                    />
                    <div className="text-2xl font-bold text-white tracking-tight">
                        {APP_NAME}
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-1">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onMouseEnter={() => handleLinkHover(item.path)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActiveLink(item.path)
                                    ? 'bg-white/10 text-white'
                                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                                }`}
                            aria-current={isActiveLink(item.path) ? 'page' : undefined}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none p-2 hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-primary border-t border-white/10 shadow-xl transition-all duration-300 ${isOpen
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
            >
                <nav className="flex flex-col p-4 space-y-1">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActiveLink(item.path)
                                    ? 'bg-white/10 text-white'
                                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
