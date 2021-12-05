import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany } from 'typeorm';
import { Customer } from './customer.entity';
import { Product } from './product.entitiy';
import { ProductItem } from './productItem.entity';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type=> Customer)
  customer: Customer;

  @Column()
  price: number;

  @OneToMany(type=> ProductItem, prodcutItem => prodcutItem.id)
  products: ProductItem[];

//   Some logic to count Product Quantity inside cart
}
