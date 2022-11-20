import { getCustomRepository } from "typeorm";
import Pastoral from "../typeorm/entities/Pastoral";
import PastoralRepository from "../typeorm/repositories/PastoralRepository";

class ListPastoralService{
    public async execute(): Promise<Pastoral[]>{
        const pastoralRepository = getCustomRepository(PastoralRepository)
        let pastorals =  await pastoralRepository.find()
        return pastorals
    } 
}
export default ListPastoralService