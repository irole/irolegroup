import CustomError from './CustomError';
import { StatusCodes } from 'http-status-codes';

export class ForbiddenError extends CustomError {
    constructor(message: string) {
        super(message);
        this.status = StatusCodes.FORBIDDEN;
    }
}
