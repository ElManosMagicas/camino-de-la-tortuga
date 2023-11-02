import { createAction, props } from '@ngrx/store';

export const getCurrentRoute = createAction('[Chapter-5] Get Current Route');

export const nextStep = createAction('[Chapter-5] Go To Next Step');

export const stepBack = createAction('[Chapter-5] Go To Step Back');

export const setNewStep = createAction('[Chapter-5] Set New Step');

export const resetStep = createAction('[Chapter-5] Reset Step');

export const increaseTurtleHomeScore = createAction(
  '[Chapter-5] Increase Turtles Home Score'
);

export const resetTurtleHomeScore = createAction(
  '[Chapter-5] Reset Turtles Home Score'
);

export const setC5S1Subtitles = createAction(
  '[Chapter-5] Set Chapter 5 Scene 1 Subtitles',
  props<{ c5s1Subtitles: string }>()
);

export const setC5S2Subtitles = createAction(
  '[Chapter-5] Set Chapter 5 Scene 2 Subtitles',
  props<{ c5s2Subtitles: string }>()
);
