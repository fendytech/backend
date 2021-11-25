import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeController } from 'src/controllers/home.controller';
import { Favourite } from 'src/entities/favourite.entity';
import { OutfitCategory } from 'src/entities/outfitCategory.entity';
import { SpecialOutfit } from 'src/entities/specialOutfit.entity';
import { HomeService } from 'src/services/home.service';

@Module({
  imports: [TypeOrmModule.forFeature([OutfitCategory,SpecialOutfit,Favourite])],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
