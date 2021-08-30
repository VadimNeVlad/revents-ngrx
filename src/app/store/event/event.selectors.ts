import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEvent from './event.reducer';

export const eventsFeatureSelector =
  createFeatureSelector<fromEvent.EventState>('events');

export const getEventsSelector = createSelector(
  eventsFeatureSelector,
  fromEvent.selectAll
);

export const isLoadingEventsSelector = createSelector(
  eventsFeatureSelector,
  (state) => state.loading
);
