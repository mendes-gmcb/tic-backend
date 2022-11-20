import { getCustomRepository } from "typeorm";
import AppError from "../../../errors/AppError";
import Celebration from "../typeorm/entities/Celebration";
import CelebrationRepository from "../typeorm/repositories/CelebrationRepository";

interface IRequest{
    id: string
}
class ShowCelebrationService{
    public async execute({id}: IRequest): Promise<Celebration>{
        const celebrationRepository = getCustomRepository(CelebrationRepository)
        let celebration = await celebrationRepository.findOne(id)
        if(!celebration){
            throw new AppError('Evento não existe!', 400)
        }
        return celebration
    }
}
export default ShowCelebrationService