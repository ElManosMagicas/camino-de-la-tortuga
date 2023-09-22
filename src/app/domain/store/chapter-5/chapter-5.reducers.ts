import { Action, createReducer } from '@ngrx/store';
import { Chapter5State } from './chapter-5.state';

export const initialChapter5: Chapter5State = {};

const _chapter5Reducer = createReducer(initialChapter5);

export function Chapter5Reducers(
  state: Chapter5State | undefined,
  action: Action
) {
  return _chapter5Reducer(state, action);
}
