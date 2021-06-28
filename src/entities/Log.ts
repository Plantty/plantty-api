import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('logs')
class Log {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  plant: string;

  @Column()
  admin: string;

  @Column()
  editType: string;

  @Column()
  editDate: Date;
}

export default Log;
