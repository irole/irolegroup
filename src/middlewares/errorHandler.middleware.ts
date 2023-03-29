import {Request, Response, NextFunction} from 'express';
import {StatusCodes, getReasonPhrase} from 'http-status-codes';
import CustomError, {ValidationError} from "../errors";

class ErrorHandlerMiddleware {
    handle(err: Error, req: Request, res: Response, next: NextFunction) {
        if (err instanceof ValidationError) {
            res.status(err.getStatus()).json({
                success: false,
                status: err.getStatus(),
                label: getReasonPhrase(err.getStatus()),
                result: err.getMessage(),
                errors: err.errors,
            });
        } else if (err instanceof CustomError) {
            res.status(err.getStatus()).json({
                success: false,
                status: err.getStatus(),
                label: getReasonPhrase(err.getStatus()),
                result: err.getMessage(),
            });
        } else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                status: StatusCodes.INTERNAL_SERVER_ERROR,
                label: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
                result: err.message,
            });
        }
    }
}

export default new ErrorHandlerMiddleware();
