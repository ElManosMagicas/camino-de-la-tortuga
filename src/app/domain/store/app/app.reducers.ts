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
  isSubtitles: true,
  isSound: true,
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
  }),
  on(appActions.activateSubtitles, (state) => {
    return {
      ...state,
      isSubtitles: true,
    };
  }),
  on(appActions.deactivateSubtitles, (state) => {
    return {
      ...state,
      isSubtitles: false,
    };
  }),
  on(appActions.activateSound, (state) => {
    return {
      ...state,
      isSound: true,
    };
  }),
  on(appActions.deactivateSound, (state) => {
    return {
      ...state,
      isSound: false,
    };
  })
);

export function AppReducers(state: AppState | undefined, action: Action) {
  return _appReducer(state, action);
}
