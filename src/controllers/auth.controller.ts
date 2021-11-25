import { Body, Controller, Get, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginRequestBodyModel } from 'src/models/auth/auth.login-request.model';
import { LoginResponseModel } from 'src/models/auth/auth.login-response.model';
import { AuthService } from 'src/services/auth.service';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.authService.getHello();
  }

  @Post('login')
  @ApiResponse({status: HttpStatus.OK, description: 'Login Successfull', type: LoginResponseModel})
  @ApiResponse({status: HttpStatus.UNAUTHORIZED, description: 'Invalid Credentials provided'})
  async login(@Body() credentials : LoginRequestBodyModel): Promise<LoginResponseModel>{
    const loginResponse = await this.authService.login(credentials);

    return loginResponse;

  }

  @Post('register')
  @ApiResponse({status: HttpStatus.OK, description: 'Register Successfull', type: LoginResponseModel})
  async register(@Body() registerData : any): Promise<LoginResponseModel>{

    return this.authService.register(registerData);
  }
  @Get('login/google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req){}


  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
    googleLogin(@Req() req){
      return this.authService.googleLogin(req);
    }

}
