import express, { NextFunction, Request, Response } from "express";
import cors from 'cors';
import AppError from "./errors/AppError";
import router from "./routes";
import './typeorm'
import 'express-async-errors'

let servidor = express()
servidor.use(express.json())
servidor.use(cors())
servidor.use(router)
servidor.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        })
    }
    console.log(error)
    return response.status(500).json({
        status: 'error',
        message: "Error interno do servidor"
    })
})

servidor.listen(3333, () => {
    console.log('Servidor Iniciado!')
})