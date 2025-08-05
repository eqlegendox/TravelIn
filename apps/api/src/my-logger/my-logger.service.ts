import { ConsoleLogger, Injectable } from '@nestjs/common';
import { Logger } from 'winston';
import * as winston from "winston";


const winstonConfig = {
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize(),
        winston.format.simple()
    ),
    transports: [
        new winston.transports.Console({}),
        new winston.transports.File({ filename: 'combined.log' }),
    ]
}

@Injectable()
export class MyLoggerService extends ConsoleLogger {
    private logger: Logger

    log(message: any, context?: string) {
        this.logger = winston.createLogger(winstonConfig)
        const mess = `user_x: ${message}`
        this.logger.log({ level: 'info', message: `user_x: ${message}` })
        // super.log(message, context)
    }

    error(message: any, stackOrContext?: string) {
        this.logger = winston.createLogger(winstonConfig)
        this.logger.log({ level: 'error', message })
        // super.error(message, stackOrContext)
    }
}
