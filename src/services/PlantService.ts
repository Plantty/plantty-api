import { getCustomRepository } from "typeorm";
import PlantRepository from "../repositories/PlantRepository";
import { validate } from "uuid";
import { classToPlain } from "class-transformer";

interface PlantInterface {
  popularName: string;
  scientificName: string;
  ambience: string;
  origin: string;
  climate: string;
  gender: string;
  description: string;
  plantImage: string;
}

class PlantService {
  async create({
    popularName,
    scientificName,
    ambience,
    origin,
    climate,
    gender,
    description,
    plantImage,
  }: PlantInterface) {
    const repository = getCustomRepository(PlantRepository);

    const hasPlant = await repository.findOne({ popularName });

    if (hasPlant) {
      throw new Error("Plant already exists");
    }

    const plant = await repository.create({
      popularName,
      scientificName,
      ambience,
      origin,
      climate,
      gender,
      description,
      plantImage,
    });
    await repository.save(plant);

    return plant;
  }

  async find(search: string) {
    const repository = getCustomRepository(PlantRepository);

    const plant = await repository.findOne(
      validate(search) ? { id: search } : { popularName: search }
    );

    if (!plant) {
      throw new Error("Plant does not exist");
    }

    return plant;
  }

  async list() {
    const repository = getCustomRepository(PlantRepository);

    const plantList = await repository.find();

    return classToPlain(plantList);
  }
}

export default PlantService;
