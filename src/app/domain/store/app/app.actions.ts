import { createAction, props } from '@ngrx/store';

export const getCurrentRoute = createAction('[App] Get Current Route');

export const setTurtleName = createAction(
  '[App] Set Turtle Name',
  props<{ turtleName: string }>()
);

export const updateModalShow = createAction(
  '[App] Update Modal Config',
  props<{ modalShow: boolean }>()
);

export const finishChapterOne = createAction('[Chapter-1] Finish Chapter One');
