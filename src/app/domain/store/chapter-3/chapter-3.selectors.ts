import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Chapter3State } from './chapter-3.state';

export const getChapter3FeatureState = createFeatureSelector('chapter3');

export const selectStep = createSelector(
  getChapter3FeatureState,
  (state: Chapter3State) => state.step
);

export const selectPuzzle = createSelector(
  getChapter3FeatureState,
  (state: Chapter3State) => state.puzzle
);
