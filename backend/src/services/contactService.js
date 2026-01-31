// Contact Service - Business logic layer
// Separates business logic from HTTP concerns

const { logger } = require('../utils/logger');
const { validate, sanitizeObject } = require('../utils/validation');

// In-memory storage (can be replaced with database later)
const contacts = [];

// Validation schema for contact
const contactSchema = {
    name: [
        { type: 'required', message: 'Name is required' },
        { type: 'minLength', value: 2, message: 'Name must be at least 2 characters' },
        { type: 'maxLength', value: 100, message: 'Name must be at most 100 characters' }
    ],
    email: [
        { type: 'required', message: 'Email is required' },
        { type: 'email', message: 'Please provide a valid email address' }
    ],
    message: [
        { type: 'maxLength', value: 1000, message: 'Message must be at most 1000 characters' }
    ]
};

const contactLogger = logger.child('ContactService');

const ContactService = {
    /**
     * Create a new contact submission
     */
    create: (data) => {
        // Validate input
        const validation = validate(data, contactSchema);
        if (!validation.isValid) {
            return { success: false, errors: validation.errors };
        }

        // Sanitize input
        const sanitized = sanitizeObject(data);

        // Create contact record
        const contact = {
            id: Date.now().toString(36) + Math.random().toString(36).substr(2),
            name: sanitized.name,
            email: sanitized.email,
            message: sanitized.message || '',
            createdAt: new Date().toISOString()
        };

        contacts.push(contact);
        contactLogger.info('Contact created', { id: contact.id, email: contact.email });

        return { success: true, data: contact };
    },

    /**
     * Get all contacts
     */
    getAll: () => {
        return { success: true, data: contacts };
    },

    /**
     * Get contact by ID
     */
    getById: (id) => {
        const contact = contacts.find(c => c.id === id);
        if (!contact) {
            return { success: false, error: 'Contact not found' };
        }
        return { success: true, data: contact };
    }
};

module.exports = ContactService;
