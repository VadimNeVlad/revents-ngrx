import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, switchMap } from 'rxjs/operators';
import { EventService } from 'src/app/shared/services/event.service';
import { getEvents, getEventsSuccess } from './event.actions';

@Injectable()
export class EventEffects {
  getEvents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getEvents),
      switchMap(() => {
        return this.eventService
          .getEvents()
          .pipe(map((events) => getEventsSuccess({ events })));
      })
    );
  });

  constructor(private actions$: Actions, private eventService: EventService) {}
}
