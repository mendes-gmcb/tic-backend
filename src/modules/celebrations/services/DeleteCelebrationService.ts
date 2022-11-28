import { getCustomRepository } from "typeorm";
import AppError from "../../../errors/AppError";
import CelebrationRepository from "../typeorm/repositories/CelebrationRepository";

class DeleteCelebrationService{
    public async execute(id: string){
        const celebrationRepository = getCustomRepository(CelebrationRepository)
        let celebrationExist = await celebrationRepository.findByUuid(id)
        if(!celebrationExist){
            throw new AppError('Evento não existe!',400)
        }
        await celebrationRepository.remove(celebrationExist)
        console.log("excluiu o evento")
    }
}
export default DeleteCelebrationService