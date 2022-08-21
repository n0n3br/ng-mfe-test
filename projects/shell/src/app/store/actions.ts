import { createAction, props, State } from '@ngrx/store';
import { AppState } from './reducer';

export const authenticate = createAction('[AppStore] Authenticate');
export const authenticated = createAction(
  '[AppStore] Authenticated',
  props<{ user: AppState['user'] }>()
);
export const setError = createAction('[AppStore] SetError');
