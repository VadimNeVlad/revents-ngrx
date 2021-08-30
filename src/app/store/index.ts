import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { authReducer, AuthState } from './auth/auth.reducer';
import { eventsReducer, EventState } from './event/event.reducer';
import { modalReducer, ModalState } from './modal/modal.reducer';

export interface State {
  events: EventState;
  modal: ModalState;
  auth: AuthState;
}

export const reducers: ActionReducerMap<State> = {
  events: eventsReducer,
  modal: modalReducer,
  auth: authReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
