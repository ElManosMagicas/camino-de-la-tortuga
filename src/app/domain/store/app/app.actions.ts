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

export const finishChapterTwo = createAction('[Chapter-1] Finish Chapter Two');

export const finishChapterThree = createAction(
  '[Chapter-1] Finish Chapter Three'
);

export const finishChapterFour = createAction(
  '[Chapter-1] Finish Chapter Four'
);

export const finishChapterFive = createAction(
  '[Chapter-1] Finish Chapter Five'
);
