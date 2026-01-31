// Subscription Service - Business logic layer

const { logger } = require('../utils/logger');
const { validate, sanitizeObject } = require('../utils/validation');

// In-memory storage
const subscriptions = [];

// Validation schema
const subscriptionSchema = {
    email: [
        { type: 'required', message: 'Email is required' },
        { type: 'email', message: 'Please provide a valid email address' }
    ]
};

const subLogger = logger.child('SubscriptionService');

const SubscriptionService = {
    /**
     * Create a new subscription
     */
    create: (data) => {
        // Validate
        const validation = validate(data, subscriptionSchema);
        if (!validation.isValid) {
            return { success: false, errors: validation.errors };
        }

        // Sanitize
        const sanitized = sanitizeObject(data);

        // Check for duplicates
        const exists = subscriptions.find(s => s.email === sanitized.email);
        if (exists) {
            return { success: false, error: 'Email already subscribed' };
        }

        // Create subscription
        const subscription = {
            id: Date.now().toString(36) + Math.random().toString(36).substr(2),
            email: sanitized.email,
            createdAt: new Date().toISOString()
        };

        subscriptions.push(subscription);
        subLogger.info('Subscription created', { id: subscription.id, email: subscription.email });

        return { success: true, data: subscription };
    },

    /**
     * Get all subscriptions
     */
    getAll: () => {
        return { success: true, data: subscriptions };
    }
};

module.exports = SubscriptionService;
