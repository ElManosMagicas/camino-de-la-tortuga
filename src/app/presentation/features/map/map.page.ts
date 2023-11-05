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
import { Observable, Subscription, combineLatest, map } from 'rxjs';
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
  @ViewChild('afterChapter1') afterChapter1: ElementRef<HTMLAudioElement>;
  @ViewChild('afterChapter2') afterChapter2: ElementRef<HTMLAudioElement>;
  @ViewChild('afterChapter3') afterChapter3: ElementRef<HTMLAudioElement>;
  @ViewChild('afterChapter4') afterChapter4: ElementRef<HTMLAudioElement>;

  public CONST = CONST;
  public currentRoute: string = '';
  public turtleName: string;
  public mapDialogs: string = '';
  public isAfterChapter1Playing: boolean = false;
  public isAfterChapter2Playing: boolean = false;
  public isAfterChapter3Playing: boolean = false;
  public isAfterChapter4Playing: boolean = false;

  private _currentChapterToPlay: string = '';

  public turtleName$: Observable<string>;
  public isChapterOneFinished$: Observable<boolean>;
  public isChapterTwoFinished$: Observable<boolean>;
  public isChapterThreeFinished$: Observable<boolean>;
  public isChapterFourFinished$: Observable<boolean>;
  public isChapterFiveFinished$: Observable<boolean>;
  public lastChapterFinished$: Observable<ILastChapterFinished>;
  public isSound$: Observable<boolean>;

  public turtleNameSubscription$: Subscription;
  public lastChapterFinishedSubscription$: Subscription;
  public isSoundSubscription$: Subscription;

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
    this.isSoundSubscription$ = combineLatest([
      this.isSound$,
      this.lastChapterFinished$,
    ])
      .pipe(
        map(([isSound, lastChapter]) => {
          if (isSound) {
            if (lastChapter?.chapter1 === true) {
              this._currentChapterToPlay = 'chapter1';
            } else if (lastChapter?.chapter2 === true) {
              this._currentChapterToPlay = 'chapter2';
            } else if (lastChapter?.chapter3 === true) {
              this._currentChapterToPlay = 'chapter3';
            } else if (lastChapter?.chapter4 === true) {
              this._currentChapterToPlay = 'chapter4';
            }
          } else {
            this._currentChapterToPlay = '';
          }
          return isSound;
        })
      )
      .subscribe((isSound) => {
        if (isSound) {
          this._playAfterCurrentChapter();
        } else {
          false;
        }
      });
  }

  ngOnDestroy(): void {
    this.turtleNameSubscription$?.unsubscribe();
    this.lastChapterFinishedSubscription$?.unsubscribe();
    this.isSoundSubscription$?.unsubscribe();
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
    this.isSound$ = this._appFacade.isSound$;
    this.lastChapterFinishedSubscription$ = this.lastChapterFinished$.subscribe(
      (lastChapter) => {
        if (lastChapter?.chapter1 === true) {
          this.mapDialogs = MAP_DIALOGS.AFTER_CHAPTER_1;
        } else if (lastChapter?.chapter2 === true) {
          this.mapDialogs = MAP_DIALOGS.AFTER_CHAPTER_2;
        } else if (lastChapter?.chapter3 === true) {
          this.mapDialogs = MAP_DIALOGS.AFTER_CHAPTER_3;
        } else if (lastChapter?.chapter4 === true) {
          this.mapDialogs = MAP_DIALOGS.AFTER_CHAPTER_4;
        }
      }
    );
    this.currentRoute = this._utilService.getCurrentRoute();
  }

  private _playAfterCurrentChapter() {
    switch (this._currentChapterToPlay) {
      case 'chapter1':
        this.playAfterChapter1();
        break;
      case 'chapter2':
        this.playAfterChapter2();
        break;
      case 'chapter3':
        this.playAfterChapter3();
        break;
      case 'chapter4':
        this.playAfterChapter4();
        break;
      default:
        // Handle any other chapters or conditions if needed
        break;
    }
  }

  public playAfterChapter1() {
    if (!this.isAfterChapter1Playing) {
      const afterChapter1Element = this.afterChapter1.nativeElement;
      afterChapter1Element?.play();
      this.isAfterChapter1Playing = true;
    }
  }

  public playAfterChapter2() {
    if (!this.isAfterChapter2Playing) {
      const afterChapter2Element = this.afterChapter2?.nativeElement;
      afterChapter2Element?.play();
      this.isAfterChapter2Playing = true;
    }
  }

  public playAfterChapter3() {
    if (!this.isAfterChapter3Playing) {
      const afterChapter3Element = this.afterChapter3.nativeElement;
      afterChapter3Element?.play();
      this.isAfterChapter3Playing = true;
    }
  }

  public playAfterChapter4() {
    if (!this.isAfterChapter4Playing) {
      const afterChapter4Element = this.afterChapter4.nativeElement;
      afterChapter4Element?.play();
      this.isAfterChapter4Playing = true;
    }
  }

  public stopAfterChapter1() {
    if (this.isAfterChapter1Playing) {
      const afterChapter1Element = this.afterChapter1.nativeElement;
      afterChapter1Element.pause();
      afterChapter1Element.currentTime = 0;
      this.isAfterChapter1Playing = false;
    }
  }

  public stopAfterChapter2() {
    if (this.isAfterChapter2Playing) {
      const afterChapter2Element = this.afterChapter2.nativeElement;
      afterChapter2Element.pause();
      afterChapter2Element.currentTime = 0;
      this.isAfterChapter2Playing = false;
    }
  }

  public stopAfterChapter3() {
    if (this.isAfterChapter3Playing) {
      const afterChapter3Element = this.afterChapter3.nativeElement;
      afterChapter3Element.pause();
      afterChapter3Element.currentTime = 0;
      this.isAfterChapter3Playing = false;
    }
  }

  public stopAfterChapter4() {
    if (this.isAfterChapter4Playing) {
      const afterChapter4Element = this.afterChapter4.nativeElement;
      afterChapter4Element.pause();
      afterChapter4Element.currentTime = 0;
      this.isAfterChapter4Playing = false;
    }
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
