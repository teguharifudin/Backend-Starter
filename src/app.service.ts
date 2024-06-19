import { Injectable, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth/auth.guard';

@Injectable()
export class AppService {
  @Get()
  @UseGuards(AuthGuard)
  getHello(): string {
    return 'Hello World!';
  }
}
