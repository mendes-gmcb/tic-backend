import { getCustomRepository } from "typeorm";
import AppError from "../../../errors/AppError";
import CelebrationRepository from "../typeorm/repositories/CelebrationRepository";

class DeleteCelebrationService{
    public async execute(id: string){
        const celebrationRepository = getCustomRepository(CelebrationRepository)
        let celebrationExist = await celebrationRepository.findOne(id)
        if(!celebrationExist){
            throw new AppError('Evento não existe!',400)
        }
        await celebrationRepository.remove(celebrationExist)
    }
}
export default DeleteCelebrationService