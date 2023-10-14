import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Chapter5State } from './chapter-5.state';

export const getChapter5FeatureState = createFeatureSelector('chapter5');

export const selectStep = createSelector(
  getChapter5FeatureState,
  (state: Chapter5State) => state.step
);

export const selectTurtleHomeScore = createSelector(
  getChapter5FeatureState,
  (state: Chapter5State) => state.turtleHome
);
