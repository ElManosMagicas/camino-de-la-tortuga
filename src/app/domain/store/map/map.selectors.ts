import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MapState } from './map.state';

export const getMapFeatureState = createFeatureSelector('map');
