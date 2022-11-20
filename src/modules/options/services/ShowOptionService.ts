import { getCustomRepository } from "typeorm";
import AppError from "../../../errors/AppError";
import Option from "../typeorm/entities/Option";
import OptionRepository from "../typeorm/repositories/OptionRepository";

class ShowOptionService{
    public async execute(id_pastoral: string): Promise<Option>{
        const optionRepository = getCustomRepository(OptionRepository)
        let optionPastoral = await optionRepository.findOne(id_pastoral)
        if(!optionPastoral){
            throw new AppError('Não existe opções registradas para essa pastoral', 400)
        }
        return optionPastoral
    }
}
export default ShowOptionService