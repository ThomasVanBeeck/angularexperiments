import { Component, input } from '@angular/core';
import { GuitarModel } from '../models/guitarmodel';
import { JsonPipe, KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-guitar',
  imports: [KeyValuePipe, JsonPipe],
  templateUrl: './guitar.html',
  styleUrl: './guitar.css',
})
export class Guitar {

  guitarCollection: Map<number, GuitarModel> = new Map<number, GuitarModel>([
    [1, { brandname: 'Fender', modelname: 'Stratocaster', strings: 6, hasActivePickups: false}],
    [2, { brandname: 'Jackson', modelname: 'RR3', strings: 6, hasActivePickups: true}],
    [8, { brandname: 'Ibanez', modelname: 'Jem', strings: 7, hasActivePickups: false}],
    [4, { brandname: 'Strandberg', modelname: 'Boden', strings: 8, hasActivePickups: true}]
  ])
}