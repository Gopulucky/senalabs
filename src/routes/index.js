// Route configuration - Enterprise pattern
// Inspired by: Next.js, React Router best practices

import { lazy } from 'react';

// Lazy load pages for code splitting (like Google/Meta apps)
const Home = lazy(() => import('../pages/Home'));
const ProgramsPage = lazy(() => import('../pages/ProgramsPage'));
const HackathonsPage = lazy(() => import('../pages/HackathonsPage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const TeamPage = lazy(() => import('../pages/TeamPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ExposPage = lazy(() => import('../pages/ExposPage'));

// Route configuration
export const routes = [
    {
        path: '/',
        element: Home,
        title: 'Home',
        description: 'Welcome to SenA Labs',
    },
    {
        path: '/programs',
        element: ProgramsPage,
        title: 'Programs',
        description: 'Our training programs and workshops',
    },
    {
        path: '/hackathons',
        element: HackathonsPage,
        title: 'Hackathons',
        description: 'Our hackathon projects and achievements',
    },
    {
        path: '/projects',
        element: ProjectsPage,
        title: 'R&D Projects',
        description: 'Research and development initiatives',
    },
    {
        path: '/team',
        element: TeamPage,
        title: 'Our Team',
        description: 'Meet the people behind SenA Labs',
    },
    {
        path: '/contact',
        element: ContactPage,
        title: 'Contact Us',
        description: 'Get in touch with us',
    },
    {
        path: '/about',
        element: AboutPage,
        title: 'About Us',
        description: 'Our mission and vision',
    },
    {
        path: '/expos',
        element: ExposPage,
        title: 'Expos & Events',
        description: 'Gallery of our events and activities',
    },
];

// Helper to get route by path
export const getRouteByPath = (path) => {
    return routes.find(route => route.path === path);
};

// Prefetch a route's component (for hover prefetching)
export const prefetchRoute = (path) => {
    const route = getRouteByPath(path);
    if (route) {
        // Trigger lazy load
        route.element.preload?.();
    }
};

export default routes;
