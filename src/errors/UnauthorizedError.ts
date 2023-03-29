import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import CustomError from './CustomError';

export class UnauthorizedError extends CustomError {
    constructor(message: string = ReasonPhrases.UNAUTHORIZED) {
        super(message);
        this.status = StatusCodes.UNAUTHORIZED;
    }
}
