import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as chapter3Selectors from '@store/chapter-3/chapter-3.selectors';
import * as chapter3Actions from '@store/chapter-3/chapter-3.selectors';

@Injectable({ providedIn: 'root' })
export class Chapter3Facade {
  constructor(private _store: Store) {}
}
