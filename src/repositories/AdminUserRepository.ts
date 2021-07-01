import { EntityRepository, Repository } from "typeorm";
import AdminUser from "../entities/AdminUser";

@EntityRepository(AdminUser)
class AdminUserRepository extends Repository<AdminUser>{}

export default AdminUserRepository;