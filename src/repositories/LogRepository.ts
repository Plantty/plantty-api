import { EntityRepository, Repository } from "typeorm";
import Log from "../entities/Log";

@EntityRepository(Log)
class LogRepository extends Repository<Log> {}

export default LogRepository;