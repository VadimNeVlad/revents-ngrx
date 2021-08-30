import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SignInData } from 'src/app/shared/models/user';
import { signin } from 'src/app/store/auth/auth.actions';
import { authIsPendingSelector } from 'src/app/store/auth/auth.selectors';

@Component({
  selector: 'rv-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  authForm!: FormGroup;
  isPending$ = new Observable<boolean>();

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.isPending$ = this.store.pipe(select(authIsPendingSelector));
  }

  getInputControl(control: string): FormControl {
    return this.authForm.get(control) as FormControl;
  }

  onSubmit(): void {
    const userData: SignInData = {
      email: this.authForm.value.email,
      password: this.authForm.value.password,
    };

    this.store.dispatch(signin({ user: userData }));
  }
}
