import { Request, Response } from "express";
import { decode } from "jsonwebtoken";
import AppError from "../../../errors/AppError";
import CreateUserService from "../services/CreateUserService";
import ListUserService from "../services/ListUserService";
import ShowUserService from "../services/ShowUserService";

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
}
export default UserController