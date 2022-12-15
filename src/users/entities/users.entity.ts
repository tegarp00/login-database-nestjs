import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  password: string

  @Column()
  biodata: string

  @Column()
  name: string

  @Column()
  image: string

  @Column()
  pic_id: number

  @CreateDateColumn()
  created_at: Date
  
  @CreateDateColumn()
  updated_at: Date
}