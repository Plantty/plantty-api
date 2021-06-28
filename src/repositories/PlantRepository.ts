import { EntityRepository, Repository } from "typeorm";
import Plant from "../entities/Plant";

@EntityRepository(Plant)
class PlantRepository extends Repository<Plant> {}

export default PlantRepository;