import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EffectsModule } from '@ngrx/effects';
import { EventEffects } from '../store/event/event.effects';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EventsComponent, EventsListComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    EffectsModule.forFeature([EventEffects]),
    SharedModule,
  ],
})
export class EventsModule {}
