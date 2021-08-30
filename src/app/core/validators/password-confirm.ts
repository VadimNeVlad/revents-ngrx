import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PasswordConfirm implements Validator {
  validate(formGroup: AbstractControl): ValidationErrors | null {
    const { password, passwordConfirm } = formGroup.value;

    if (password === passwordConfirm) {
      return null;
    } else {
      return {
        passwordsDoesntMatch: true,
      };
    }
  }
}
