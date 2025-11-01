import { Component, effect, input, signal } from '@angular/core';
import { CarModel } from '../../models/carmodel';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-car',
  imports: [NgClass],
  templateUrl: './car.html',
  styleUrl: './car.css',
})
export class Car {
  constructor() {
    // Dit is vergelijkbaar met het oudere ngOnChanges, we gaan bij verandering van de input
    // waarde carsmessage iets doen, namelijk de isPrimaryColor boolean togglen
    // Let op om de waarde  van het signal carsmessage zelf niet aan te passen, want dit kan zorgen
    // voor een infinite loop van het effect! want die ziet weer een 'verandering'
    effect(() => {
      // 'Reactive read', registreert dependency, maar verder niks doen met de waarde
      // met andere woorden registreert dat het effect moet reageren bij verandering van dit signal
      this.carsmessage()
      // vervolgens bepalen wat er moet gebeuren
      console.log("cars message changed")
      this.isPrimaryColor = !this.isPrimaryColor
    })
  }

  isPrimaryColor = true

  protected readonly cars = signal<Array<CarModel>>([
    { id: 1, brandname: 'Mini', modelname: 'Cooper S', horsepower: 192, price: 30250 },
    { id: 2, brandname: 'Ford', modelname: 'Focus', horsepower: 160, price: 28500 },
    { id: 3, brandname: 'Citroën', modelname: 'C4', horsepower: 120, price: 24450}
  ])

  carsmessage = input<string>()

}
