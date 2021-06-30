import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {

  async store(req: Request, res: Response) {
    const { firstName, lastName, password, email, photo_url = '', birthDate} = req.body;

    const userService = new UserService();

    try {
      const user = await userService.create({ firstName, lastName, password, email, photo_url, birthDate });
      return res.status(200).json(user);
    } catch (err) {
      return res.status(404).json({ error: { message: err.message } });
    }
  }
  
  async show(req: Request, res: Response) {
    const { search } = req.params;

    const userService = new UserService();

    try {
      const user = await userService.find(search);
      return res.status(200).json(user);
    } catch (err) {
      return res.status(404).json({ error: { message: err.message } });
    }
  }
}

export default new UserController();