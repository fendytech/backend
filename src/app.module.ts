import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Address } from './entities/address.entity';
import { Cart } from './entities/cart.entity';
import { Customer } from './entities/customer.entity';
import { Favourite } from './entities/favourite.entity';
import { Outfit } from './entities/outfit.entity';
import { OutfitCategory } from './entities/outfitCategory.entity';
import { Product } from './entities/product.entitiy';
import { ProductItem } from './entities/productItem.entity';
import { SpecialOutfit } from './entities/specialOutfit.entity';
import { AuthModule } from './modules/auth.module';
import { HomeModule } from './modules/home.module';
import { OutfitModule } from './modules/outfit.module';
import { UserModule } from './modules/user.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'test',
    entities: [Outfit,OutfitCategory,SpecialOutfit,Customer,Cart,ProductItem,Product,Favourite,Address],
    synchronize: true,
  }),AuthModule,OutfitModule,HomeModule,UserModule,ConfigModule.forRoot({
    envFilePath: './config/.env',
    isGlobal: true,
  }),MongooseModule.forRoot('mongodb+srv://fendytech:fendydev@fendy-dev.3nuiq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
