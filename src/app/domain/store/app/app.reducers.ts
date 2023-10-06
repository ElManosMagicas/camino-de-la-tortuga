import { Action, createReducer, on } from '@ngrx/store';
import { AppState } from './app.state';
import * as appActions from './app.actions';

export const initialApp: AppState = {
  turtleName: null,
  modalShow: false,
};

const _appReducer = createReducer(
  initialApp,
  on(appActions.setTurtleName, (state, { turtleName }) => {
    return {
      ...state,
      turtleName,
    };
  }),
  on(appActions.updateModalShow, (state, { modalShow }) => {
    return {
      ...state,
      modalShow,
    };
  })
);

export function AppReducers(state: AppState | undefined, action: Action) {
  return _appReducer(state, action);
}
