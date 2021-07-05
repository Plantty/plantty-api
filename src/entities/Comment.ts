import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";

@Entity('comments')
class Comment {

  @PrimaryColumn()
  id: string;

  @Column()
  message: string;

  @Column()
  created_at: Date;

  @Column()
  plantId: string;

  @Column()
  userId: string;

  constructor() {
    this.id = v4();
  }
}

export default Comment;