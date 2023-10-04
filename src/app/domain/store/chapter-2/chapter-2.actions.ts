import { createAction } from '@ngrx/store';

export const nextStep = createAction('[Chapter-2] Go To Next Step');

export const stepBack = createAction('[Chapter-2] Go To Step Back');

export const setNewStep = createAction('[Chapter-2] Set New Step');

export const getCurrentRoute = createAction('[Chapter-2] Get Current Route');
