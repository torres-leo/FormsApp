import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
	providedIn: 'root',
})
export class ValidationsService {
	constructor() {}

	nameLastnamePattern: string = '([a-zA-z]+) ([a-zA-z]+)';
	emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
	passwordPattern: string = '[0-9a-zA-z]';

	cantBeStrider(control: FormControl): ValidationErrors | null {
		const value: string = control.value?.trim().toLocaleLowerCase();
		if (value === 'strider') {
			return { noStrider: true };
		}
		return null;
	}

	passwordMatch(pass1: string, pass2: string) {
		return (formGroup: AbstractControl): ValidationErrors | null => {
			const password1 = formGroup.get(pass1)?.value;
			const password2 = formGroup.get(pass2)?.value;

			if (password1 !== password2) {
				formGroup.get(pass2)?.setErrors({ noMatch: true });
				return {
					noMatch: true,
				};
			}

			formGroup.get(pass2)?.setErrors(null);
			return null;
		};
	}
}
