import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OutfitCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
