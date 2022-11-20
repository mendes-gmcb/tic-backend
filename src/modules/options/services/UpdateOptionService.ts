import { getCustomRepository } from "typeorm"
import AppError from "../../../errors/AppError"
import Option from "../typeorm/entities/Option"
import OptionRepository from "../typeorm/repositories/OptionRepository"

interface IRequest{
    id_pastoral: string
    manual_organization: number
    experience_organization: number
    form_team: number
    set_interval: number
    various_scales: number
}
class UpdateOptionService{
    public async execute({id_pastoral, manual_organization, experience_organization, form_team, set_interval, various_scales}: IRequest): Promise<Option>{
        const optionRepository = getCustomRepository(OptionRepository)
        const optionPastoral = await optionRepository.findOne(id_pastoral)
        if(!optionPastoral){
            throw new AppError('Não existe opções para essa pastoral', 400)
        }
        optionPastoral.manual_organization = manual_organization
        optionPastoral.experience_organization = experience_organization
        optionPastoral.form_team = form_team
        optionPastoral.set_interval = set_interval
        optionPastoral.various_scales = various_scales
        await optionRepository.save(optionPastoral)
        return optionPastoral
    }
}
export default UpdateOptionService