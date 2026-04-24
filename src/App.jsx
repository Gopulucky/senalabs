// SenA Labs — Aurora Terminal Design
// Pattern: Lazy loading, Context, Suspense (Google/Meta pattern)

import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { routes } from './routes';
import './App.css';

// Static components (always loaded)
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import { PageLoader } from './components/ui/Navigation';

function App() {
    return (
        <AppProvider>
            <ErrorBoundary>
                <div className="app-shell bg-deep text-secondary font-sans">
                    {/* Aurora Background Orbs */}
                    <div className="aurora-bg">
                        <div className="aurora-orb aurora-orb-1" />
                        <div className="aurora-orb aurora-orb-2" />
                        <div className="aurora-orb aurora-orb-3" />
                    </div>

                    {/* Noise texture overlay */}
                    <div className="noise-overlay" />

                    {/* Main Content */}
                    <div className="app-content">
                        <ScrollToTop />
                        <Header />

                        {/* Suspense for lazy-loaded routes */}
                        <Suspense fallback={<PageLoader />}>
                            <Routes>
                                {routes.map((route) => (
                                    <Route
                                        key={route.path}
                                        path={route.path}
                                        element={<route.element />}
                                    />
                                ))}
                            </Routes>
                        </Suspense>

                        <Footer />
                    </div>
                </div>
            </ErrorBoundary>
        </AppProvider>
    );
}

export default App;
