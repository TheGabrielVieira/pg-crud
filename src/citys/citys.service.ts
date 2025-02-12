import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CitysService {
  constructor(
    @InjectRepository(City)
    private readonly citysRepository: Repository<City>){
    
  }

  async create(createCityDto: CreateCityDto) {
    const city = this.citysRepository.create(createCityDto);

    return await this.citysRepository.save(city);
  }

  async findAll() {
    return await this.citysRepository.find();
  }

  async findOne(id: number) {
    return await this.citysRepository.findOne({
      where: { id }
    });
  }

  async update(id: number, updateCityDto: UpdateCityDto) {

    const city = await this.findOne(id)

    if(!city) {
      throw new NotFoundException();
    }

    Object.assign(city, updateCityDto);

    return await this.citysRepository.save(city);
  }

  async remove(id: number) {

    const city = await this.findOne(id)

    if(!city) {
      throw new NotFoundException();
    }
    
    return this.citysRepository.remove(city);
  }
}
