import { Action, createReducer, on } from '@ngrx/store';
import { Chapter4State } from './chapter-4.state';

import * as chapter4Actions from '@store/chapter-4/chapter-4.actions';

export const initialChapter4: Chapter4State = {
  step: 0,
  perfectDay: 0,
};

const _chapter4Reducer = createReducer(
  initialChapter4,
  on(chapter4Actions.nextStep, (state) => {
    return {
      ...state,
      step: state.step + 1,
    };
  }),
  on(chapter4Actions.stepBack, (state) => {
    return {
      ...state,
      step: state.step - 1,
    };
  }),
  on(chapter4Actions.increasePerfectDayScore, (state) => {
    return {
      ...state,
      perfectDay: state.perfectDay + 1,
    };
  }),
  on(chapter4Actions.resetPerfectDayScore, (state) => {
    return {
      ...state,
      perfectDay: 0,
    };
  })
);

export function Chapter4Reducers(
  state: Chapter4State | undefined,
  action: Action
) {
  return _chapter4Reducer(state, action);
}
