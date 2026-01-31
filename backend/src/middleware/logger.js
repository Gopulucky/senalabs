// Request logging middleware - Enterprise grade

const { Logger } = require('../utils/logger');
const logger = new Logger('HTTP');

const requestLogger = (req, res, next) => {
    const start = Date.now();

    // Log request
    logger.info(`→ ${req.method} ${req.originalUrl}`, {
        ip: req.ip,
        userAgent: req.get('User-Agent')?.substring(0, 50)
    });

    // Log response on finish
    res.on('finish', () => {
        const duration = Date.now() - start;
        const statusCode = res.statusCode;
        const level = statusCode >= 500 ? 'error' : statusCode >= 400 ? 'warn' : 'info';

        logger[level](`← ${req.method} ${req.originalUrl} ${statusCode}`, {
            duration: `${duration}ms`
        });
    });

    next();
};

module.exports = requestLogger;
