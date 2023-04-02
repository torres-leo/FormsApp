import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css'],
})
export class SwitchesComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.switchForm.reset({ ...this.person, terms: false });
  }

  switchForm: FormGroup = this._formBuilder.group({
    gender: ['F', Validators.required],
    notifications: [true, Validators.required],
    terms: [false, Validators.requiredTrue],
  });

  person = {
    gender: 'M',
    notifications: true,
  };

  saveForm() {
    const formValue = { ...this.switchForm.value };
    delete formValue.terms;
    this.person = formValue;
  }
}
