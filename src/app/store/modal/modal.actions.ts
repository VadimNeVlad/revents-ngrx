import { createAction, props } from '@ngrx/store';

export const openModal = createAction(
  '[Modal] Open Modal',
  props<{ modalType: string }>()
);

export const closeModal = createAction('[Modal] Close Modal');
