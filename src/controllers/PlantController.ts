import { Request, Response } from "express";

import PlantService from "../services/PlantService";

class PlantController {
  async index(req: Request, res: Response) {
    const plantService = new PlantService();

    const plantList = await plantService.list();

    return res.status(200).json(plantList);
  }

  async store(req: Request, res: Response) {
    const plantService = new PlantService();

    const {
      popularName,
      scientificName,
      ambience,
      origin,
      climate,
      gender,
      description,
      plantImage,
    } = req.body;

    try {
      const plant = await plantService.create({
        popularName,
        scientificName,
        ambience,
        origin,
        climate,
        gender,
        description,
        plantImage,
      });

      return res.status(200).json(plant);
    } catch (err) {
      return res.status(404).json({ error: { message: err.message } });
    }
  }

  async show(req: Request, res: Response) {
    const plantService = new PlantService();

    const { search } = req.params;

    try {
      const plant = await plantService.find(search);
      return res.status(200).json(plant);
    } catch (err) {
      return res.status(404).json({ error: { message: err.message } });
    }
  }
}

export default new PlantController();
