import { createReducer, on } from '@ngrx/store';
import { closeModal, openModal } from './modal.actions';

export interface ModalState {
  modalType: string;
}

export const initialState: ModalState = {
  modalType: '',
};

export const modalReducer = createReducer(
  initialState,
  on(openModal, (state, { modalType }) => ({
    ...state,
    modalType,
  })),
  on(closeModal, (state) => ({
    ...state,
    modalType: '',
  }))
);
