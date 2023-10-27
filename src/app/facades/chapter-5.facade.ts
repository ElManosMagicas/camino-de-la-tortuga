import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as chapter5Selectors from '@store/chapter-5/chapter-5.selectors';
import * as chapter5Actions from '@store/chapter-5/chapter-5.actions';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Chapter5Facade {
  public step$: Observable<number>;
  public turtleHome$: Observable<number>;

  constructor(private _store: Store) {
    this.step$ = this._store.select(chapter5Selectors.selectStep);
    this.turtleHome$ = this._store.select(
      chapter5Selectors.selectTurtleHomeScore
    );
  }

  public goToNextStep(): void {
    this._store.dispatch(chapter5Actions.nextStep());
  }

  public goToPreviousStep(): void {
    this._store.dispatch(chapter5Actions.stepBack());
  }

  public resetStep(): void {
    this._store.dispatch(chapter5Actions.resetStep());
  }

  public increaseTurtleHomeScore(): void {
    this._store.dispatch(chapter5Actions.increaseTurtleHomeScore());
  }

  public resetTurtleHomeScore(): void {
    this._store.dispatch(chapter5Actions.resetTurtleHomeScore());
  }
}
