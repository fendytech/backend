import { Body, Controller, Get, HttpStatus, Post, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginRequestBodyModel } from 'src/models/auth/auth.login-request.model';
import { LoginResponseModel } from 'src/models/auth/auth.login-response.model';
import { S3Service } from 'src/services/amazon.s3.service';
import { AuthService } from 'src/services/auth.service';

@Controller('product')
@ApiTags('product-internal')
export class ProductController {
  constructor(private readonly s3Service: S3Service) {}

  @Post('s3/upload/product')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
      schema:{
          type: 'object',
          properties:{
              file:{
                  type:'string',
                  format: 'binary'
              }
          }
      } 
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadS3(@UploadedFile('file') file){
      console.log(file);
      return await this.s3Service.uploadFile(file)
  }


}
