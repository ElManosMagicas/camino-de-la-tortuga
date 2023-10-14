import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { APP_CONSTANTS as CONST } from '@app/app.constants';
import { APP_ROUTES as ROUTES } from '@app/app.routes';
import { AppFacade } from '@app/facades/app.facade';
import { Chapter1Facade } from '@app/facades/chapter-1.facade';
import { UtilService } from '@app/services/util.service';
import { Observable, Subscription } from 'rxjs';
import { SUBTITLES_CHAPTER_1 } from '../chapter-1.subtitles';

@Component({
  selector: 'chapter-1-scene-seven',
  templateUrl: './scene-seven.page.html',
  styleUrls: ['./scene-seven.page.scss'],
})
export class SceneSevenPage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('cap1Esc7Narrator') audioPlayer: ElementRef;

  public CONST = CONST;
  public currentRoute: string = '';
  public turtleName: string;

  public turtleName$: Observable<string>;

  public turtleNameSubscription$: Subscription;

  constructor(
    private _renderer: Renderer2,
    private _appFacade: AppFacade,
    private _chapter1Facade: Chapter1Facade,
    private _utilService: UtilService
  ) {}

  ngOnInit(): void {
    this._setValues();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.playAudio();
    }, 3000);
  }

  ngOnDestroy(): void {
    this.turtleNameSubscription$?.unsubscribe();
  }

  private _setValues(): void {
    this.turtleName$ = this._appFacade.turtleName$;
    this.turtleNameSubscription$ = this.turtleName$.subscribe((name) => {
      this.turtleName = name;
    });
    this.currentRoute = this._utilService.getCurrentRoute();
  }

  public getSubtitles(): string {
    const name = this.turtleName || '';
    return SUBTITLES_CHAPTER_1.SCENE_SEVEN.replace(/{turtleName}/g, name);
  }

  public playAudio() {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (audioElement.paused) {
      audioElement.play();
    }
  }

  public onGoToNextPage(): void {
    this._chapter1Facade.goToNextStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_8);
  }
  public onGoToPreviousPage(): void {
    this._chapter1Facade.goToPreviousStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_6);
  }
  public onGoToConfiguration() {}
  public onGoToBackpack() {}
  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_1_SCENE_7);
  }
}
