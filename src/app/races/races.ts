import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-races',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './races.html',
  styleUrl: './races.css',
})
export class Races {

    newRaceAvailable = output<void>();

  onButtonClickNewRace() {
    console.log("emit...")
    this.newRaceAvailable.emit()
  }
}
