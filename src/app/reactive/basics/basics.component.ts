import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css'],
})
export class BasicsComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.basicForm.reset({
      name: '',
      price: 0,
      stock: 0,
    });
  }

  // basicForm: FormGroup = new FormGroup({
  //   name: new FormControl('RTX'),
  //   price: new FormControl(0),
  //   stock: new FormControl(1),
  // });

  basicForm: FormGroup = this._formBuilder.group({
    name: [, [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.required, Validators.min(1)]],
    stock: [, [Validators.required, Validators.min(0)]],
  });

  save() {
    if (this.basicForm.invalid) {
      this.basicForm.markAllAsTouched();
      return;
    }

    console.log(this.basicForm.value);
    this.basicForm.reset();
  }

  errorMessages(field: string) {
    return (
      this.basicForm.controls[field].errors &&
      this.basicForm.controls[field].touched
    );
  }
}
