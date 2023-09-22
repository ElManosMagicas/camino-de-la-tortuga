import { Action, createReducer } from '@ngrx/store';
import { Chapter2State } from './chapter-2.state';

export const initialChapter2: Chapter2State = {};

const _chapter2Reducer = createReducer(initialChapter2);

export function Chapter2Reducers(
  state: Chapter2State | undefined,
  action: Action
) {
  return _chapter2Reducer(state, action);
}
