import { Component, OnInit } from '@angular/core';
import { AppFacade } from '@app/facades/app.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'chapter-1-scene-six',
  templateUrl: './scene-six.page.html',
  styleUrls: ['./scene-six.page.scss'],
})
export class SceneSixPage implements OnInit {
  public turtleName$: Observable<string>;

  constructor(private _appFacade: AppFacade) {}

  ngOnInit(): void {
    this._setValues();
  }

  private _setValues(): void {
    this.turtleName$ = this._appFacade.turtleName$;
  }
}
