// Subscription Controller

const SubscriptionService = require('../services/subscriptionService');
const ApiResponse = require('../utils/apiResponse');

const subscriptionController = {
    /**
     * POST /api/join
     * Subscribe to newsletter
     */
    subscribe: (req, res, next) => {
        try {
            const result = SubscriptionService.create(req.body);

            if (!result.success) {
                if (result.errors) {
                    return ApiResponse.validationError(res, result.errors);
                }
                return ApiResponse.badRequest(res, result.error);
            }

            return ApiResponse.created(res, result.data, 'Subscribed successfully!');
        } catch (error) {
            next(error);
        }
    },

    /**
     * GET /api/subscriptions (admin)
     */
    getAll: (req, res, next) => {
        try {
            const result = SubscriptionService.getAll();
            return ApiResponse.success(res, result.data);
        } catch (error) {
            next(error);
        }
    }
};

module.exports = subscriptionController;
