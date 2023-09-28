import { Component, OnInit } from '@angular/core';
import { AppFacade } from '@app/facades/app.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'chapter-1-scene-nine',
  templateUrl: './scene-nine.page.html',
  styleUrls: ['./scene-nine.page.scss'],
})
export class SceneNinePage implements OnInit {
  public turtleName$: Observable<string>;

  constructor(private _appFacade: AppFacade) {}

  ngOnInit(): void {
    this._setValues();
  }

  private _setValues() {
    this.turtleName$ = this._appFacade.turtleName$;
  }
}
