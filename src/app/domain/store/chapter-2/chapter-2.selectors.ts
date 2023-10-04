import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Chapter2State } from './chapter-2.state';

export const getChapter2FeatureState = createFeatureSelector('chapter-2');

export const selectStep = createSelector(
  getChapter2FeatureState,
  (state: Chapter2State) => state.step
);
