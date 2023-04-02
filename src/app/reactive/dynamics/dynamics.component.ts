import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.css'],
})
export class DynamicsComponent {
  constructor(private _formBuilder: FormBuilder) {}

  dynamicForm: FormGroup = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteList: this._formBuilder.array(
      [['Mario Striker'], ['Mario Smash']],
      [Validators.required, Validators.minLength(1)]
    ),
  });

  newFavorite: FormControl = this._formBuilder.control('', Validators.required);

  get favoriteListArray() {
    return this.dynamicForm.get('favoriteList') as FormArray;
  }

  addFavorite() {
    if (this.newFavorite.invalid) return;

    // this.favoriteListArray.push(
    //   new FormControl(this.newFavorite.value, Validators.required)
    // );

    this.favoriteListArray.push(
      this._formBuilder.control(this.newFavorite.value, Validators.required)
    );

    this.newFavorite.reset();
  }

  deleteFavorite(index: number) {
    this.favoriteListArray.removeAt(index);
  }

  saveForm() {
    if (this.dynamicForm.invalid) {
      this.dynamicForm.markAllAsTouched();
      return;
    }

    console.log(this.dynamicForm.value);
  }

  errorMessages(field: string) {
    return (
      this.dynamicForm.controls[field].errors &&
      this.dynamicForm.controls[field].touched
    );
  }
}
