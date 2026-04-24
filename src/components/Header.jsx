// Header – Aurora Terminal Glassmorphic Nav
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

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav-scrolled py-2' : 'glass-nav py-3'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-3 group"
                    onMouseEnter={() => handleLinkHover('/')}
                >
                    <div className="relative">
                        <img
                            src="/images/logo.jpeg"
                            alt={APP_NAME}
                            className="h-9 w-9 rounded-xl object-cover transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                        />
                    </div>
                    <span className="text-lg font-bold text-text-primary tracking-tight font-display">
                        {APP_NAME}
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onMouseEnter={() => handleLinkHover(item.path)}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 font-mono ${isActiveLink(item.path)
                                ? 'text-aurora-cyan bg-aurora-cyan/10'
                                : 'text-text-muted hover:text-text-primary hover:bg-white/5'
                                }`}
                            aria-current={isActiveLink(item.path) ? 'page' : undefined}
                        >
                            {isActiveLink(item.path) ? `[ ${item.name} ]` : item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 w-full glass-card-strong transition-all duration-200 ${isOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-1 pointer-events-none'
                    }`}
                style={{ borderRadius: 0, borderTop: 'none' }}
            >
                <nav className="flex flex-col p-3 gap-1">
                    {NAV_ITEMS.map((item, i) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`px-4 py-3 rounded-lg text-sm font-medium font-mono transition-all ${isActiveLink(item.path)
                                ? 'text-aurora-cyan bg-aurora-cyan/10'
                                : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                                }`}
                            style={{ animationDelay: `${i * 50}ms` }}
                        >
                            {isActiveLink(item.path) ? `[ ${item.name} ]` : item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
