import { Action, createReducer } from '@ngrx/store';
import { Chapter4State } from './chapter-4.state';

export const initialChapter4: Chapter4State = {};

const _chapter4Reducer = createReducer(initialChapter4);

export function Chapter4Reducers(
  state: Chapter4State | undefined,
  action: Action
) {
  return _chapter4Reducer(state, action);
}
