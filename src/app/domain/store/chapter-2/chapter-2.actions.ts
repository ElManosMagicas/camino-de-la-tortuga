import { createAction, props } from '@ngrx/store';

export const nextStep = createAction('[Chapter-2] Go To Next Step');

export const stepBack = createAction('[Chapter-2] Go To Step Back');

export const setNewStep = createAction('[Chapter-2] Set New Step');

export const resetStep = createAction('[Chapter-2] Reset Step');

export const getCurrentRoute = createAction('[Chapter-2] Get Current Route');

export const increaseBackpackScore = createAction(
  '[Chapter-2] Increase Backpack Score'
);

export const resetBackpackScore = createAction(
  '[Chapter-2] Reset Backpack Score'
);

export const setC2S3Subtitles = createAction(
  '[Chapter-2] Set Chapter 2 Scene 3 Subtitles',
  props<{ c2s3Subtitles: string }>()
);
