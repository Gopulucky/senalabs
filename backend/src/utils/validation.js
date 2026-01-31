// Input validation utilities
// Enterprise-grade validation without external dependencies

const validators = {
    /**
     * Validate email format
     */
    isEmail: (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    /**
     * Validate required string
     */
    isRequired: (value) => {
        return value !== undefined && value !== null && String(value).trim() !== '';
    },

    /**
     * Validate minimum length
     */
    minLength: (value, min) => {
        return String(value).length >= min;
    },

    /**
     * Validate maximum length
     */
    maxLength: (value, max) => {
        return String(value).length <= max;
    },

    /**
     * Sanitize input (prevent XSS)
     */
    sanitize: (value) => {
        if (typeof value !== 'string') return value;
        return value
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;')
            .trim();
    }
};

/**
 * Validation schema runner
 */
const validate = (data, schema) => {
    const errors = [];

    for (const [field, rules] of Object.entries(schema)) {
        const value = data[field];

        for (const rule of rules) {
            if (rule.type === 'required' && !validators.isRequired(value)) {
                errors.push({ field, message: rule.message || `${field} is required` });
                break; // Skip other validations if required fails
            }

            if (rule.type === 'email' && value && !validators.isEmail(value)) {
                errors.push({ field, message: rule.message || `${field} must be a valid email` });
            }

            if (rule.type === 'minLength' && value && !validators.minLength(value, rule.value)) {
                errors.push({ field, message: rule.message || `${field} must be at least ${rule.value} characters` });
            }

            if (rule.type === 'maxLength' && value && !validators.maxLength(value, rule.value)) {
                errors.push({ field, message: rule.message || `${field} must be at most ${rule.value} characters` });
            }
        }
    }

    return {
        isValid: errors.length === 0,
        errors
    };
};

/**
 * Sanitize all string fields in an object
 */
const sanitizeObject = (obj) => {
    const sanitized = {};
    for (const [key, value] of Object.entries(obj)) {
        sanitized[key] = validators.sanitize(value);
    }
    return sanitized;
};

module.exports = {
    validators,
    validate,
    sanitizeObject
};
