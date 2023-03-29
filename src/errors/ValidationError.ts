import { StatusCodes } from 'http-status-codes';
import CustomError from './CustomError';

export class ValidationError extends CustomError {
    errors: any[];

    constructor(errors: any, message: string = 'Validation error') {
        super(message);
        this.errors = errors;
        this.status = StatusCodes.BAD_REQUEST;
    }
}
