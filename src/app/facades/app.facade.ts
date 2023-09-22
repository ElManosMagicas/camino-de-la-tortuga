import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as appSelectors from '@store/app/app.selectors';
import * as appActions from '@store/app/app.actions';

@Injectable({ providedIn: 'root' })
export class AppFacade {
  constructor(private _store: Store) {}
}
