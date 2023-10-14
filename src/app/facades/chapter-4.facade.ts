import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as chapter4Selectors from '@store/chapter-4/chapter-4.selectors';
import * as chapter4Actions from '@store/chapter-4/chapter-4.actions';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Chapter4Facade {
  public step$: Observable<number>;
  public perfectDay$: Observable<number>;

  constructor(private _store: Store) {
    this.step$ = this._store.select(chapter4Selectors.selectStep);
    this.perfectDay$ = this._store.select(
      chapter4Selectors.selectPerfectDayScore
    );
  }

  public goToNextStep(): void {
    this._store.dispatch(chapter4Actions.nextStep());
  }

  public goToPreviousStep(): void {
    this._store.dispatch(chapter4Actions.stepBack());
  }

  public increasePerfectDayScore(): void {
    this._store.dispatch(chapter4Actions.increasePerfectDayScore());
  }

  public resetPerfectDayScore(): void {
    this._store.dispatch(chapter4Actions.resetPerfectDayScore());
  }
}
