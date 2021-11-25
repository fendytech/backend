import { Body, Controller, Get, HttpStatus, Param, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { HomeService } from 'src/services/home.service';

@Controller('home')
@ApiTags('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  getHello(): string {
    return this.homeService.getHello();
  }

  @Get('category/:categoryID')
  @ApiResponse({status: HttpStatus.OK, description: 'Sending Outfit Data'})
  @ApiResponse({status: HttpStatus.BAD_REQUEST, description: 'Invalid Category ID'})
  async getOutfitByCategory(@Param('categoryID') id: string){
    return await this.homeService.getOutfitCategoryById(id)
  }

  @Get('categories')
  async getAllCategory(){
    return await this.homeService.getAllCategories();
  }

  @Get('gallery/get')
  async getSpecialOutfits(@Query('type') type: string){
    return this.homeService.getSpecialOutfits(type);
  }

  @Get('banners')
  async getBannerDetails(){
    return this.homeService.getBannerDetails();
  }
  
}
