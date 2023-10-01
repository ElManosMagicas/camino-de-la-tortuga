import { Component, OnInit } from '@angular/core';
import { APP_ROUTES as ROUTES } from '@app/app.routes';
import { Observable } from 'rxjs';
import { AppFacade } from '@app/facades/app.facade';
import { Chapter1Facade } from '@app/facades/chapter-1.facade';
import { UtilService } from '@app/services/util.service';

@Component({
  selector: 'chapter-1-scene-eleven',
  templateUrl: './scene-eleven.page.html',
  styleUrls: ['./scene-eleven.page.scss'],
})
export class SceneElevenPage implements OnInit {
  public turtleName$: Observable<string>;

  public currentRoute: string = '';

  constructor(
    private _appFacade: AppFacade,
    private _chapter1Facade: Chapter1Facade,
    private _utilService: UtilService
  ) {}

  ngOnInit(): void {
    this._setValues();
  }

  private _setValues() {
    this.turtleName$ = this._appFacade.turtleName$;
    this.currentRoute = this._utilService.getCurrentRoute();
  }

  public onGoToNextPage(): void {
    this._chapter1Facade.goToNextStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_12);
  }
  public onGoToPreviousPage(): void {
    this._chapter1Facade.goToPreviousStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_10);
  }
  public onGoToConfiguration() {}
  public onGoToBackpack() {}
  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_1_SCENE_11);
  }
}
