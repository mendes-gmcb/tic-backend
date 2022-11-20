import { getCustomRepository } from "typeorm"
import AppError from "../../../errors/AppError"
import PastoralRepository from "../../pastorals/typeorm/repositories/PastoralRepository"
import Option from "../typeorm/entities/Option"
import OptionRepository from "../typeorm/repositories/OptionRepository"

interface IRequest{
    id: string
    manual_organization: number
    experience_organization: number
    form_team: number
    set_interval: number
    various_scales: number
}
class CreateOptionService{
    public async execute({id, manual_organization, experience_organization, form_team, set_interval, various_scales}: IRequest){
        const optionRepository = getCustomRepository(OptionRepository)
        const pastoralRepository = getCustomRepository(PastoralRepository)
        const pastoralExist = await pastoralRepository.findOne(id)
        if(!pastoralExist){
            throw new AppError('Pastoral não existe!', 400)
        }
        const newOption =  optionRepository.create({
            id: id,
            manual_organization,
            experience_organization, 
            form_team,
            set_interval,
            various_scales
        })
        await optionRepository.save(newOption)
    }
}
export default CreateOptionService