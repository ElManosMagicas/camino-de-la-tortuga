import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StartState } from './start.state';

export const getStartFeatureState = createFeatureSelector('start');
