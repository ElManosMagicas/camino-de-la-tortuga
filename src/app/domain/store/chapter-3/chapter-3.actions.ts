import { createAction } from '@ngrx/store';

export const getCurrentRoute = createAction('[Chapter-3] Get Current Route');

export const nextStep = createAction('[Chapter-3] Go To Next Step');

export const stepBack = createAction('[Chapter-3] Go To Step Back');

export const setNewStep = createAction('[Chapter-3] Set New Step');

export const increasePuzzleScore = createAction(
  '[Chapter-3] Increase Puzzle Score'
);

export const resetPuzzleScore = createAction('[Chapter-3] Reset Puzzle Score');
