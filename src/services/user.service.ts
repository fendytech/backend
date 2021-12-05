import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQuery } from 'mysql2/typings/mysql/lib/Connection';
import { Address } from 'src/entities/address.entity';
import { Cart } from 'src/entities/cart.entity';
import { Customer } from 'src/entities/customer.entity';
import { Favourite } from 'src/entities/favourite.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Customer)
        private customerRepository: Repository<Customer>,
        @InjectRepository(Cart)
        private cartRepository: Repository<Cart>,
        @InjectRepository(Favourite)
        private favouriteRepository: Repository<Favourite>,
        @InjectRepository(Address)
        private addressRepository: Repository<Address>,
    ){}

    async getUserCart(userID : number){
        return await this.customerRepository.createQueryBuilder('customer').leftJoinAndSelect('customer.cart','id').where('customer.id = :customerId',{customerId: userID}).getOne();

    }

    async addNewUser(userData: Object){
        if(!userData['name'] || !userData['email']|| !userData['phone']){
            throw new BadRequestException("Provide All Data Fields");
        }
        let customer = new Customer();
        customer.name = userData['name'];
        let cart = new Cart();
        let favourite = new Favourite();
        await this.cartRepository.save(cart);
        await this.favouriteRepository.save(favourite)
        customer.cart = cart;
        customer.favourites = favourite;
        customer.addresses = [];
        customer.email = userData['email'];
        customer.password = userData['password'];
        customer.phone = userData['phone'];

        
        return await this.customerRepository.save(customer);
    }

    async getAddress(authData: Object){
        return await this.customerRepository.createQueryBuilder('customer').leftJoinAndSelect('customer.addresses','id').where('customer.id = :customerId',{customerId: 14}).getOne();
    }

    async addAddress(authData: Object){
        return {success: true}
    }
}
