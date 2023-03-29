import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import CustomError from './CustomError';

export class ConflictError extends CustomError {
    constructor(message: string = ReasonPhrases.CONFLICT) {
        super(message);
        this.status = StatusCodes.CONFLICT;
    }
}
