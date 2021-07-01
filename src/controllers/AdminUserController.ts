import { Request, Response } from "express";
import AdminUserService from "../services/AdminUserService";

class AdminUserController {
  async store(req: Request, res: Response) {
    const { username, password } = req.body;

    const adminUserService = new AdminUserService();

    try {
      const adminUser = await adminUserService.create({ username, password });
      return res.status(200).json(adminUser);
    } catch (err) {
      return res.status(404).json({ error: { message: err.message } });
    }
  }
}

export default new AdminUserController();
