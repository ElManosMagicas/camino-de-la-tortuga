import { Action, createReducer } from '@ngrx/store';
import { Chapter3State } from './chapter-3.state';

export const initialChapter3: Chapter3State = {};

const _chapter3Reducer = createReducer(initialChapter3);

export function Chapter3Reducers(
  state: Chapter3State | undefined,
  action: Action
) {
  return _chapter3Reducer(state, action);
}
