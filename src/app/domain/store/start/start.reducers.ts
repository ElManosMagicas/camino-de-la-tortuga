import { Action, createReducer } from '@ngrx/store';
import { StartState } from './start.state';

export const initialStart: StartState = {};

const _startReducer = createReducer(initialStart);

export function StartReducers(state: StartState | undefined, action: Action) {
  return _startReducer(state, action);
}
