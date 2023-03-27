import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[customMin][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: CustomMinDirective, multi: true },
  ],
})
export class CustomMinDirective implements Validator {
  @Input() minValue!: number;

  constructor() {}

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const inputValue = control.value;

    return inputValue < this.minValue ? { customMin: true } : null;
  }
}
