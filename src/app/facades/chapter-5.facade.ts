import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as chapter5Selectors from '@store/chapter-5/chapter-5.selectors';
import * as chapter5Actions from '@store/chapter-5/chapter-5.actions';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Chapter5Facade {
  public step$: Observable<number>;
  public turtleHome$: Observable<number>;
  public c5s1Subtitles$: Observable<string>;
  public c5s2Subtitles$: Observable<string>;

  constructor(private _store: Store) {
    this.step$ = this._store.select(chapter5Selectors.selectStep);
    this.turtleHome$ = this._store.select(
      chapter5Selectors.selectTurtleHomeScore
    );
    this.c5s1Subtitles$ = this._store.select(
      chapter5Selectors.selectC5S1Subtitles
    );
    this.c5s2Subtitles$ = this._store.select(
      chapter5Selectors.selectC5S2Subtitles
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

  public setC5S1Subtitles(c5s1Subtitles: string): void {
    this._store.dispatch(
      chapter5Actions.setC5S1Subtitles({ c5s1Subtitles: c5s1Subtitles })
    );
  }

  public setC5S2Subtitles(c5s2Subtitles: string): void {
    this._store.dispatch(
      chapter5Actions.setC5S2Subtitles({ c5s2Subtitles: c5s2Subtitles })
    );
  }
}
