import { createAction } from '@ngrx/store';

export const getCurrentRoute = createAction('[Chapter-4] Get Current Route');

export const nextStep = createAction('[Chapter-4] Go To Next Step');

export const stepBack = createAction('[Chapter-4] Go To Step Back');

export const setNewStep = createAction('[Chapter-4] Set New Step');

export const resetStep = createAction('[Chapter-3] Reset Step');

export const increasePerfectDayScore = createAction(
  '[Chapter-4] Increase Perfect Day Score'
);

export const resetPerfectDayScore = createAction(
  '[Chapter-4] Reset Perfect Day Score'
);
