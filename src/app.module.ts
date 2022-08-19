import { Module } from '@nestjs/common';
// controllers
import { AppController } from './controllers/app.controller';
import { CatController } from './controllers/cat.controller';
// services
import { AppService } from './services/app.service';
import { CatService } from './services/cat.service';
@Module({
  imports: [],
  controllers: [AppController, CatController],
  providers: [AppService, CatService],
})
export class AppModule {}
