import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { openModal } from 'src/app/store/modal/modal.actions';

@Component({
  selector: 'rv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private store: Store) {}

  openModal(modalType: string): void {
    this.store.dispatch(openModal({ modalType }));
  }
}
