import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";

@Entity('users')
class User {

  @PrimaryColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  photo_url: string;

  @Column()
  birthDate: Date;

  @Column()
  created_at: Date;

  constructor() {
    this.id = v4();
  }
}

export default User;