import { Action, createReducer } from '@ngrx/store';
import { AppState } from './app.state';

export const initialApp: AppState = {};

const _appReducer = createReducer(initialApp);

export function AppReducers(state: AppState | undefined, action: Action) {
  return _appReducer(state, action);
}
