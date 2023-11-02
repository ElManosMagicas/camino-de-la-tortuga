import { Action, createReducer, on } from '@ngrx/store';
import { Chapter3State } from './chapter-3.state';

import * as chapter3Actions from '@store/chapter-3/chapter-3.actions';

export const initialChapter3: Chapter3State = {
  step: 0,
  isPieceOne: false,
  isPieceTwo: false,
  isPieceThree: false,
  isPieceFour: false,
  isPieceFive: false,
  isPieceSix: false,
  c3s5Subtitles: '',
  c3s6Subtitles: '',
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
  on(chapter3Actions.resetStep, (state) => {
    return {
      ...state,
      step: 0,
    };
  }),
  on(chapter3Actions.setPieceOne, (state, { isPieceOne }) => {
    return {
      ...state,
      isPieceOne,
    };
  }),
  on(chapter3Actions.setPieceTwo, (state, { isPieceTwo }) => {
    return {
      ...state,
      isPieceTwo,
    };
  }),
  on(chapter3Actions.setPieceThree, (state, { isPieceThree }) => {
    return {
      ...state,
      isPieceThree,
    };
  }),
  on(chapter3Actions.setPieceFour, (state, { isPieceFour }) => {
    return {
      ...state,
      isPieceFour,
    };
  }),
  on(chapter3Actions.setPieceFive, (state, { isPieceFive }) => {
    return {
      ...state,
      isPieceFive,
    };
  }),
  on(chapter3Actions.setPieceSix, (state, { isPieceSix }) => {
    return {
      ...state,
      isPieceSix,
    };
  }),
  on(chapter3Actions.setC3S5Subtitles, (state, { c3s5Subtitles }) => {
    return {
      ...state,
      c3s5Subtitles,
    };
  }),
  on(chapter3Actions.setC3S6Subtitles, (state, { c3s6Subtitles }) => {
    return {
      ...state,
      c3s6Subtitles,
    };
  })
);

export function Chapter3Reducers(
  state: Chapter3State | undefined,
  action: Action
) {
  return _chapter3Reducer(state, action);
}
