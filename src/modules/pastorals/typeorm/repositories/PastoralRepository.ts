import { EntityRepository, Repository } from "typeorm";
import Pastoral from "../entities/Pastoral";

@EntityRepository(Pastoral)
class PastoralRepository extends Repository<Pastoral>{
    public async findByName(name: string): Promise<Pastoral | undefined>{
        let pastoral = await this.findOne({
            where: {
                name
            }
        })
        return pastoral
    }
}
export default PastoralRepository