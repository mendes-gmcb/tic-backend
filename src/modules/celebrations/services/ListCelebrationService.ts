import { getCustomRepository } from "typeorm";
import Celebration from "../typeorm/entities/Celebration";
import CelebrationRepository from "../typeorm/repositories/CelebrationRepository";

class ListCelebrationService{
    public async execute(): Promise<Celebration[]>{
        const celebrationRepository = getCustomRepository(CelebrationRepository)
        let celebrations = await celebrationRepository.find()
        return celebrations
    }
}
export default ListCelebrationService