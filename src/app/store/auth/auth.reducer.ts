import { Action, createReducer, on } from '@ngrx/store';
import {
  signin,
  signinFailure,
  signinSuccess,
  signup,
  signupFailure,
  signupSuccess,
} from './auth.actions';

export interface AuthState {
  isAuth: boolean;
  pending: boolean;
}

export const initialState: AuthState = {
  isAuth: false,
  pending: false,
};

export const authReducer = createReducer(
  initialState,
  on(signup, signin, (state) => ({
    ...state,
    pending: true,
  })),
  on(signinSuccess, (state) => ({
    ...state,
    isAuth: true,
    pending: false,
  })),
  on(signupSuccess, signupFailure, signinFailure, (state) => ({
    ...state,
    pending: false,
    isAuth: false,
  }))
);
