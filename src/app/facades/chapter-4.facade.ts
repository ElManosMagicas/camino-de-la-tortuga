import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as chapter4Selectors from '@store/chapter-4/chapter-4.selectors';
import * as chapter4Actions from '@store/chapter-4/chapter-4.actions';

@Injectable({ providedIn: 'root' })
export class Chapter4Facade {
  constructor(private _store: Store) {}
}
