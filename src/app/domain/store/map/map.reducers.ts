import { Action, createReducer } from '@ngrx/store';
import { MapState } from './map.state';

export const initialMap: MapState = {};

const _mapReducer = createReducer(initialMap);

export function MapReducers(state: MapState | undefined, action: Action) {
  return _mapReducer(state, action);
}
