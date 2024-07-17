import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  initial() {
    return 'Hello, thats is my API';
  }
}
