import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Outfit } from 'src/entities/outfit.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OutfitService {
    constructor(
        @InjectRepository(Outfit)
        private outfitRepository: Repository<Outfit>
    ){}
  getHello(): any {
      return "outfit Service";
  }

  getOutfitByCategory(id: string){
      return this.outfitRepository.find({category: id});
  }

  getSimilarOutfit(id: string){
      return({outfits: []});
  }

  async getOutfitsFromQuery(query: Object){
     return({...query});
  }

  
}
