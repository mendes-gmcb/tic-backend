import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { getCustomRepository } from "typeorm"
import AppError from "../../../errors/AppError"
import User from "../typeorm/entities/User"
import UserRepository from "../typeorm/repositories/UserRepository"

interface IRequest{
    email: string
    password: string
}
interface IResponse{
    user: User
    token: string
}
class CreateSessionService{
    public async execute({email, password}: IRequest): Promise<IResponse>{
        const userRepository = getCustomRepository(UserRepository)
        const user = await userRepository.findByEmail(email)
        if(!user){
            throw new AppError('Usuário/Senha inválido!', 401)
        }
        const confirmPassword = await compare(password, user.password)
        if(!confirmPassword){
            throw new AppError('Usuário/Senha inválido!', 401)
        }
        const token =sign({}, 'abababacaacacabaanadafagah', {
            subject: user.id,
            expiresIn: '1h'
        })
        return {
            user, 
            token
        }
    }
}
export default CreateSessionService