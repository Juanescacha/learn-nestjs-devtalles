import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './interfaces/dto/create-car.dto';

@Controller('cars')
@UsePipes(ValidationPipe)
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', new ParseUUIDPipe({ version: '7' })) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    const { brand, model } = createCarDto;
    return this.carsService.create(brand, model);
  }

  @Patch(':id')
  updateCar(
    @Param('id', new ParseUUIDPipe({ version: '7' })) id: string,
    @Body() createCarDto: CreateCarDto,
  ) {
    const { brand, model } = createCarDto;
    return this.carsService.update(id, brand, model);
  }

  @Delete(':id')
  deleteCar(@Param('id', new ParseUUIDPipe({ version: '7' })) id: string) {
    return this.carsService.delete(id);
  }
}
