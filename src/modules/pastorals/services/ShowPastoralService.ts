import { getCustomRepository } from "typeorm";
import AppError from "../../../errors/AppError";
import Pastoral from "../typeorm/entities/Pastoral";
import PastoralRepository from "../typeorm/repositories/PastoralRepository";

interface IRequest{
    id: string
}
class ShowPastoralService{
    public async execute({id}: IRequest): Promise<Pastoral>{
        const pastoralRepository = getCustomRepository(PastoralRepository)
        let pastoral = await pastoralRepository.findOne(id)
        if(!pastoral){
            throw new AppError('Pastoral não existe!', 400)
        }
        return pastoral
    }
}
export default ShowPastoralService