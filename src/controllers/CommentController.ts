import { Request, Response } from "express";
import CommentService from "../services/CommentService";

class CommentController {
  async index(req: Request, res: Response) {
    const commentService = new CommentService();

    try {
      const comment = await commentService.list();
      return res.status(200).json(comment);
    } catch (err) {
      return res.status(404).json({ error: { message: err.message } });
    }
  }

  async store(req: Request, res: Response) {
    const { message, plantId, userId } = req.body;

    const commentService = new CommentService();

    try {
      const comment = await commentService.create({ message, plantId, userId });
      return res.status(200).json(comment);
    } catch (err) {
      return res.status(404).json({ error: { message: err.message } });
    }
  }
}

export default new CommentController();
