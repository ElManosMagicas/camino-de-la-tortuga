import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const getAppFeatureState = createFeatureSelector('app');

export const selectTurtleName = createSelector(
  getAppFeatureState,
  (state: AppState) => state.turtleName
);

export const selectModalShow = createSelector(
  getAppFeatureState,
  (state: AppState) => state.modalShow
);

export const selectChapterOneFinished = createSelector(
  getAppFeatureState,
  (state: AppState) => state.chapterOneFinished
);

export const selectChapterTwoFinished = createSelector(
  getAppFeatureState,
  (state: AppState) => state.chapterTwoFinished
);

export const selectChapterThreeFinished = createSelector(
  getAppFeatureState,
  (state: AppState) => state.chapterThreeFinished
);

export const selectChapterFourFinished = createSelector(
  getAppFeatureState,
  (state: AppState) => state.chapterFourFinished
);

export const selectChapterFiveFinished = createSelector(
  getAppFeatureState,
  (state: AppState) => state.chapterFiveFinished
);

export const selectLastChapterFinished = createSelector(
  getAppFeatureState,
  (state: AppState) => state.lastChapterFinished
);

export const selectSubtitles = createSelector(
  getAppFeatureState,
  (state: AppState) => state.isSubtitles
);

export const selectSound = createSelector(
  getAppFeatureState,
  (state: AppState) => state.isSound
);

export const selectIsLoadingOrientation = createSelector(
  getAppFeatureState,
  (state: AppState) => state.isLoadingOrientation
);

export const selectIsPortrait = createSelector(
  getAppFeatureState,
  (state: AppState) => state.isPortrait
);

export const selectIsLandscape = createSelector(
  getAppFeatureState,
  (state: AppState) => state.isLandscape
);
