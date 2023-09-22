import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as mapSelectors from '@store/map/map.selectors';
import * as mapActions from '@store/map/map.actions';

@Injectable({ providedIn: 'root' })
export class MapFacade {
  constructor(private _store: Store) {}
}
