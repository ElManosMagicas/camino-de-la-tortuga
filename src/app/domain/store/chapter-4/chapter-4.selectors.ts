import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Chapter4State } from './chapter-4.state';

export const getChapter4FeatureState = createFeatureSelector('chapter4');

export const selectStep = createSelector(
  getChapter4FeatureState,
  (state: Chapter4State) => state.step
);

export const selectPerfectDayScore = createSelector(
  getChapter4FeatureState,
  (state: Chapter4State) => state.perfectDay
);
