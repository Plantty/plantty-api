import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import CommentRepository from "../repositories/CommentRepository";

interface CommentInterface {
  message: string;
  plantId: string;
  userId: string;
}

class CommentService {
  async create({ message, plantId, userId }: CommentInterface) {
    const repository = getCustomRepository(CommentRepository);

    const comment = await repository.create({
      message,
      plantId,
      userId,
    });

    await repository.save(comment);

    return comment;
  }

  async find(id: string) {
    const repository = getCustomRepository(CommentRepository);

    const comment = await repository.findOne({ id });

    if (!comment) {
      throw new Error("Comment does not exist");
    }

    return comment;
  }

  async list() {
    const repository = getCustomRepository(CommentRepository);

    const commentList = await repository.find();

    return classToPlain(commentList);
  }
}

export default CommentService;