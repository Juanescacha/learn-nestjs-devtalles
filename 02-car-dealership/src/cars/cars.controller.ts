import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
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
  createCar(@Body() body: { brand: string; model: string }) {
    const { brand, model } = body;
    return this.carsService.create(brand, model);
  }

  @Patch(':id')
  updateCar(
    @Param('id', new ParseUUIDPipe({ version: '7' })) id: string,
    @Body() body: { brand: string; model: string },
  ) {
    const { brand, model } = body;
    return this.carsService.update(id, brand, model);
  }

  @Delete(':id')
  deleteCar(@Param('id', new ParseUUIDPipe({ version: '7' })) id: string) {
    return this.carsService.delete(id);
  }
}
