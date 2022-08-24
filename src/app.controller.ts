import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CatService } from './cats/cat.service';
import { Cat } from './cats/interfaces/cat.interface';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catService: CatService,
  ) {}

  @Get()
  getHello(): Cat[] {
    return this.catService.findAll({ page: 1, limit: 20 });
  }
}
