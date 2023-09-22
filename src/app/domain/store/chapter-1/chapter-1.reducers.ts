import { Action, createReducer } from '@ngrx/store';
import { Chapter1State } from './chapter-1.state';

export const initialChapter1: Chapter1State = {};

const _chapter1Reducer = createReducer(initialChapter1);

export function Chapter1Reducers(
  state: Chapter1State | undefined,
  action: Action
) {
  return _chapter1Reducer(state, action);
}
