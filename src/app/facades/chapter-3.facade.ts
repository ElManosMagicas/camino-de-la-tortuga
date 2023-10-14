import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as chapter3Selectors from '@store/chapter-3/chapter-3.selectors';
import * as chapter3Actions from '@store/chapter-3/chapter-3.actions';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Chapter3Facade {
  public step$: Observable<number>;
  public pieceOne$: Observable<boolean>;
  public pieceTwo$: Observable<boolean>;
  public pieceThree$: Observable<boolean>;
  public pieceFour$: Observable<boolean>;
  public pieceFive$: Observable<boolean>;
  public pieceSix$: Observable<boolean>;

  constructor(private _store: Store) {
    this.step$ = this._store.select(chapter3Selectors.selectStep);
    this.pieceOne$ = this._store.select(chapter3Selectors.selectPieceOne);
    this.pieceTwo$ = this._store.select(chapter3Selectors.selectPieceTwo);
    this.pieceThree$ = this._store.select(chapter3Selectors.selectPieceThree);
    this.pieceFour$ = this._store.select(chapter3Selectors.selectPieceFour);
    this.pieceFive$ = this._store.select(chapter3Selectors.selectPieceFive);
    this.pieceSix$ = this._store.select(chapter3Selectors.selectPieceSix);
  }

  public goToNextStep(): void {
    this._store.dispatch(chapter3Actions.nextStep());
  }

  public goToPreviousStep(): void {
    this._store.dispatch(chapter3Actions.stepBack());
  }

  public setPieceOne(isPieceOne: boolean): void {
    this._store.dispatch(chapter3Actions.setPieceOne({ isPieceOne }));
  }

  public setPieceTwo(isPieceTwo: boolean): void {
    this._store.dispatch(chapter3Actions.setPieceTwo({ isPieceTwo }));
  }

  public setPieceThree(isPieceThree: boolean): void {
    this._store.dispatch(chapter3Actions.setPieceThree({ isPieceThree }));
  }

  public setPieceFour(isPieceFour: boolean): void {
    this._store.dispatch(chapter3Actions.setPieceFour({ isPieceFour }));
  }

  public setPieceFive(isPieceFive: boolean): void {
    this._store.dispatch(chapter3Actions.setPieceFive({ isPieceFive }));
  }

  public setPieceSix(isPieceSix: boolean): void {
    this._store.dispatch(chapter3Actions.setPieceSix({ isPieceSix }));
  }
}
