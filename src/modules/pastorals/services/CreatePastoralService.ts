import { getCustomRepository } from "typeorm"
import AppError from "../../../errors/AppError"
import Pastoral from "../typeorm/entities/Pastoral"
import PastoralRepository from "../typeorm/repositories/PastoralRepository"

interface IRequest{
    name: string
    description: string
    creator_id: string
}
class CreatePastoralService{
    public async execute({name, description, creator_id}: IRequest): Promise<Pastoral>{
        const pastoralRepository = getCustomRepository(PastoralRepository)
        const pastoralExist = await pastoralRepository.findByName(name)
        if(pastoralExist){
            throw new AppError('Já existe uma pastoral com este nome', 400)
        }
        const newPastoral = pastoralRepository.create({
            name,
            description,
            creator_id
        })
        await pastoralRepository.save(newPastoral)
        return newPastoral
    }
}
export default CreatePastoralService