// Structured logging utility
// Simple but enterprise-grade logging without Winston (to minimize dependencies)

const config = require('../config');

const LOG_LEVELS = {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3
};

const COLORS = {
    error: '\x1b[31m',   // Red
    warn: '\x1b[33m',    // Yellow
    info: '\x1b[36m',    // Cyan
    debug: '\x1b[35m',   // Magenta
    reset: '\x1b[0m'
};

class Logger {
    constructor(context = 'App') {
        this.context = context;
        this.level = LOG_LEVELS[config.logLevel] ?? LOG_LEVELS.info;
    }

    _formatMessage(level, message, meta = {}) {
        const timestamp = new Date().toISOString();
        const color = COLORS[level];
        const reset = COLORS.reset;

        const metaStr = Object.keys(meta).length > 0
            ? ` ${JSON.stringify(meta)}`
            : '';

        return `${color}[${timestamp}] [${level.toUpperCase()}] [${this.context}]${reset} ${message}${metaStr}`;
    }

    _log(level, message, meta) {
        if (LOG_LEVELS[level] <= this.level) {
            console.log(this._formatMessage(level, message, meta));
        }
    }

    error(message, meta = {}) {
        this._log('error', message, meta);
    }

    warn(message, meta = {}) {
        this._log('warn', message, meta);
    }

    info(message, meta = {}) {
        this._log('info', message, meta);
    }

    debug(message, meta = {}) {
        this._log('debug', message, meta);
    }

    /**
     * Create a child logger with a new context
     */
    child(context) {
        return new Logger(`${this.context}:${context}`);
    }
}

// Default logger instance
const logger = new Logger();

module.exports = { Logger, logger };
