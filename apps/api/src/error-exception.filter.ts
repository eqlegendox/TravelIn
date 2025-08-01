import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { BaseExceptionFilter } from '@nestjs/core';
import { ValidationError } from 'class-validator';

type ErrorResponseObject = {
    statusCode: number,
    response: any
}

@Catch()
export class errorExceptionFilter extends BaseExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        const errorResponseObject: ErrorResponseObject = {
            statusCode: 500,
            response: ''
        }

        if (exception instanceof HttpException) {
            errorResponseObject.statusCode = exception.getStatus()
            errorResponseObject.response = exception.getResponse()
        }
        else if (exception instanceof ValidationError) {
            errorResponseObject.statusCode = 622
            errorResponseObject.response = exception.contexts
        }
        else {
            errorResponseObject.statusCode = 500
            errorResponseObject.response = 'Internal Server Errorz'
        }

        response
            .status(errorResponseObject.statusCode)
            .json(errorResponseObject)

        super.catch(exception, host)
    }
}

