import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, ManyToOne } from 'typeorm';
import { Customer } from './customer.entity';
import { Product } from './product.entitiy';
import { ProductItem } from './productItem.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type=> Customer)
  customer: Customer;

  @Column()
  pincode: number;

  @Column()
  addressOwner: string;

  @Column()
  line1: string;

  @Column()
  line2: string;

  @Column()
  city: string;

  @Column()
  state: string;

//   Some logic to count Product Quantity inside cart
}
