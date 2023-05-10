import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  registerResult = {
    submited: false,
    message: '',
  };

  /**
   * Constructor
   * @param fb - FormBuilder
   * @param authenticationService - FirebaseAuthService
   */
  constructor(private fb: FormBuilder) {}

  loginControl = this.fb.nonNullable.control<string>('', [
    Validators.required,
    Validators.email,
  ]);

  passwordControl = this.fb.nonNullable.control('', [
    Validators.required,
    Validators.pattern(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    ),
    Validators.minLength(8),
  ]);

  registerForm = this.fb.group({
    login: this.loginControl,
    password: this.passwordControl,
  });

  onSubmit(): void {
    this.registerResult.submited = true;

    if (this.registerForm.valid) {
      console.log('Success');
      this.registerResult.message = 'Success form valid';
    } else {
      console.log('Error');
      this.registerResult.message = 'Error form invalid';
    }
  }
}
