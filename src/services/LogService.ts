import { getCustomRepository } from "typeorm";
import LogRepository from "../repositories/LogRepository";
import { classToPlain } from "class-transformer";

interface LogInterface {
  plant: string;
  admin: string;
  editType: string;
}

class LogService {
  async create({ plant, admin, editType }: LogInterface) {
    const repository = getCustomRepository(LogRepository);

    const log = await repository.create({
      plant,
      admin,
      editType,
    });

    await repository.save(log);

    return log;
  }

  async find(id: number) {
    const repository = getCustomRepository(LogRepository);

    const log = await repository.findOne({ id });

    if (!log) {
      throw new Error("Log does not exist");
    }

    return log;
  }

  async list() {
    const repository = getCustomRepository(LogRepository);

    const logList = await repository.find();

    return classToPlain(logList);
  }
}

export default LogService;
