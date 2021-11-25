import { Entity, PrimaryGeneratedColumn, OneToOne, Column} from 'typeorm';
import { Outfit } from './outfit.entity';

@Entity()
export class SpecialOutfit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  typeOfOutfit: string;
  
  @OneToOne(type=>Outfit)
  outfitID: Outfit;
}
