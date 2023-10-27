import { createAction } from '@ngrx/store';

export const getCurrentRoute = createAction('[Chapter-5] Get Current Route');

export const nextStep = createAction('[Chapter-5] Go To Next Step');

export const stepBack = createAction('[Chapter-5] Go To Step Back');

export const setNewStep = createAction('[Chapter-5] Set New Step');

export const resetStep = createAction('[Chapter-5] Reset Step');

export const increaseTurtleHomeScore = createAction(
  '[Chapter-5] Increase Turtles Home Score'
);

export const resetTurtleHomeScore = createAction(
  '[Chapter-2] Reset Turtles Home Score'
);
