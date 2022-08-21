import { createSelector } from '@ngrx/store';
import { AppState } from './reducer';

const appState = (state: any) => state.app;
const user = createSelector(appState, (state) => state.user);
const status = createSelector(appState, (state) => state.status);
const isLoading = createSelector(status, (state) => state === 'LOADING');
const isIdle = createSelector(status, (state) => state === 'IDLE');
const isError = createSelector(status, (state) => state === 'ERROR');
const isSuccess = createSelector(status, (state) => state === 'SUCCESS');

export const fromApp = {
  user,
  status,
  isLoading,
  isIdle,
  isSuccess,
};
