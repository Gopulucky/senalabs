// Header – Material Design Flat Enterprise
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, APP_NAME } from '../constants';
import { getRouteByPath } from '../routes';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => { setIsOpen(false); }, [location.pathname]);

    const handleLinkHover = useCallback((path) => {
        const route = getRouteByPath(path);
        if (route?.element?.preload) route.element.preload();
    }, []);

    const isActiveLink = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    const isTeamPage = location.pathname === '/team';

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'glass-strong elevation-2 py-2'
                : isTeamPage
                    ? 'bg-orange-50 py-3'
                    : 'bg-white/70 backdrop-blur-sm py-3'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-3 group"
                    onMouseEnter={() => handleLinkHover('/')}
                >
                    <img
                        src="/images/logo.jpeg"
                        alt={APP_NAME}
                        className="h-9 w-9 rounded-xl object-cover transition-transform duration-200 group-hover:scale-105"
                    />
                    <span className="text-lg font-bold text-gray-800 tracking-tight">{APP_NAME}</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onMouseEnter={() => handleLinkHover(item.path)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActiveLink(item.path)
                                ? 'bg-orange-50 text-orange-600 font-semibold'
                                : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                                }`}
                            aria-current={isActiveLink(item.path) ? 'page' : undefined}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-white elevation-3 transition-all duration-200 ${isOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-1 pointer-events-none'
                    }`}
            >
                <nav className="flex flex-col p-3 gap-1">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActiveLink(item.path)
                                ? 'bg-orange-50 text-orange-600'
                                : 'text-gray-600 hover:bg-gray-50'
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
