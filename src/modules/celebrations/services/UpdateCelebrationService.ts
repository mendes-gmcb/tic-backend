import { getCustomRepository } from "typeorm"
import AppError from "../../../errors/AppError"
import Celebration from "../typeorm/entities/Celebration"
import CelebrationRepository from "../typeorm/repositories/CelebrationRepository"

interface IRequest{
    id: string
    day: Date
    hour: number
    solemnitie: string
    confirm_celebration: number
}
class UpdateCelebrationService{
    public async execute({id, day, hour, solemnitie, confirm_celebration}: IRequest): Promise<Celebration>{
        const celebrationRepository = getCustomRepository(CelebrationRepository)
        const celebrationExist = await celebrationRepository.findOne(id)
        if(!celebrationExist){
            throw new AppError('Evento não existe!', 400)
        }
        celebrationExist.day = day
        celebrationExist.hour = hour
        celebrationExist.solemnitie = solemnitie
        celebrationExist.confirm_celebration = confirm_celebration
        await celebrationRepository.save(celebrationExist)
        return celebrationExist
    }
}
export default UpdateCelebrationService