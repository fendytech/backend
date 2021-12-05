import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Outfit } from 'src/entities/outfit.entity';
import { OutfitCategory } from 'src/entities/outfitCategory.entity';
import { SpecialOutfit } from 'src/entities/specialOutfit.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HomeService {
    constructor(
        @InjectRepository(OutfitCategory)
        private outfitCategoryRepository: Repository<OutfitCategory>,

        @InjectRepository(SpecialOutfit)
        private specialOutfitsRepository : Repository<SpecialOutfit>
    ){}
  getHello(): any {
      return "outfit Category";
  }

  async getOutfitCategoryById(id: string){
      return await this.outfitCategoryRepository.findOne(id);
  }

  async getAllCategories(){
      return await this.outfitCategoryRepository.createQueryBuilder('Categories').getMany();
  }

  async getSpecialOutfits(type: string){
      return await this.specialOutfitsRepository.createQueryBuilder('Featured').where(`Featured.typeOfOutfit = ${type}`).getMany();
  }

  async getBannerDetails(){
    //   Need to add MongoDB Logic Here
      return ({});
  }


  
}
