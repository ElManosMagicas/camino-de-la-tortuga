import { createAction, props } from '@ngrx/store';

export const getCurrentRoute = createAction('[App] Get Current Route');

export const setTurtleName = createAction(
  '[App] Set Turtle Name',
  props<{ turtleName: string }>()
);
