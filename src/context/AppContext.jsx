// Application Context - Global state management
// Pattern: React Context (used by Meta, Vercel, etc.)

import React, { createContext, useContext, useReducer, useMemo } from 'react';

// Initial state
const initialState = {
    isMenuOpen: false,
    theme: 'light',
    isLoading: false,
    notification: null,
};

// Action types
const ActionTypes = {
    TOGGLE_MENU: 'TOGGLE_MENU',
    SET_MENU: 'SET_MENU',
    SET_THEME: 'SET_THEME',
    SET_LOADING: 'SET_LOADING',
    SET_NOTIFICATION: 'SET_NOTIFICATION',
    CLEAR_NOTIFICATION: 'CLEAR_NOTIFICATION',
};

// Reducer
function appReducer(state, action) {
    switch (action.type) {
        case ActionTypes.TOGGLE_MENU:
            return { ...state, isMenuOpen: !state.isMenuOpen };
        case ActionTypes.SET_MENU:
            return { ...state, isMenuOpen: action.payload };
        case ActionTypes.SET_THEME:
            return { ...state, theme: action.payload };
        case ActionTypes.SET_LOADING:
            return { ...state, isLoading: action.payload };
        case ActionTypes.SET_NOTIFICATION:
            return { ...state, notification: action.payload };
        case ActionTypes.CLEAR_NOTIFICATION:
            return { ...state, notification: null };
        default:
            return state;
    }
}

// Context
const AppContext = createContext(null);

// Provider component
export function AppProvider({ children }) {
    const [state, dispatch] = useReducer(appReducer, initialState);

    // Memoized actions
    const actions = useMemo(() => ({
        toggleMenu: () => dispatch({ type: ActionTypes.TOGGLE_MENU }),
        closeMenu: () => dispatch({ type: ActionTypes.SET_MENU, payload: false }),
        openMenu: () => dispatch({ type: ActionTypes.SET_MENU, payload: true }),
        setTheme: (theme) => dispatch({ type: ActionTypes.SET_THEME, payload: theme }),
        setLoading: (loading) => dispatch({ type: ActionTypes.SET_LOADING, payload: loading }),
        showNotification: (notification) => dispatch({
            type: ActionTypes.SET_NOTIFICATION,
            payload: notification
        }),
        clearNotification: () => dispatch({ type: ActionTypes.CLEAR_NOTIFICATION }),
    }), []);

    const value = useMemo(() => ({
        ...state,
        ...actions,
    }), [state, actions]);

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

// Custom hook to use app context
export function useApp() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
}

export default AppContext;
