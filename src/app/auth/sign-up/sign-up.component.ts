import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PasswordConfirm } from 'src/app/core/validators/password-confirm';
import { InputRadio } from 'src/app/shared/models/inputs-options';
import { SignUpData } from 'src/app/shared/models/user';
import { signup } from 'src/app/store/auth/auth.actions';
import { authIsPendingSelector } from 'src/app/store/auth/auth.selectors';

@Component({
  selector: 'rv-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  authForm!: FormGroup;
  options: InputRadio[] = [
    { id: 'male', name: 'gender', value: 'Male' },
    { id: 'female', name: 'gender', value: 'Female' },
  ];
  isPending$ = new Observable<boolean>();

  constructor(
    private fb: FormBuilder,
    private matchPasswords: PasswordConfirm,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.authForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        gender: [''],
        password: ['', [Validators.required, Validators.minLength(6)]],
        passwordConfirm: [''],
      },
      { validators: [this.matchPasswords.validate] }
    );

    this.isPending$ = this.store.pipe(select(authIsPendingSelector));
  }

  getInputControl(control: string): FormControl {
    return this.authForm.get(control) as FormControl;
  }

  onSubmit(): void {
    const userData: SignUpData = {
      name: this.authForm.value.name,
      email: this.authForm.value.email,
      gender: this.authForm.value.gender,
      password: this.authForm.value.password,
    };

    this.store.dispatch(signup({ user: userData }));
  }
}
