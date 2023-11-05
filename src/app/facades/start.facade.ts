import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as startSelectors from '@store/start/start.selectors';
import * as startActions from '@store/start/start.actions';

@Injectable({ providedIn: 'root' })
export class StartFacade {
  constructor(private _store: Store) {}
}
