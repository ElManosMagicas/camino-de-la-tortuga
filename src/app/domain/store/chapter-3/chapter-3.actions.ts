import { createAction, props } from '@ngrx/store';

export const getCurrentRoute = createAction('[Chapter-3] Get Current Route');

export const nextStep = createAction('[Chapter-3] Go To Next Step');

export const stepBack = createAction('[Chapter-3] Go To Step Back');

export const setNewStep = createAction('[Chapter-3] Set New Step');

export const resetStep = createAction('[Chapter-3] Reset Step');

export const setPieceOne = createAction(
  '[Chapter-3] Set Piece One',
  props<{ isPieceOne: boolean }>()
);

export const setPieceTwo = createAction(
  '[Chapter-3] Set Piece Two',
  props<{ isPieceTwo: boolean }>()
);

export const setPieceThree = createAction(
  '[Chapter-3] Set Piece Three',
  props<{ isPieceThree: boolean }>()
);

export const setPieceFour = createAction(
  '[Chapter-3] Set Piece Four',
  props<{ isPieceFour: boolean }>()
);

export const setPieceFive = createAction(
  '[Chapter-3] Set Piece Five',
  props<{ isPieceFive: boolean }>()
);

export const setPieceSix = createAction(
  '[Chapter-3] Set Piece Six',
  props<{ isPieceSix: boolean }>()
);
