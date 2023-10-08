import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as chapter3Selectors from '@store/chapter-3/chapter-3.selectors';
import * as chapter3Actions from '@store/chapter-3/chapter-3.actions';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Chapter3Facade {
  public step$: Observable<number>;
  public puzzle$: Observable<number>;

  constructor(private _store: Store) {
    this.step$ = this._store.select(chapter3Selectors.selectStep);
    this.puzzle$ = this._store.select(chapter3Selectors.selectPuzzle);
  }

  public goToNextStep(): void {
    this._store.dispatch(chapter3Actions.nextStep());
  }

  public goToPreviousStep(): void {
    this._store.dispatch(chapter3Actions.stepBack());
  }

  public increasePuzzleScore(): void {
    this._store.dispatch(chapter3Actions.increasePuzzleScore());
  }

  public resetPuzzleScore(): void {
    this._store.dispatch(chapter3Actions.resetPuzzleScore());
  }
}
