import { EntityRepository, Repository } from "typeorm";
import Option from "../entities/Option";

@EntityRepository(Option)
class OptionRepository extends Repository<Option>{
}
export default OptionRepository