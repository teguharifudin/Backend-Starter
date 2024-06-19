import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    description: string;
  
    @Column()
    file: string;
  
    @Column()
    created: Date;
  
    @Column()
    updated: Date;

    @Column()
    adminId: number;
  
    @Column()
    price: number;
  }
  