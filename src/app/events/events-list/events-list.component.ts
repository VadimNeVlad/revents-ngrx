import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Event } from 'src/app/shared/models/event';
import { getEvents } from 'src/app/store/event/event.actions';
import {
  getEventsSelector,
  isLoadingEventsSelector,
} from 'src/app/store/event/event.selectors';

@Component({
  selector: 'rv-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {
  events$ = new Observable<Event[]>();
  isLoading$ = new Observable<boolean>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.events$ = this.store.pipe(select(getEventsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingEventsSelector));

    this.getEvents();
  }

  getEvents(): void {
    this.store.dispatch(getEvents());
  }
}
