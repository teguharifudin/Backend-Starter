import { Exclude } from 'class-transformer';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Exclude({ toPlainOnly:true })
  @Column()
  password?: string;

  @Column()
  email: string;

  @Column()
  role: string;
}
