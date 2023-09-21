import { AppState } from './app/app.state';
import { AppReducers } from './app/app.reducers';
import { AppEffects } from './app/app.effects';

export interface RootState {
  app: AppState;
}

export const appReducers = {
  app: AppReducers,
};

export const appEffects = [AppEffects];
