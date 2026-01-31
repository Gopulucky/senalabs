// SenA Labs Backend Server
// Enterprise-grade Express application

require('dotenv').config();

const express = require('express');
const cors = require('cors');

// Config
const config = require('./src/config');
const { logger } = require('./src/utils/logger');

// Middleware
const requestLogger = require('./src/middleware/logger');
const errorHandler = require('./src/middleware/errorHandler');

// Routes
const contactRoutes = require('./src/routes/contactRoutes');
const subscriptionRoutes = require('./src/routes/subscriptionRoutes');

// Initialize Express
const app = express();

// Trust proxy (for accurate IP logging behind reverse proxy)
app.set('trust proxy', 1);

// Global Middleware
app.use(cors({
    origin: config.corsOrigin,
    credentials: true
}));
app.use(express.json({ limit: '10kb' })); // Limit body size for security
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

// API Routes
app.use(config.apiPrefix, contactRoutes);
app.use(config.apiPrefix, subscriptionRoutes);

// Health Check
app.get('/', (req, res) => {
    res.json({
        name: 'SenA Labs API',
        version: config.apiVersion,
        status: 'healthy',
        environment: config.nodeEnv,
        timestamp: new Date().toISOString()
    });
});

// API Info
app.get(config.apiPrefix, (req, res) => {
    res.json({
        message: 'SenA Labs API',
        version: config.apiVersion,
        endpoints: {
            contact: `${config.apiPrefix}/contact`,
            subscribe: `${config.apiPrefix}/join`
        }
    });
});

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
        path: req.originalUrl
    });
});

// Global Error Handler
app.use(errorHandler);

// Start Server
if (require.main === module) {
    app.listen(config.port, () => {
        logger.info(`🚀 Server running on http://localhost:${config.port}`);
        logger.info(`📍 Environment: ${config.nodeEnv}`);
        logger.info(`🔗 CORS Origin: ${config.corsOrigin}`);
    });
}

module.exports = app;
