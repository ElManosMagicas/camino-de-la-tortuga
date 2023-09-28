import { Component, OnInit } from '@angular/core';
import { AppFacade } from '@app/facades/app.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'chapter-1-scene-four',
  templateUrl: './scene-four.page.html',
  styleUrls: ['./scene-four.page.scss'],
})
export class SceneFourPage implements OnInit {
  public turtleName$: Observable<string>;

  constructor(private _appFacade: AppFacade) {}

  ngOnInit(): void {
    this._setValues();
  }

  private _setValues(): void {
    this.turtleName$ = this._appFacade.turtleName$;
  }
}
