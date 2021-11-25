import { Body, Controller, Get, HttpStatus, Param, Query } from '@nestjs/common';
import { ApiResponse, ApiTags,ApiQuery, ApiProperty,ApiQueryOptions } from '@nestjs/swagger';
import { OutfitService } from 'src/services/outfit.service';

@Controller('outfits')
@ApiTags('outfit')
export class OutfitController {
  constructor(private readonly outfitService: OutfitService) {}

  @Get()
  getHello(): string {
    return this.outfitService.getHello();
  }

  @Get('category/:categoryID')
  @ApiResponse({status: HttpStatus.OK, description: 'Sending Outfit Data'})
  @ApiResponse({status: HttpStatus.BAD_REQUEST, description: 'Invalid Category ID'})
  getOutfitByCategory(@Param('categoryID') id: string): any{
    return this.outfitService.getOutfitByCategory(id)
  }

  @Get('search')
  @ApiProperty({enum: ['L','M','S','XL']})
  @ApiQuery({name: 'color', type: 'string',required: false})
  @ApiQuery({name: 'brand', type: 'string',required: false})
  @ApiQuery({name: 'priceHigh', type: 'number',required: false})
  @ApiQuery({name: 'priceLow', type: 'number',required: false})
  @ApiQuery({name: 'size', type: 'number',required: false,enum:['S','M','L','XL','XXL']})
  @ApiQuery({name: 'category', type: 'string',required: true,enum:['Mens','Womens','Kids']})
  @ApiQuery({name: 'subcategory', type: 'string',required: true})
  async getOutfitFromQuery(@Query() queries: Object){
    return await this.outfitService.getOutfitsFromQuery(queries);
  }
  
}
