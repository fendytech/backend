import { Module } from '@nestjs/common';
import { AuthController } from 'src/controllers/auth.controller';
import { AuthService } from 'src/services/auth.service';
import { TokenService } from 'src/services/auth.token.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService,TokenService],
})
export class AuthModule {}
