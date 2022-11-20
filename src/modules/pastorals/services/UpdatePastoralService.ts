import { getCustomRepository } from "typeorm"
import AppError from "../../../errors/AppError"
import Pastoral from "../typeorm/entities/Pastoral"
import PastoralRepository from "../typeorm/repositories/PastoralRepository"

interface IRequest{
    id: string
    name: string
    description: string
    creator_id: string
}
class UpdatePastoralService{
    public async execute({id, name, description, creator_id}: IRequest): Promise<Pastoral>{
        const pastoralRepository = getCustomRepository(PastoralRepository)
        const pastoralExist = await pastoralRepository.findOne(id)
        if(!pastoralExist){
            throw new AppError('Pastoral não existe!', 400)
        }
        pastoralExist.name = name
        pastoralExist.description = description
        pastoralExist.creator_id = creator_id
        await pastoralRepository.save(pastoralExist)
        return pastoralExist
    }
}
export default UpdatePastoralService