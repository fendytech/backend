import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany } from 'typeorm';
import { Customer } from './customer.entity';
import { Product } from './product.entitiy';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type=> Customer)
  customer: Customer;

  @Column()
  price: number;

  @OneToMany(type=> Product, prodcut => prodcut.id)
  products: [];

//   Some logic to count Product Quantity inside cart
}
