import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const getAppFeatureState = createFeatureSelector('app');

export const selectTurtleName = createSelector(
  getAppFeatureState,
  (state: AppState) => state.turtleName
);
