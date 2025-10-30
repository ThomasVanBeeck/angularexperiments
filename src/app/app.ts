import { Component, computed, signal, effect } from '@angular/core';
import { AnimalModel, createRandomAnimals } from '../interfaces/animals';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [DecimalPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ponyracer!!!!!');
  firstnumber = signal(69)
  secondnumber = signal(1)
  sumnumbers = computed(() => (this.firstnumber() ?? 0) + (this.secondnumber() ?? 0))
  subtractnumbers = computed(() => (this.firstnumber() ?? 0) - (this.secondnumber() ?? 0))
  multiplynumbers = computed(() => (this.firstnumber() ?? 0) * (this.secondnumber() ?? 0))
  dividenumbers = computed(() => {
    const number1 = this.firstnumber() ?? 0
    const number2 = this.secondnumber() ?? 0
    return number2 === 0 ? 'ongeldig' : number1/number2
  }
  )

  animals: Array<AnimalModel> = createRandomAnimals()

  animal = signal<AnimalModel>({
    legs: 4,
    name: "Flatcoat",
    color: "Black",
    dangerous: true
  })

  changeToBrownNotDangerous(): void {
    this.animal.update(current_animal => ({
      ...current_animal,
      color: "Brown",
      dangerous: false
    }))
  }

  replaceAnimal(): void {
    console.log("replace animal triggered.")
    const randomIndex : number = Math.floor(Math.random() * this.animals.length)
    const randomAnimal : AnimalModel = this.animals[randomIndex]
    this.animal.set(randomAnimal)
  }

  // update verwacht een callback functie, terwijl set een nieuwe waarde verwacht
  incrementNumbers(): void {
    console.log("incrementing numbers...")
    this.firstnumber.set(this.firstnumber()+1)
    this.secondnumber.update(nr => nr+1)
  }

  //testen van effect, a.k.a. of de signalwaardes gewijzigd zijn (triggers)
  constructor() {
    effect(() => console.log("first number gewijzigd", this.firstnumber()))
    effect(() => console.log("second number gewijzigd", this.secondnumber()))
    effect(() => console.log("animal gewijzigd", this.animal()))
  }
}
