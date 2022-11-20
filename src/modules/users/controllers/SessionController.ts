import { Request, Response } from "express";
import CreateSessionService from "../services/CreateSessionService";

class SessionController{
    public async create(request: Request, response: Response): Promise<Response>{
        let {email, password} = request.body
        const createService = new CreateSessionService()
        const user = await createService.execute({email, password})
        return response.json(user)
    }
}
export default SessionController