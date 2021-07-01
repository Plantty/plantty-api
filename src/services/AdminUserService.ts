import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import AdminUserRepository from "../repositories/AdminUserRepository";

interface AdminUserInterface {
  username: string;
  password: string;
}

class AdminUserService {
  async create({ username, password }: AdminUserInterface) {
    const repository = getCustomRepository(AdminUserRepository);

    const hasAdmin = await repository.findOne({ username });

    if(hasAdmin) {
      throw new Error('AdminUser already exists')
    }

    const hashPassword = await hash(password, 8);

    const adminUser = await repository.create({ username, password: hashPassword });

    await repository.save(adminUser);

    return adminUser;
  }
}

export default AdminUserService;
