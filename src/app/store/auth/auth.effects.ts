import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { closeModal } from '../modal/modal.actions';
import {
  signin,
  signinFailure,
  signinSuccess,
  signup,
  signupFailure,
  signupSuccess,
} from './auth.actions';

@Injectable()
export class AuthEffects {
  signup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signup),
      switchMap(({ user }) => {
        return this.authService.signup(user).pipe(
          map(() => {
            this.toastr.success('Registration completed successfully');
            this.store.dispatch(closeModal());
            return signupSuccess();
          }),
          catchError((err: HttpErrorResponse) => {
            this.toastr.error(err.error);
            return of(signupFailure());
          })
        );
      })
    );
  });

  signin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signin),
      switchMap(({ user }) => {
        return this.authService.signin(user).pipe(
          map(({ accessToken }) => {
            localStorage.setItem('rv-bearer', accessToken);
            this.store.dispatch(closeModal());
            return signinSuccess();
          }),
          catchError(() => {
            this.toastr.error('Incorrect email or password');
            return of(signinFailure());
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private toastr: ToastrService,
    private authService: AuthService,
    private store: Store
  ) {}
}
