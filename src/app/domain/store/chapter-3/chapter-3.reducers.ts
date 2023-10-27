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
  })
);

export function Chapter3Reducers(
  state: Chapter3State | undefined,
  action: Action
) {
  return _chapter3Reducer(state, action);
}
