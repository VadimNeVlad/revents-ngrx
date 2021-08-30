import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const authFeatureSelector = createFeatureSelector<AuthState>('auth');

export const authIsPendingSelector = createSelector(
  authFeatureSelector,
  (state) => state.pending
);

export const isAuthSelector = createSelector(
  authFeatureSelector,
  (state) => state.isAuth
);
