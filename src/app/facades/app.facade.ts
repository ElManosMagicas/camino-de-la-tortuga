import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as appSelectors from '@store/app/app.selectors';
import * as appActions from '@store/app/app.actions';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppFacade {
  public turtleName$: Observable<string>;

  constructor(private _store: Store) {
    this.turtleName$ = this._store.select(appSelectors.selectTurtleName);
  }

  public setTurtleName(turtleName: string) {
    this._store.dispatch(appActions.setTurtleName({ turtleName: turtleName }));
  }
}
