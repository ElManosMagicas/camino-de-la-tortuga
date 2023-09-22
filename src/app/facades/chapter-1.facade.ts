import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as chapter1Selectors from '@store/chapter-1/chapter-1.selectors';
import * as chapter1Actions from '@store/chapter-1/chapter-1.selectors';

@Injectable({ providedIn: 'root' })
export class Chapter1Facade {
  constructor(private _store: Store) {}
}
