import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Outfit } from './outfit.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  description: string;

  @OneToMany(type => Outfit, outfit => outfit.id)
  outfit: Outfit[];
}
