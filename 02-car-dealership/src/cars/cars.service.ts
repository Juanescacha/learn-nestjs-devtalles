import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';

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

  create(brand: string, model: string) {
    const newCar = {
      id: uuid(),
      brand,
      model,
    };
    this.cars.push(newCar);
    return newCar;
  }

  update(id: string, brand: string, model: string) {
    const carIndex = this.cars.findIndex((car) => car.id === id);

    if (carIndex === -1) {
      throw new NotFoundException(`Car with ID '${id}' not found`);
    }

    const updatedCar = {
      ...this.cars[carIndex],
      brand,
      model,
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
