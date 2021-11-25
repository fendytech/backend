import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from 'src/controllers/user.controller';
import { Address } from 'src/entities/address.entity';
import { Cart } from 'src/entities/cart.entity';
import { Customer } from 'src/entities/customer.entity';
import { Favourite } from 'src/entities/favourite.entity';
import { Product } from 'src/entities/product.entitiy';
import { UserService } from 'src/services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([Customer,Cart,Product,Favourite,Address])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
