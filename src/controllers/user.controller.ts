import { Body, Controller, Get, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginRequestBodyModel } from 'src/models/auth/auth.login-request.model';
import { LoginResponseModel } from 'src/models/auth/auth.login-response.model';
import { AuthService } from 'src/services/auth.service';
import { UserService } from 'src/services/user.service';
import { threadId } from 'worker_threads';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('cart')
  async getUserCart(@Body() requestBody: object){
    //   Verify Token
    return await this.userService.getUserCart(14);
  }

  @Post('add')
  async addNewUser(@Body() requesyBody: object ){
    return this.userService.addNewUser(requesyBody);
  }

  @Post('address/get')
  async getAddress(@Body() requestBody: Object){
    return this.userService.getAddress(requestBody);
  }

  @Post('address')
  async addAddress(@Body() requestBody: Object){
    return this.userService.addAddress(requestBody);
  }
}

