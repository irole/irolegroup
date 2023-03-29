import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import CustomError from './CustomError';

export class NotFoundError extends CustomError {
    constructor(message: string = ReasonPhrases.NOT_FOUND) {
        super(message);
        this.status = StatusCodes.NOT_FOUND;
    }
}
