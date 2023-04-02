import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validations/email-validator.service';

// import {
//   cantBeStrider,
//   emailPattern,
//   nameLastnamePattern,
// } from 'src/app/shared/validations/validations';

import { ValidationsService } from 'src/app/shared/validations/validations.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
	constructor(
		private _formBuilder: FormBuilder,
		private validatorService: ValidationsService,
		private emailValidator: EmailValidatorService
	) {}

	ngOnInit(): void {
		this.validationForm.reset({
			name: 'Leo Torres',
			email: 'leo@email.com',
			username: 'torres_leo24',
		});
	}

	// emailErrorMsg: string = '';

	validationForm: FormGroup = this._formBuilder.group(
		{
			name: ['', [Validators.required, Validators.pattern(this.validatorService.nameLastnamePattern)]],
			email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
			username: ['', [Validators.required, this.validatorService.cantBeStrider]],
			password: ['', [Validators.required, Validators.minLength(6)]],
			confirmPassword: ['', [Validators.required]],
		},
		{
			validators: [this.validatorService.passwordMatch('password', 'confirmPassword')],
		}
	);

	save() {
		this.validationForm.markAllAsTouched();
		console.log(this.validationForm.value);
	}

	invalidField(field: string) {
		return this.validationForm.get(field)?.invalid && this.validationForm.get(field)?.touched;
	}

	get emailErrorMsg(): string {
		const errors = this.validationForm.get('email')?.errors;

		if (errors?.['required']) {
			return 'Email is required';
		} else if (errors?.['pattern']) {
			return 'Email is invalid';
		} else if (errors?.['emailExist']) {
			return 'This email is already taken';
		}

		return '';
	}

	emailRequired() {
		return this.validationForm.get('email')?.errors?.['required'] && this.validationForm.get('email')?.touched;
	}

	emailPattern() {
		return this.validationForm.get('email')?.errors?.['pattern'] && this.validationForm.get('email')?.touched;
	}

	emailExist() {
		return this.validationForm.get('email')?.errors?.['emailExist'] && this.validationForm.get('email')?.touched;
	}
}
