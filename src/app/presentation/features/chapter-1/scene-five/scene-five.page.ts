import { Component, OnInit } from '@angular/core';
import { AppFacade } from '@app/facades/app.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'chapter-1-scene-five',
  templateUrl: './scene-five.page.html',
  styleUrls: ['./scene-five.page.scss'],
})
export class SceneFivePage implements OnInit {
  public turtleName$: Observable<string>;

  constructor(private _appFacade: AppFacade) {}

  ngOnInit(): void {
    this._setValues();
  }

  private _setValues(): void {
    this.turtleName$ = this._appFacade.turtleName$;
  }
}
