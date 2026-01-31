// Specialized API services for specific features
import api from './api';

/**
 * Contact API Service
 */
export const contactApi = {
    /**
     * Submit a contact form
     */
    submit: async (data) => {
        return api.post('/contact', data);
    },
};

/**
 * Subscription API Service
 */
export const subscriptionApi = {
    /**
     * Subscribe to newsletter
     */
    subscribe: async (email) => {
        return api.post('/join', { email });
    },
};

export default { contactApi, subscriptionApi };
