import { getCustomRepository } from "typeorm"
import AppError from "../../../errors/AppError"
import Celebration from "../typeorm/entities/Celebration"
import CelebrationRepository from "../typeorm/repositories/CelebrationRepository"

interface IRequest{
    day: Date
    hour: number
    solemnitie: string
    confirm_celebration: number
}
class CreateCelebrationService{
    public async execute({day, hour, solemnitie, confirm_celebration}: IRequest): Promise<Celebration>{
        const celebrationRepository = getCustomRepository(CelebrationRepository)
        const celebrationExist = await celebrationRepository.findByDay(day)
        if(celebrationExist){
            throw new AppError('A solenidade já foi registrada neste dia', 400)
        }
        const newCelebration = celebrationRepository.create({
            day,
            hour,
            solemnitie,
            confirm_celebration
        })
        await celebrationRepository.save(newCelebration)
        return newCelebration
    }
}
export default CreateCelebrationService