import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Address } from './address.entity';
import { Cart } from './cart.entity';
import { Favourite } from './favourite.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @OneToOne(type=> Cart, cart => cart.customer)
  @JoinColumn()
  cart: Cart;

  @OneToOne(type => Favourite)
  @JoinColumn()
  favourites: Favourite;

  @OneToMany(type=> Address,address=>address.customer)
  @JoinColumn()
  addresses: Address[]
}
