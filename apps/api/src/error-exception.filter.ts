import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { BaseExceptionFilter } from '@nestjs/core';
import { ValidationError } from 'class-validator';
import { Prisma } from 'database/generated/prisma';

type ErrorResponseObject = {
    statusCode: number,
    response: any
}

@Catch()
export class errorExceptionFilter extends BaseExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        const errorResponseObject: ErrorResponseObject = {
            statusCode: 500,
            response: ''
        }

        if (exception instanceof HttpException) {
            errorResponseObject.statusCode = exception.getStatus();
            errorResponseObject.response = exception.getResponse();
        } else if (exception instanceof Prisma.PrismaClientKnownRequestError) {
            if (exception.code === 'P2002') {
                errorResponseObject.statusCode = HttpStatus.CONFLICT;
                errorResponseObject.response = exception.message;
            } else if (exception.code === 'P2025') {
                errorResponseObject.statusCode = HttpStatus.NOT_FOUND;
                errorResponseObject.response = exception.message;
            } else {
                errorResponseObject.statusCode = HttpStatus.BAD_REQUEST;
                errorResponseObject.response = exception.message;
            }
        } else if (exception instanceof Prisma.PrismaClientValidationError) {
            errorResponseObject.statusCode = HttpStatus.BAD_REQUEST;
            errorResponseObject.response = exception.message;
        }
        else if (exception instanceof ValidationError) {
            errorResponseObject.statusCode = 622
            errorResponseObject.response = exception.contexts
        }
        else {
            errorResponseObject.statusCode = 500
            errorResponseObject.response = `Internal Server Error from: ${exception?.constructor?.name}`;
        }

        response
            .status(errorResponseObject.statusCode)
            .json(errorResponseObject)

        super.catch(exception, host)
    }
}

