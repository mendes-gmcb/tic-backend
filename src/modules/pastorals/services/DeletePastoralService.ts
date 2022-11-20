import { getCustomRepository } from "typeorm";
import AppError from "../../../errors/AppError";
import PastoralRepository from "../typeorm/repositories/PastoralRepository";

class DeletePastoralService{
    public async execute(id: string){
        const pastoralRepository = getCustomRepository(PastoralRepository)
        const pastoralExist = await pastoralRepository.findOne(id)
        if(!pastoralExist){
            throw new AppError('Pastoral não existe!', 400)
        }
        await pastoralRepository.remove(pastoralExist)
    }
}
export default DeletePastoralService