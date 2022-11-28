import { NextFunction, Request, Response } from "express";
import { decode } from "jsonwebtoken";
import AppError from "../../../errors/AppError";
import CreateUserService from "../services/CreateUserService";
import ListUserService from "../services/ListUserService";
import ShowUserService from "../services/ShowUserService";
import UpdateUserService from "../services/UpdateUserService";

class UserController{
    public async create(request: Request, response: Response): Promise<Response>{
        let {name, email, password, phone} = request.body
        const createService = new CreateUserService()
        const newUser = await createService.execute({name, email, password, phone})
        return response.json(newUser)
    }

    public async list(request: Request, response: Response): Promise<Response>{
        const listService = new ListUserService()
        let users = listService.execute()
        return response.json(users)
    }

    public async show(request: Request, response: Response): Promise<Response>{
        const authHeaders = request.headers.authorization
        if(!authHeaders){
            throw new AppError('Token não informado!', 400)
        }
        const [, token] = authHeaders.split(' ')
        const payload = decode(token);
        if (payload == null || typeof payload == "string") {
            throw new AppError('Token mal formado', 400);
        }
        const {sub} = payload;

        const showService = new ShowUserService()
        let user = await showService.execute({id: sub})
        return response.json(user)
    }

    public async update(request: Request, response: Response, next: NextFunction): Promise<Response | void>{
        const {name, email, password, phone, newEmail} = request.body;

        const updateService = new UpdateUserService()
        try {
            const updateUser = await updateService.execute({name, email, password, phone, newEmail})
            return response.json(updateUser)
        } catch (error) {
            next(error);
        }
    }
}
export default UserController