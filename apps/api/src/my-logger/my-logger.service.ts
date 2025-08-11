import { ConsoleLogger, Injectable } from '@nestjs/common';
import { Logger } from 'winston';
import * as winston from "winston";

const consoleFormat = winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(({ timestamp, level, message }) => {
        return `[${timestamp}] ${level}: ${message}`;
    })
);

const fileFormat = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(({ timestamp, level, message }) => {
        return `[${timestamp}] ${level}: ${message}`;
    })
);

const winstonConfig = {
    transports: [
        new winston.transports.Console({ format: consoleFormat }),
        new winston.transports.File({ filename: 'combined.log', format: fileFormat }),
    ]
};

@Injectable()
export class MyLoggerService extends ConsoleLogger {
    private logger: Logger
    constructor() {
        super(),
        this.logger = winston.createLogger(winstonConfig)
    }
    
    log(message: any, context?: string) {
        this.logger.log({ level: 'info', message: `${message}` })
        // super.log(message, context)
    }

    error(message: any, stackOrContext?: string) {
        this.logger.log({ level: 'error', message })
        // super.error(message, stackOrContext)
    }
}
