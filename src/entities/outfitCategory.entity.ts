import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Outfit } from './outfit.entity';

@Entity()
export class OutfitCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  subCategory: string;

  @OneToMany(type=> Outfit , outfit=> outfit.id)
  outfit: Outfit

}
