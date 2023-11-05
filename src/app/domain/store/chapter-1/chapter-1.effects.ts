import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as chapter1Selectors from '@store/chapter-1/chapter-1.selectors';
import * as chapter1Actions from './chapter-1.actions';
import * as appSelectors from '@store/app/app.selectors';
import * as appActions from '@store/app/app.actions';
import { Chapter1Facade } from '@app/facades/chapter-1.facade';
import { AppFacade } from '@app/facades/app.facade';
import { tap, withLatestFrom } from 'rxjs';
import { UtilService } from '@app/services/util.service';
import { APP_ROUTES as ROUTES } from '@app/app.routes';

@Injectable()
export class Chapter1Effects {
  constructor(
    private _store: Store,
    private actions$: Actions,
    private _appFacade: AppFacade,
    private _chapter1Facade: Chapter1Facade,
    private _utilService: UtilService
  ) {}

  // public goToNextPage$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(chapter1Actions.nextStep),
  //       withLatestFrom(this._store.select(chapter1Selectors.selectStep)),
  //       tap(([_, step]) => {
  //         if (step === 2) {
  //           this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_2);
  //         }
  //       })
  //     ),
  //   { dispatch: false }
  // );
}
