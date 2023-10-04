import { createAction } from '@ngrx/store';

export const nextStep = createAction('[Chapter-1] Go To Next Step');

export const stepBack = createAction('[Chapter-1] Go To Step Back');

export const setNewStep = createAction('[Chapter-1] Set New Step');
