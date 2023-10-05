import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Chapter1State } from './chapter-1.state';

export const getChapter1FeatureState = createFeatureSelector('chapter1');

export const selectStep = createSelector(
  getChapter1FeatureState,
  (state: Chapter1State) => state.step
);
