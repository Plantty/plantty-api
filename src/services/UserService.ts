import { getCustomRepository } from "typeorm";
import { validate } from "uuid";
import UserRepository from "../repositories/UserRepository";

interface UserInterface {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  photo_url?: string;
  birthDate: Date;
}

class UserService {
  async create({
    firstName,
    lastName,
    password,
    email,
    photo_url,
    birthDate,
  }: UserInterface) {
    const repository = getCustomRepository(UserRepository);

    const hasUser = await repository.findOne({ email });

    if (hasUser) {
      throw new Error("Admin user already exists");
    }

    const user = await repository.create({
      firstName,
      lastName,
      password,
      email,
      photo_url,
      birthDate,
    });

    await repository.save(user);

    return user;
  }

  async find(search: string) {
    const repository = getCustomRepository(UserRepository);

    const user = await repository.findOne(
      validate(search) ? { id: search } : { firstName: search }
    );

    if (!user) {
      throw new Error("Admin user not exists");
    }

    return user;
  }
}

export default UserService;
