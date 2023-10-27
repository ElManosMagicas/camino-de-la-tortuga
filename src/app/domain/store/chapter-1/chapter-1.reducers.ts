import { Action, createReducer, on } from '@ngrx/store';
import { Chapter1State } from './chapter-1.state';

import * as chapter1Actions from '@store/chapter-1/chapter-1.actions';

export const initialChapter1: Chapter1State = {
  step: 0,
};

const _chapter1Reducer = createReducer(
  initialChapter1,
  on(chapter1Actions.nextStep, (state) => {
    return {
      ...state,
      step: state.step + 1,
    };
  }),
  on(chapter1Actions.stepBack, (state) => {
    return {
      ...state,
      step: state.step - 1,
    };
  }),
  on(chapter1Actions.resetStep, (state) => {
    return {
      ...state,
      step: 0,
    };
  })
);

export function Chapter1Reducers(
  state: Chapter1State | undefined,
  action: Action
) {
  return _chapter1Reducer(state, action);
}
