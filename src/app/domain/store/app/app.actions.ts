import { ILastChapterFinished } from '@app/core/models/finished-chapter.model';
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

export const finishChapterOne = createAction('[App] Finish Chapter One');

export const finishChapterTwo = createAction('[App] Finish Chapter Two');

export const finishChapterThree = createAction('[App] Finish Chapter Three');

export const finishChapterFour = createAction('[App] Finish Chapter Four');

export const finishChapterFive = createAction('[App] Finish Chapter Five');

export const setLastChapterFinished = createAction(
  '[App] Set Last Chapter Finished',
  props<{ lastChapterFinished: ILastChapterFinished }>()
);

export const activateSubtitles = createAction('[App] Activate Subtitles');

export const deactivateSubtitles = createAction('[App] Deactivate Subtitles');

export const activateSound = createAction('[App] Activate Sound');

export const deactivateSound = createAction('[App] Deactivate Sound');
