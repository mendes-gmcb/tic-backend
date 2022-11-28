import { EntityRepository, Repository } from "typeorm";
import Celebration from "../entities/Celebration";

@EntityRepository(Celebration)
class CelebrationRepository extends Repository<Celebration>{
    public async findByDay(day: Date): Promise<Celebration | undefined>{
        let celebration = await this.findOne({
            where: {
                day
            }
        })
        return celebration
    }
    
    public async findByUuid(id: string): Promise<Celebration | undefined>{
        let celebration = await this.findOne({
            where: {
                id
            }
        })
        return celebration
    }
}
export default CelebrationRepository