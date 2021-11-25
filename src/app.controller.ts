import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
@ApiTags('health')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({status: HttpStatus.OK, description: 'Endpoint to check health of api'})
  healthCheck(): string {
    return this.appService.checkHealth();
  }
}
