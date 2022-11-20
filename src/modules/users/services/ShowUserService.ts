import { compare } from "bcryptjs"
import { sign, decode } from "jsonwebtoken"
import { getCustomRepository } from "typeorm"
import AppError from "../../../errors/AppError"
import User from "../typeorm/entities/User"
import UserRepository from "../typeorm/repositories/UserRepository"

interface IRequest{
    id: string | undefined
}
interface IResponse{
    user: User
}
class ShowUserService{
    public async execute({id}: IRequest): Promise<IResponse | null | any>{
        const userRepository = getCustomRepository(UserRepository)

        if (typeof id == "undefined") {
            throw new AppError("Token mal formatado!", 400);
        }

        const user = await userRepository.findOne({id})
       
        if(!user){
            throw new AppError('Usuário não encontrado!', 401)
        }
        
        return user;
    }
}
export default ShowUserService