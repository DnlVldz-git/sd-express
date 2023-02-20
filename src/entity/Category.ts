import { Entity, PrimaryGeneratedColumn, Column, ObjectIdColumn, BaseEntity } from "typeorm";

@Entity()
export class Category extends BaseEntity {
  @ObjectIdColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  descripcion: string;
}
