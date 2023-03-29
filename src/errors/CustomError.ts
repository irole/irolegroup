import { StatusCodes } from 'http-status-codes';

interface ICustomError {
    status: StatusCodes;
    message: string;
}

export default class CustomError extends Error implements ICustomError {
    public status: StatusCodes;
    public message: string;

    constructor(message: string) {
        super(message);
        this.message = message;
        this.status = StatusCodes.INTERNAL_SERVER_ERROR;
    }

    getStatus(): StatusCodes {
        return this.status;
    }

    setStatus(value: StatusCodes) {
        this.status = value;
    }

    getMessage(): string {
        return this.message;
    }

    setMessage(value: string) {
        this.message = value;
    }
}
