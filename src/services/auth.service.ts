import { Injectable } from '@nestjs/common';
import { LoginRequestBodyModel } from 'src/models/auth.login-request.model';
import { LoginResponseModel } from 'src/models/auth.login-response.model';
import { TokenService } from './auth.token.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly tokenService: TokenService,
    ){}
  getHello(): string {
    return 'Auth';
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
}
