// Global error handler middleware

const { Logger } = require('../utils/logger');
const config = require('../config');

const logger = new Logger('ErrorHandler');

const errorHandler = (err, req, res, next) => {
    // Log the error
    logger.error(err.message, {
        stack: config.isDev ? err.stack : undefined,
        path: req.originalUrl,
        method: req.method
    });

    // Determine status code
    const statusCode = err.statusCode || 500;

    // Send response
    res.status(statusCode).json({
        success: false,
        message: config.isProd ? 'Internal server error' : err.message,
        ...(config.isDev && { stack: err.stack }),
        timestamp: new Date().toISOString()
    });
};

module.exports = errorHandler;
