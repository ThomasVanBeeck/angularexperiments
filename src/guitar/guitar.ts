import { Component, inject, input } from '@angular/core';
import { GuitarModel } from '../models/guitarmodel';
import { JsonPipe, KeyValuePipe } from '@angular/common';
import { LoggingService } from '../app/services/loggingservice';

@Component({
  selector: 'app-guitar',
  imports: [KeyValuePipe],
  templateUrl: './guitar.html',
  styleUrl: './guitar.css',
})
export class Guitar {
  // moderne manier om een service te Dependency injecten. Vroeger in constructor.
  private readonly loggingservice = inject(LoggingService)

  guitarCollection: Map<number, GuitarModel> = new Map<number, GuitarModel>([
    [1, { brandname: 'Fender', modelname: 'Stratocaster', strings: 6, hasActivePickups: false}],
    [2, { brandname: 'Jackson', modelname: 'RR3', strings: 6, hasActivePickups: true}],
    [8, { brandname: 'Ibanez', modelname: 'Jem', strings: 7, hasActivePickups: false}],
    [4, { brandname: 'Strandberg', modelname: 'Boden', strings: 8, hasActivePickups: true}]
  ])

  DeleteGuitarTwo(): void {
    const success: boolean = this.guitarCollection.delete(2)
    if(success)
      this.loggingservice.log("guitar 2 deleted.")
    else
      this.loggingservice.log("guitar 2 not found.")
  }
  
}