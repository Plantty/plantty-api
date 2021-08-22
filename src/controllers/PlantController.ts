import { Request, Response } from "express";

import PlantService from "../services/PlantService";
import cloudinary from "../utils/Cloudinary";

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
      description
    } = req.body;

    try {
      
      const imageUpload = await cloudinary.uploader.upload(req.file.path, {
        folder: "plants",
        resource_type: "auto"
      });

      const plant = await plantService.create({
        popularName,
        scientificName,
        ambience,
        origin,
        climate,
        gender,
        description,
        plantImage: imageUpload.url,
      });

      return res.status(200).json(plant);
    } catch (err) {
      console.log(err);
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
