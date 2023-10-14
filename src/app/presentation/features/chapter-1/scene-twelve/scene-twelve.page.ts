import { Component, OnInit } from '@angular/core';
import { APP_ROUTES as ROUTES } from '@app/app.routes';
import { Chapter1Facade } from '@app/facades/chapter-1.facade';
import { UtilService } from '@app/services/util.service';
import { SUBTITLES_CHAPTER_1 } from '../chapter-1.subtitles';

@Component({
  selector: 'chapter-1-scene-twelve',
  templateUrl: './scene-twelve.page.html',
  styleUrls: ['./scene-twelve.page.scss'],
})
export class SceneTwelvePage implements OnInit {
  public currentRoute: string = '';
  public turtleName: string;

  constructor(
    private _chapter1Facade: Chapter1Facade,
    private _utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.currentRoute = this._utilService.getCurrentRoute();
  }

  public getSubtitles(): string {
    const name = this.turtleName || '';
    return SUBTITLES_CHAPTER_1.SCENE_TWELVE.replace(/{turtleName}/g, name);
  }

  public onGoToNextPage(): void {
    this._chapter1Facade.goToNextStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_13);
  }
  public onGoToPreviousPage(): void {
    this._chapter1Facade.goToPreviousStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_11);
  }
  public onGoToConfiguration() {}
  public onGoToBackpack() {}
  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_1_SCENE_12);
  }
}
