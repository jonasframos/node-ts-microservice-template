import { Request, Response } from 'express'

interface IResponder {
    responseCode: number,
    req: Request,
    res: Response,
    data?: object,
    errors?: object
}

interface IMessage {
    status: string,
    httpCode: number,
    message?: string
}

interface IDictionary<IMessage> {
    [id: number]: IMessage;
}

export module Responder {
    export async function send(IResponder: IResponder): Promise<void> {
        let { responseCode, req, res, data, errors } = IResponder
        let response: any = {}

        if(messages[responseCode]){
            if(messages[responseCode]['status']) response.status = messages[responseCode]['status']
            if(messages[responseCode]['httpCode']) response.httpCode = messages[responseCode]['httpCode']
            if(messages[responseCode]['message']) response.message = messages[responseCode]['message']
        }

        if(data) response.data = data
        if(errors) response.errors = errors

        res.status(response.httpCode).json(response)
        res.end()
    }
}

const messages: IDictionary<IMessage> = {
    200: {
        status: 'success',
        httpCode: 200
    },
    401: {
        status: 'unauthorized',
        message: 'The token provided is not authorized for this route',
        httpCode: 401
    },
    3000: {
        status: 'success',
        message: 'Here is your pong!',
        httpCode: 200
    }
}