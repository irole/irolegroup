import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import CustomError from './CustomError';

export class ServerError extends CustomError {
    constructor(message: string = ReasonPhrases.INTERNAL_SERVER_ERROR) {
        super(message);
        this.status = StatusCodes.INTERNAL_SERVER_ERROR;
    }
}
