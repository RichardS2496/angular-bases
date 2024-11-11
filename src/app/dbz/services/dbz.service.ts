import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

console.log(uuid());

@Injectable({ providedIn: 'root' })
export class DbzService {
  public title: string = 'Dragon Ball Z';

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 8000,
    },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character }; //toma todas las propiedades de character y agrega el uuid
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number) {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }

  //----------------------------------------------------------------

  public parentMessage: string =
    'This is my first practice passing information to the child component without guide';

  public childMessage!: string;

  public receiveMessage(message: string) {
    this.childMessage = message;
  }
}
