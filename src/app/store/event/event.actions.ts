import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Event } from 'src/app/shared/models/event';

export const getEvents = createAction('[Event] Get Events');

export const getEventsSuccess = createAction(
  '[Event] Get Events Success',
  props<{ events: Event[] }>()
);

// export const addEvent = createAction(
//   '[Event] Add Event',
//   props<{ event: Event }>()
// );

// export const upsertEvent = createAction(
//   '[Event] Upsert Event',
//   props<{ event: Event }>()
// );

// export const addEvents = createAction(
//   '[Event] Add Events',
//   props<{ events: Event[] }>()
// );

// export const upsertEvents = createAction(
//   '[Event] Upsert Events',
//   props<{ events: Event[] }>()
// );

// export const updateEvent = createAction(
//   '[Event] Update Event',
//   props<{ event: Update<Event> }>()
// );

// export const updateEvents = createAction(
//   '[Event] Update Events',
//   props<{ events: Update<Event>[] }>()
// );

// export const deleteEvent = createAction(
//   '[Event] Delete Event',
//   props<{ id: string }>()
// );

// export const deleteEvents = createAction(
//   '[Event] Delete Events',
//   props<{ ids: string[] }>()
// );

// export const clearEvents = createAction('[Event] Clear Events');
