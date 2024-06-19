import { ClassSerializerInterceptor, Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
