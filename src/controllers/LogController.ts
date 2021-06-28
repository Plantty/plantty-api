import { Request, Response } from "express";
import LogService from "../services/LogService";

class LogController {
  async index(req: Request, res: Response) {
    const logService = new LogService();

    const log = await logService.list();

    return res.status(200).json(log);
  }

  async store(req: Request, res: Response) {
    const logService = new LogService();

    const { plant, admin, editType } = req.body;

    try {
      const log = await logService.create({
        plant,
        admin,
        editType,
      });
      return res.status(200).json(log);
    } catch (err) {
      return res.status(404).json({ error: { message: err.message } });
    }
  }

  async show(req: Request, res: Response) {
    const logService = new LogService();

    const { id } = req.params;

    try {
      const log = await logService.find(Number(id));
      return res.status(200).json(log);
    } catch (err) {
      return res.status(404).json({ error: { message: err.message } });
    }
  }
}

export default new LogController();
