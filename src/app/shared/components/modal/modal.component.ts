import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { closeModal } from 'src/app/store/modal/modal.actions';
import { modalTypeSelector } from 'src/app/store/modal/modal.selectors';

@Component({
  selector: 'rv-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() modalType = '';
  @Input() title = '';

  modalType$ = new Observable<string>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.modalType$ = this.store.pipe(select(modalTypeSelector));
  }

  closeModal(): void {
    this.store.dispatch(closeModal());
  }
}
