import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";

@Entity('adminUsers')
class AdminUser {

  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  created_at: Date;

  constructor() {
    this.id = v4();
  }
}

export default AdminUser;