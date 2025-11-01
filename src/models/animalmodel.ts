export interface AnimalModel {
    legs: number;
    name: string;
    color: string;
    dangerous: boolean;
}

export function createRandomAnimals() : Array<AnimalModel> {
    const animals : Array<AnimalModel> = [
    { legs: 4, name: "Lion", color: "Golden", dangerous: true },
    { legs: 2, name: "Parrot", color: "Green", dangerous: false },
    { legs: 4, name: "Elephant", color: "Gray", dangerous: false },
    { legs: 8, name: "Spider", color: "Black", dangerous: true },
    { legs: 4, name: "Dog", color: "Brown", dangerous: false }
    ]
    return animals
}