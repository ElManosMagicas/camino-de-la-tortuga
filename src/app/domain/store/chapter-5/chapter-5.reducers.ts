import { Action, createReducer, on } from '@ngrx/store';
import { Chapter5State } from './chapter-5.state';

import * as chapter5Actions from '@store/chapter-5/chapter-5.actions';

export const initialChapter5: Chapter5State = {
  step: 1,
  turtleHome: 0,
};

const _chapter5Reducer = createReducer(
  initialChapter5,
  on(chapter5Actions.nextStep, (state) => {
    return {
      ...state,
      step: state.step + 1,
    };
  }),
  on(chapter5Actions.stepBack, (state) => {
    return {
      ...state,
      step: state.step - 1,
    };
  }),
  on(chapter5Actions.increaseTurtleHomeScore, (state) => {
    return {
      ...state,
      turtleHome: state.turtleHome + 1,
    };
  }),
  on(chapter5Actions.resetTurtleHomeScore, (state) => {
    return {
      ...state,
      turtleHome: 1,
    };
  })
);

export function Chapter5Reducers(
  state: Chapter5State | undefined,
  action: Action
) {
  return _chapter5Reducer(state, action);
}
