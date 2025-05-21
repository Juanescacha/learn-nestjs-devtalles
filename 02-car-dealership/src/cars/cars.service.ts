import { Injectable, NotFoundException } from '@nestjs/common';
import { v7 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './interfaces/dto/create-car.dto';
import { UpdateCarDto } from './interfaces/dto/update-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`Car with ID '${id}' not found`);
    }
    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(newCar);
    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    const carIndex = this.cars.findIndex((car) => car.id === id);

    if (carIndex === -1) {
      throw new NotFoundException(`Car with ID '${id}' not found`);
    }

    const updatedCar: Car = {
      ...this.cars[carIndex],
      ...updateCarDto,
    };

    this.cars[carIndex] = updatedCar;
    return updatedCar;
  }

  delete(id: string) {
    const carIndex = this.cars.findIndex((car) => car.id === id);

    if (carIndex === -1) {
      throw new NotFoundException(`Car with ID '${id}' not found`);
    }

    this.cars.splice(carIndex, 1);
    return { id };
  }
}
