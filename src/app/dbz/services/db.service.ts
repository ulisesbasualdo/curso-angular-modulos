import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Vegita',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'shoshirama',
      power: 90000,
    },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      ...character,
      id: uuid(),
    };
    this.characters.push(newCharacter);
  }

  deleteCharacter(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
