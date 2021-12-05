import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn } from 'typeorm';
import { OutfitCategory } from './outfitCategory.entity';

@Entity()
export class Outfit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(type=>OutfitCategory, outfitcat => outfitcat.id)
  @JoinColumn()
  category: string;
  
  @Column()
  description: string;
}
