import { Component, signal } from '@angular/core';
import { CarModel } from '../../interfaces/car';

@Component({
  selector: 'app-car',
  imports: [],
  templateUrl: './car.html',
  styleUrl: './car.css',
})
export class Car {
  protected readonly cars = signal<Array<CarModel>>([
    { id: 1, brandname: 'Mini', modelname: 'Cooper S', horsepower: 192, price: 30250 },
    { id: 2, brandname: 'Ford', modelname: 'Focus', horsepower: 160, price: 28500 },
    { id: 3, brandname: 'Citroën', modelname: 'C4', horsepower: 120, price: 24450}
  ])

}
