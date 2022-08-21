import { createReducer, on } from '@ngrx/store';
import { setError, authenticate, authenticated } from './actions';

export interface AppState {
  user?: {
    id: number;
    name: string;
    username: string;
    email: string;
  };
  status: 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR';
}
export const initialState: AppState = {
  status: 'IDLE',
};
export const appReducer = createReducer(
  initialState,
  on(authenticate, (state) => ({ ...state, status: 'LOADING' })),
  on(authenticated, (state, { user }) => ({
    ...state,
    user,
    status: 'SUCCESS',
  })),
  on(setError, (state) => ({
    ...state,
    user: undefined,
    status: 'ERROR',
  }))
);
