import { Component, OnDestroy, OnInit } from '@angular/core';
import { APP_ROUTES as ROUTES } from '@app/app.routes';
import { Observable, Subscription } from 'rxjs';
import { AppFacade } from '@app/facades/app.facade';
import { Chapter1Facade } from '@app/facades/chapter-1.facade';
import { UtilService } from '@app/services/util.service';
import { SUBTITLES_CHAPTER_1 } from '../chapter-1.subtitles';

@Component({
  selector: 'chapter-1-scene-eleven',
  templateUrl: './scene-eleven.page.html',
  styleUrls: ['./scene-eleven.page.scss'],
})
export class SceneElevenPage implements OnInit, OnDestroy {
  public currentRoute: string = '';
  public turtleName: string;
  public showNextButton: boolean = true;
  public showPreviousButton: boolean = true;

  public turtleName$: Observable<string>;

  public turtleNameSubscription$: Subscription;

  constructor(
    private _appFacade: AppFacade,
    private _chapter1Facade: Chapter1Facade,
    private _utilService: UtilService
  ) {}

  ngOnInit(): void {
    this._setValues();
  }

  ngOnDestroy(): void {
    this.turtleNameSubscription$?.unsubscribe();
  }

  private _setValues() {
    this.turtleName$ = this._appFacade.turtleName$;
    this.turtleNameSubscription$ = this.turtleName$.subscribe((name) => {
      this.turtleName = name;
    });
    this.currentRoute = this._utilService.getCurrentRoute();
  }

  public getSubtitles(): string {
    const name = this.turtleName || '';
    return SUBTITLES_CHAPTER_1.SCENE_ELEVEN.replace(/{turtleName}/g, name);
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
