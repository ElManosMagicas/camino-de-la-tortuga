import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as chapter2Selectors from '@store/chapter-2/chapter-2.selectors';
import * as chapter2Actions from '@store/chapter-2/chapter-2.selectors';

@Injectable({ providedIn: 'root' })
export class Chapter2Facade {
  constructor(private _store: Store) {}
}
