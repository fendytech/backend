import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Outfit } from './outfit.entity';
import { Product } from './product.entitiy';

@Entity()
export class ProductItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  size: string;

  @Column()
  price: number;

  @OneToOne(type => Product)
  productID: string;

  @Column()
  quantity: number;
}
