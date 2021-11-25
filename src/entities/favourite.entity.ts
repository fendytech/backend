import { Entity, PrimaryGeneratedColumn, OneToOne, OneToMany } from 'typeorm';
import { Customer } from './customer.entity';
import { ProductItem } from './productItem.entity';

@Entity()
export class Favourite {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type=> Customer)
  customer: Customer;

  @OneToMany(type=> ProductItem, prodcutItem => prodcutItem.id)
  products: ProductItem[];

//   Some logic to count Product Quantity inside cart
}
