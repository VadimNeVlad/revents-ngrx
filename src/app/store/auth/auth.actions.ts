import { createAction, props } from '@ngrx/store';
import { SignInData, SignUpData } from 'src/app/shared/models/user';

export const signup = createAction(
  '[Auth] Signup',
  props<{ user: SignUpData }>()
);
export const signupSuccess = createAction('[Auth] Signup Success');
export const signupFailure = createAction('[Auth] Signup Failure');

export const signin = createAction(
  '[Auth] Signin',
  props<{ user: SignInData }>()
);
export const signinSuccess = createAction('[Auth] Signin Success');
export const signinFailure = createAction('[Auth] Signin Failure');

export const logout = createAction('[Auth] Logout');
