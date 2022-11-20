import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import AppError from "../errors/AppError";

export default function isAuthenticated(request: Request, response: Response, next: NextFunction): void{
    const authHeaders = request.headers.authorization
    if(!authHeaders){
        throw new AppError('Token não informado!', 400)
    }
    const [, token] = authHeaders.split(' ')
    try{
        const tokenVerified = verify(token, 'abababacaacacabaanadafagah')
        return next()
    }
    catch{
        throw new AppError('Token inválido!', 400)
    }
}