import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from 'src/controllers/product.controller';
import { UserController } from 'src/controllers/user.controller';
import { Address } from 'src/entities/address.entity';
import { Cart } from 'src/entities/cart.entity';
import { Customer } from 'src/entities/customer.entity';
import { Favourite } from 'src/entities/favourite.entity';
import { Product } from 'src/entities/product.entitiy';
import { S3Service } from 'src/services/amazon.s3.service';
import { UserService } from 'src/services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([Customer,Cart,Product,Favourite,Address])],
  controllers: [UserController,ProductController],
  providers: [UserService,S3Service],
})
export class UserModule {}
