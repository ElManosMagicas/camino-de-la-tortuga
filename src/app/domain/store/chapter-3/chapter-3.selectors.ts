import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Chapter3State } from './chapter-3.state';

export const getChapter3FeatureState = createFeatureSelector('chapter3');

export const selectStep = createSelector(
  getChapter3FeatureState,
  (state: Chapter3State) => state.step
);

export const selectPieceOne = createSelector(
  getChapter3FeatureState,
  (state: Chapter3State) => state.isPieceOne
);

export const selectPieceTwo = createSelector(
  getChapter3FeatureState,
  (state: Chapter3State) => state.isPieceTwo
);

export const selectPieceThree = createSelector(
  getChapter3FeatureState,
  (state: Chapter3State) => state.isPieceThree
);

export const selectPieceFour = createSelector(
  getChapter3FeatureState,
  (state: Chapter3State) => state.isPieceFour
);

export const selectPieceFive = createSelector(
  getChapter3FeatureState,
  (state: Chapter3State) => state.isPieceFive
);

export const selectPieceSix = createSelector(
  getChapter3FeatureState,
  (state: Chapter3State) => state.isPieceSix
);
