import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginRequestBodyModel } from 'src/models/auth/auth.login-request.model';
import { LoginResponseModel } from 'src/models/auth/auth.login-response.model';
import { TokenService } from './auth.token.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly tokenService: TokenService,
    ){}
  getHello(): any {
    return this.tokenService.validateToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiMTYzNzQwMjU2ODQ3MCIsInVzZXJuYW1lIjoidmFnZXNod2FyIiwiaWF0IjoxNjM3NDAyNTY4fQ.Lws5-fL_vQLxN6k3VGy76zMb7wN1dx_Dg5nuItJYvwg");
  }

  async login(
      credentials: LoginRequestBodyModel
  ): Promise<LoginResponseModel>{
    //   Verify user

    const payload = {
        time: Date.now().toString(),
        username: credentials.username
    }

    const loginResponse = await this.tokenService.createAccessToken(payload);

    return loginResponse;
  }

  async register(requestBody: any){
    const {name,email,password} = requestBody;

    if(!name || !email ||!password){
      throw BadRequestException;
    }

    // create user

    const payload = {
      time: Date.now().toString(),
      username: name
  }

  const loginResponse = await this.tokenService.createAccessToken(payload);

  return loginResponse;


  }

  async googleLogin(req): Promise<any>{

    if(!req.user){
      throw UnauthorizedException;
    }

    // search for user if exists generate jwt token and send response 
    // else throw UnauthorizedException
    return({
      message:"User Information from Google",
      user: req.user
    })


  }
}
