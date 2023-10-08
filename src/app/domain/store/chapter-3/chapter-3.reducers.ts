import { Action, createReducer, on } from '@ngrx/store';
import { Chapter3State } from './chapter-3.state';

import * as chapter3Actions from '@store/chapter-3/chapter-3.actions';

export const initialChapter3: Chapter3State = {
  step: 1,
  puzzle: 0,
};

const _chapter3Reducer = createReducer(
  initialChapter3,
  on(chapter3Actions.nextStep, (state) => {
    return {
      ...state,
      step: state.step + 1,
    };
  }),
  on(chapter3Actions.stepBack, (state) => {
    return {
      ...state,
      step: state.step - 1,
    };
  }),
  on(chapter3Actions.increasePuzzleScore, (state) => {
    return {
      ...state,
      puzzle: state.puzzle + 1,
    };
  }),
  on(chapter3Actions.resetPuzzleScore, (state) => {
    return {
      ...state,
      puzzle: 1,
    };
  })
);

export function Chapter3Reducers(
  state: Chapter3State | undefined,
  action: Action
) {
  return _chapter3Reducer(state, action);
}
