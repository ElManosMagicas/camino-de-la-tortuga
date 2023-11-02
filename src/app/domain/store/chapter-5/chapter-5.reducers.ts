import { Action, createReducer, on } from '@ngrx/store';
import { Chapter5State } from './chapter-5.state';

import * as chapter5Actions from '@store/chapter-5/chapter-5.actions';

export const initialChapter5: Chapter5State = {
  step: 0,
  turtleHome: 0,
  c5s1Subtitles: '',
  c5s2Subtitles: '',
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
  on(chapter5Actions.resetStep, (state) => {
    return {
      ...state,
      step: 0,
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
  }),
  on(chapter5Actions.setC5S1Subtitles, (state, { c5s1Subtitles }) => {
    return {
      ...state,
      c5s1Subtitles,
    };
  }),
  on(chapter5Actions.setC5S2Subtitles, (state, { c5s2Subtitles }) => {
    return {
      ...state,
      c5s2Subtitles,
    };
  })
);

export function Chapter5Reducers(
  state: Chapter5State | undefined,
  action: Action
) {
  return _chapter5Reducer(state, action);
}
