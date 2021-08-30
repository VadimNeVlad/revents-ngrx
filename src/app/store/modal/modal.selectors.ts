import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ModalState } from './modal.reducer';

export const modalFeatureSelector = createFeatureSelector<ModalState>('modal');

export const modalTypeSelector = createSelector(
  modalFeatureSelector,
  (state) => state.modalType
);
