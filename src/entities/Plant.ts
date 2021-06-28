import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";

@Entity('plants')
class Plant {

  @PrimaryColumn()
  id: string;

  @Column()
  popularName: string;

  @Column()
  scientificName: string;

  @Column()
  ambience: string;

  @Column()
  origin: string;

  @Column()
  climate: string;
  
  @Column()
  gender: string;

  @Column()
  description: string;

  @Column()
  plantImage: string;

  constructor() {
    this.id = v4();
  }
}

export default Plant;