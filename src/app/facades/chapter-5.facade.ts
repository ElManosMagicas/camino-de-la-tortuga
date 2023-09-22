import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as chapter5Selectors from '@store/chapter-5/chapter-5.selectors';
import * as chapter5Actions from '@store/chapter-5/chapter-5.selectors';

@Injectable({ providedIn: 'root' })
export class Chapter5Facade {
  constructor(private _store: Store) {}
}
