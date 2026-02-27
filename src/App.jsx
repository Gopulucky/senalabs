// SenA Labs - Enterprise React Application
// Pattern: Lazy loading, Context, Suspense (Google/Meta pattern)

import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { routes } from './routes';

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
        <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
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
      </ErrorBoundary>
    </AppProvider>
  );
}

export default App;
