import { Module } from '@nestjs/common';
import { CitysService } from './citys.service';
import { CitysController } from './citys.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './entities/city.entity';

@Module({
  imports: [TypeOrmModule.forFeature([City])],
  controllers: [CitysController],
  providers: [CitysService],
})
export class CitysModule {}
