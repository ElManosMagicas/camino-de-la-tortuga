import { Action, createReducer, on } from '@ngrx/store';
import { AppState } from './app.state';
import * as appActions from './app.actions';

export const initialApp: AppState = {
  turtleName: null,
};

const _appReducer = createReducer(
  initialApp,
  on(appActions.setTurtleName, (state, { turtleName }) => {
    return {
      ...state,
      turtleName,
    };
  })
);

export function AppReducers(state: AppState | undefined, action: Action) {
  return _appReducer(state, action);
}
