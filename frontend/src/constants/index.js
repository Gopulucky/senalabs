// Application constants - Centralized configuration
// Pattern: Google/Anthropic style constants file

export const APP_NAME = 'SenA Labs';
export const APP_TAGLINE = 'Innovating the Future';

// Navigation items configuration
export const NAV_ITEMS = [
    { name: 'Home', path: '/', exact: true },
    { name: 'Programs', path: '/programs' },
    { name: 'Hackathons', path: '/hackathons' },
    { name: 'Expos', path: '/expos' },
    { name: 'R&D', path: '/projects' },
    { name: 'Team', path: '/team' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

// API Configuration
export const API_CONFIG = {
    BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
    PREFIX: '/api',
    TIMEOUT: 10000,
};

// Animation durations (for consistency)
export const ANIMATION = {
    FAST: 150,
    NORMAL: 300,
    SLOW: 500,
};

// Breakpoints (matches Tailwind)
export const BREAKPOINTS = {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
};

export default {
    APP_NAME,
    APP_TAGLINE,
    NAV_ITEMS,
    API_CONFIG,
    ANIMATION,
    BREAKPOINTS,
};
