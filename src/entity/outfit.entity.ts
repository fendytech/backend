import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne } from 'typeorm';
import { OutfitCategory } from './outfitCategory.entity';

@Entity()
export class Outfit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(type=>OutfitCategory)
  category: string;

  @Column()
  description: string;
}
