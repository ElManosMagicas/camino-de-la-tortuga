import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as chapter2Selectors from '@store/chapter-2/chapter-2.selectors';
import * as chapter2Actions from '@store/chapter-2/chapter-2.actions';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Chapter2Facade {
  public step$: Observable<number>;

  constructor(private _store: Store) {
    this.step$ = this._store.select(chapter2Selectors.selectStep);
  }

  public goToNextStep(): void {
    this._store.dispatch(chapter2Actions.nextStep());
  }

  public goToPreviousStep(): void {
    this._store.dispatch(chapter2Actions.stepBack());
  }
}
