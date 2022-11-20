import { hash } from "bcryptjs"
import { getCustomRepository } from "typeorm"
import AppError from "../../../errors/AppError"
import User from "../typeorm/entities/User"
import UserRepository from "../typeorm/repositories/UserRepository"

interface IRequest{
    name: string
    email: string
    password: string
    phone: string
}
class CreateUserService{
    public async execute({name, email, password, phone}: IRequest): Promise<User>{
        const userRepository = getCustomRepository(UserRepository)
        const userExist = await userRepository.findByEmail(email)
        if(userExist){
            throw new AppError('Já existe um usuário com este email', 400)
        }
        let criptoPassword = await hash(password, 10)
        const newUser = userRepository.create({
            name, 
            email, 
            password: criptoPassword,
            phone
        })
        await userRepository.save(newUser)
        return newUser
    }
}
export default CreateUserService