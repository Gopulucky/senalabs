// Contact Controller - HTTP handling layer
// Thin controller that delegates to service layer

const ContactService = require('../services/contactService');
const ApiResponse = require('../utils/apiResponse');

const contactController = {
    /**
     * POST /api/contact
     * Create a new contact submission
     */
    submitContact: (req, res, next) => {
        try {
            const result = ContactService.create(req.body);

            if (!result.success) {
                if (result.errors) {
                    return ApiResponse.validationError(res, result.errors);
                }
                return ApiResponse.badRequest(res, result.error);
            }

            return ApiResponse.created(res, result.data, 'Message received successfully!');
        } catch (error) {
            next(error);
        }
    },

    /**
     * GET /api/contacts
     * Get all contact submissions (admin)
     */
    getContacts: (req, res, next) => {
        try {
            const result = ContactService.getAll();
            return ApiResponse.success(res, result.data);
        } catch (error) {
            next(error);
        }
    }
};

module.exports = contactController;
