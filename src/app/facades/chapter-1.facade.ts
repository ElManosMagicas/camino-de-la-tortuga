import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as chapter1Selectors from '@store/chapter-1/chapter-1.selectors';
import * as chapter1Actions from '@store/chapter-1/chapter-1.actions';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Chapter1Facade {
  public step$: Observable<number>;

  constructor(private _store: Store) {
    this.step$ = this._store.select(chapter1Selectors.selectStep);
  }

  public goToNextStep(): void {
    this._store.dispatch(chapter1Actions.nextStep());
  }

  public goToPreviousStep(): void {
    this._store.dispatch(chapter1Actions.stepBack());
  }
}
