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
import { UtilService } from '@app/services/util.service';
import { Observable, Subscription } from 'rxjs';
import { Chapter1Facade } from '@app/facades/chapter-1.facade';
import { Chapter2Facade } from '@app/facades/chapter-2.facade';
import { Chapter3Facade } from '@app/facades/chapter-3.facade';
import { Chapter4Facade } from '@app/facades/chapter-4.facade';
import { Chapter5Facade } from '@app/facades/chapter-5.facade';
import { ILastChapterFinished } from '@app/core/models/finished-chapter.model';
import { MAP_DIALOGS } from './map.dialogs';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('cap4Esc1Narrator') audioPlayer: ElementRef;
  @ViewChild('cap4Esc1Serpiente') tucanPlayer: ElementRef;

  public CONST = CONST;
  public currentRoute: string = '';
  public turtleName: string;
  public mapDialogs: string = '';

  public turtleName$: Observable<string>;
  public isChapterOneFinished$: Observable<boolean>;
  public isChapterTwoFinished$: Observable<boolean>;
  public isChapterThreeFinished$: Observable<boolean>;
  public isChapterFourFinished$: Observable<boolean>;
  public isChapterFiveFinished$: Observable<boolean>;

  public lastChapterFinished$: Observable<ILastChapterFinished>;

  public turtleNameSubscription$: Subscription;
  public lastChapterFinishedSubscription$: Subscription;

  constructor(
    private _renderer: Renderer2,
    private _appFacade: AppFacade,
    private _chapter1Facade: Chapter1Facade,
    private _chapter2Facade: Chapter2Facade,
    private _chapter3Facade: Chapter3Facade,
    private _chapter4Facade: Chapter4Facade,
    private _chapter5Facade: Chapter5Facade,
    private _utilService: UtilService
  ) {}

  ngOnInit(): void {
    this._setValues();
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.playAudio();
    // }, 5000);
  }

  ngOnDestroy(): void {
    this.turtleNameSubscription$?.unsubscribe();
    this.lastChapterFinishedSubscription$?.unsubscribe();
  }

  private _setValues(): void {
    this.turtleName$ = this._appFacade.turtleName$;
    this.turtleNameSubscription$ = this.turtleName$.subscribe((name) => {
      this.turtleName = name;
    });
    this.isChapterOneFinished$ = this._appFacade.isChapterOneFinished$;
    this.isChapterTwoFinished$ = this._appFacade.isChapterTwoFinished$;
    this.isChapterThreeFinished$ = this._appFacade.isChapterThreeFinished$;
    this.isChapterFourFinished$ = this._appFacade.isChapterFourFinished$;
    this.isChapterFiveFinished$ = this._appFacade.isChapterFiveFinished$;
    this.lastChapterFinished$ = this._appFacade.lastChapterFinished$;
    this.lastChapterFinishedSubscription$ = this.lastChapterFinished$.subscribe(
      (lastChapter) => {
        if (lastChapter.chapter1 === true) {
          this.mapDialogs = MAP_DIALOGS.AFTER_CHAPTER_1;
        } else if (lastChapter.chapter2 === true) {
          this.mapDialogs = MAP_DIALOGS.AFTER_CHAPTER_2;
        } else if (lastChapter.chapter3 === true) {
          this.mapDialogs = MAP_DIALOGS.AFTER_CHAPTER_3;
        } else if (lastChapter.chapter4 === true) {
          this.mapDialogs = MAP_DIALOGS.AFTER_CHAPTER_4;
        }
      }
    );
    this.currentRoute = this._utilService.getCurrentRoute();
  }

  public playAudio() {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (audioElement.paused) {
      audioElement.play();
    }
  }

  public onPlayTucanSound(): void {
    // const tucanElement: HTMLAudioElement = this.tucanPlayer.nativeElement;
    // if (tucanElement.paused) {
    //   tucanElement.play();
    // }
  }

  public onGoToChapterOne(): void {
    this._chapter1Facade.goToNextStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_1);
  }
  public onGoToChapterTwo(): void {
    this._chapter2Facade.goToNextStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_2_SCENE_1);
  }
  public onGoToChapterThree(): void {
    this._chapter3Facade.goToNextStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_3_SCENE_1);
  }
  public onGoToChapterFour(): void {
    this._chapter4Facade.goToNextStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_4_SCENE_1);
  }
  public onGoToChapterFive(): void {
    this._chapter5Facade.goToNextStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_5_SCENE_1);
  }
}
