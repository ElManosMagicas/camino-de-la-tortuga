import { Action, createReducer, on } from '@ngrx/store';
import { Chapter2State } from './chapter-2.state';

import * as chapter2Actions from '@store/chapter-2/chapter-2.actions';

export const initialChapter2: Chapter2State = {
  step: 0,
  backpack: 1,
  c2s3Subtitles: '',
};

const _chapter2Reducer = createReducer(
  initialChapter2,
  on(chapter2Actions.nextStep, (state) => {
    return {
      ...state,
      step: state.step + 1,
    };
  }),
  on(chapter2Actions.stepBack, (state) => {
    return {
      ...state,
      step: state.step - 1,
    };
  }),
  on(chapter2Actions.resetStep, (state) => {
    return {
      ...state,
      step: 0,
    };
  }),
  on(chapter2Actions.increaseBackpackScore, (state) => {
    return {
      ...state,
      backpack: state.backpack + 1,
    };
  }),
  on(chapter2Actions.resetBackpackScore, (state) => {
    return {
      ...state,
      backpack: 1,
    };
  }),
  on(chapter2Actions.setC2S3Subtitles, (state, { c2s3Subtitles }) => {
    return {
      ...state,
      c2s3Subtitles,
    };
  })
);

export function Chapter2Reducers(
  state: Chapter2State | undefined,
  action: Action
) {
  return _chapter2Reducer(state, action);
}
