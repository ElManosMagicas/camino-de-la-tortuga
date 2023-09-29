import { Component, OnInit } from '@angular/core';
import { Chapter1Facade } from '@app/facades/chapter-1.facade';
import { UtilService } from '@app/services/util.service';
import { APP_ROUTES as ROUTES } from '@app/app.routes';

@Component({
  selector: 'chapter-1-scene-three',
  templateUrl: './scene-three.page.html',
  styleUrls: ['./scene-three.page.scss'],
})
export class SceneThreePage implements OnInit {
  constructor(
    private _chapter1Facade: Chapter1Facade,
    private _utilService: UtilService
  ) {}

  ngOnInit(): void {}

  public onGoToNextPage(): void {
    this._chapter1Facade.goToNextStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_4);
  }
  public onGoToPreviousPage(): void {
    this._chapter1Facade.goToPreviousStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_2);
  }
  public onGoToConfiguration() {}
  public onGoToBackpack() {}
  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_1_SCENE_3);
  }
}
