import { hash } from "bcryptjs"
import { getCustomRepository } from "typeorm"
import AppError from "../../../errors/AppError"
import User from "../typeorm/entities/User"
import UserRepository from "../typeorm/repositories/UserRepository"

interface IRequest{
    name: string
    email: string
    password: string | null | undefined
    phone: string 
    newEmail: string
}
class UpdateUserService{
    public async execute({name, email, password, phone, newEmail}: IRequest): Promise<User>{
        const userRepository = getCustomRepository(UserRepository)
        const user = await userRepository.findByEmail(email)
        if(!user){
            throw new AppError('Não existe um usuário com este email', 400)
        }
        let criptoPassword = ""
        if (password) user.password = await hash(password, 10)

        user.name = name;
        user.email = newEmail;
        user.phone = phone;

        await userRepository.save(user)
        return user;
    }
}
export default UpdateUserService