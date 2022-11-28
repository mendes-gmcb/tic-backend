import { NextFunction, Request, Response } from "express";
import CreateSessionService from "../services/CreateSessionService";

class SessionController{
    public async create(request: Request, response: Response, next: NextFunction): Promise<Response | void>{
        try {
            let {email, password} = request.body
            const createService = new CreateSessionService()
            const user = await createService.execute({email, password})
            return response.json(user)
        } catch (error) {
            next(error);
        }
    }
}
export default SessionController