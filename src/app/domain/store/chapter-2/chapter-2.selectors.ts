import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Chapter2State } from './chapter-2.state';

export const getChapter2FeatureState = createFeatureSelector('chapter2');

export const selectStep = createSelector(
  getChapter2FeatureState,
  (state: Chapter2State) => state.step
);

export const selectBackpack = createSelector(
  getChapter2FeatureState,
  (state: Chapter2State) => state.backpack
);

export const selectC1S3Subtitles = createSelector(
  getChapter2FeatureState,
  (state: Chapter2State) => state.c2s3Subtitles
);
