import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { LoginRequestBodyModel } from 'src/models/auth.login-request.model';
import { LoginResponseModel } from 'src/models/auth.login-response.model';
import { AuthService } from 'src/services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.authService.getHello();
  }

  @Post('login')
  @ApiResponse({status: HttpStatus.OK, description: 'Login Successfull', type: LoginResponseModel})
  async login(@Body() credentials : LoginRequestBodyModel): Promise<LoginResponseModel>{
    const loginResponse = await this.authService.login(credentials);

    return loginResponse;
  }

}
