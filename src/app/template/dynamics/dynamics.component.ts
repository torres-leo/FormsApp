import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: string;
  favGames: Games[];
}

interface Games {
  id?: number;
  name: string;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.css'],
})
export class DynamicsComponent {
  @ViewChild('dynamicForm') dynamicForm!: NgForm;
  newGame: string = '';

  person: Person = {
    name: 'Leo',
    favGames: [
      { id: 1, name: 'Mario Smash' },
      { id: 2, name: 'Mario Striker' },
    ],
  };

  save() {}

  validName(): boolean {
    return (
      this.dynamicForm?.controls['name']?.invalid &&
      this.dynamicForm?.controls['name']?.touched
    );
  }

  addGame() {
    const newFavGame: Games = {
      id: this.person.favGames.length + 1,
      name: this.newGame,
    };

    this.person.favGames.push({ ...newFavGame });
    this.newGame = '';
  }

  deleteGame(index: number) {
    this.person.favGames.splice(index, 1);
  }
}
