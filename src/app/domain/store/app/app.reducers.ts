import { Action, createReducer, on } from '@ngrx/store';
import { AppState } from './app.state';
import * as appActions from './app.actions';

export const initialApp: AppState = {
  turtleName: null,
  modalShow: false,
  chapterOneFinished: false,
  chapterTwoFinished: false,
  chapterThreeFinished: false,
  chapterFourFinished: false,
  chapterFiveFinished: false,
  lastChapterFinished: null,
};

const _appReducer = createReducer(
  initialApp,
  on(appActions.setTurtleName, (state, { turtleName }) => {
    return {
      ...state,
      turtleName,
    };
  }),
  on(appActions.updateModalShow, (state, { modalShow }) => {
    return {
      ...state,
      modalShow,
    };
  }),
  on(appActions.finishChapterOne, (state) => {
    return {
      ...state,
      chapterOneFinished: true,
    };
  }),
  on(appActions.finishChapterTwo, (state) => {
    return {
      ...state,
      chapterTwoFinished: true,
    };
  }),
  on(appActions.finishChapterThree, (state) => {
    return {
      ...state,
      chapterThreeFinished: true,
    };
  }),
  on(appActions.finishChapterFour, (state) => {
    return {
      ...state,
      chapterFourFinished: true,
    };
  }),
  on(appActions.finishChapterFive, (state) => {
    return {
      ...state,
      chapterFiveFinished: true,
    };
  }),
  on(appActions.setLastChapterFinished, (state, { lastChapterFinished }) => {
    return {
      ...state,
      lastChapterFinished,
    };
  })
);

export function AppReducers(state: AppState | undefined, action: Action) {
  return _appReducer(state, action);
}
