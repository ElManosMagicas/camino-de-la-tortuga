import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { APP_CONSTANTS as CONST } from '@app/app.constants';
import { APP_ROUTES as ROUTES } from '@app/app.routes';
import { ETURLTE_HOME } from '@app/core/enums/chapter-5-scene-4.enum';
import { AppFacade } from '@app/facades/app.facade';
import { UtilService } from '@app/services/util.service';
import { Observable, Subscription } from 'rxjs';
import { SUBTITLES_CHAPTER_5 } from '../chapter-5.subtitles';
import { Chapter5Facade } from '@app/facades/chapter-5.facade';
import { EPERFECT_DAY } from '@app/core/enums/chapter-4-scene-6.enum';
import { IContextModal } from '@app/core/models/modal.model';
import { ILastChapterFinished } from '@app/core/models/finished-chapter.model';

@Component({
  selector: 'chapter-5-scene-four',
  templateUrl: './scene-four.page.html',
  styleUrls: ['./scene-four.page.scss'],
})
export class SceneFourPage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('cap5Esc4Narrator') audioPlayer: ElementRef;
  @ViewChild('successSound')
  successSound: ElementRef;

  public CONST = CONST;
  public EPERFECT_DAY = EPERFECT_DAY;
  public currentRoute: string = '';
  public turtleName: string;
  public showNextButton: boolean = false;
  public showPreviousButton: boolean = true;
  public piecesClicked: boolean[] = [false, false, false];
  public isDottedEnabled: boolean = false;
  public dottedClicked: boolean[] = [false, false, false];
  public piecesCompleted: boolean[] = [false, false, false];
  public showConfeti: boolean = false;

  public turtleName$: Observable<string>;
  public turtleHome$: Observable<number>;

  public turtleNameSubscription$: Subscription;
  public turtleHomeSubscription$: Subscription;

  constructor(
    private _renderer: Renderer2,
    private _appFacade: AppFacade,
    private _chapter5Facade: Chapter5Facade,
    private _utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.turtleName$ = this._appFacade.turtleName$;
    this.turtleNameSubscription$ = this.turtleName$.subscribe((name) => {
      this.turtleName = name;
    });
    this.turtleHome$ = this._chapter5Facade.turtleHome$;
    this.turtleHomeSubscription$ = this.turtleHome$.subscribe((score) => {
      if (score === ETURLTE_HOME.STATE_3) {
        this.showConfeti = true;
        this.playSuccessAudio();
        setTimeout(() => {
          this.onContinue();
        }, 4000);
      }
    });
    this.currentRoute = this._utilService.getCurrentRoute();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.playAudio();
    }, 500);
  }

  ngOnDestroy(): void {
    this.turtleNameSubscription$?.unsubscribe();
    this.turtleHomeSubscription$?.unsubscribe();
  }

  public getSubtitles(): string {
    const name = this.turtleName || '';
    return SUBTITLES_CHAPTER_5.SCENE_FIVE.replace(/{turtleName}/g, name);
  }

  public playAudio() {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (audioElement.paused) {
      audioElement.play();
    }
  }

  public playSuccessAudio() {
    const successElement: HTMLAudioElement = this.successSound.nativeElement;
    if (successElement.paused) {
      successElement.play();
    }
  }

  public onGoToNextPage(): void {
    this._chapter5Facade.goToNextStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_5_SCENE_5);
  }
  public onGoToPreviousPage(): void {
    this._chapter5Facade.goToPreviousStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_5_SCENE_3);
  }
  public onGoToConfiguration() {}
  public onGoToBackpack() {}
  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_5_SCENE_4);
  }

  public onPlayTucanSound(): void {
    // const tucanElement: HTMLAudioElement = this.tucanPlayer.nativeElement;
    // if (tucanElement.paused) {
    //   tucanElement.play();
    // }
  }

  public onPieceClicked(index: number): void {
    this.piecesClicked[index] = !this.piecesClicked[index];
    this.updateDottedDisabled();
    for (let i = 0; i < this.piecesClicked.length; i++) {
      if (i !== index) {
        this.piecesClicked[i] = false;
      }
    }
  }

  public updateDottedDisabled(): void {
    this.isDottedEnabled = this.piecesClicked.some((clicked) => clicked);
  }

  public onDottedClicked(index: number): void {
    this.dottedClicked[index] = !this.dottedClicked[index];
    if (this.piecesClicked[index] && this.dottedClicked[index]) {
      this._chapter5Facade.increaseTurtleHomeScore();
      this.piecesCompleted[index] = true;
    } else {
      this.dottedClicked[index] = false;
    }
  }

  public onContinue(): void {
    const lastChapterFinished: ILastChapterFinished = {
      chapter1: false,
      chapter2: false,
      chapter3: false,
      chapter4: false,
      chapter5: true,
    };
    this._appFacade.setLastChapterFinished(lastChapterFinished);
    this.piecesClicked = [false, false, false];
    this.isDottedEnabled = false;
    this.dottedClicked = [false, false, false];
    this.piecesCompleted = [false, false, false];
    this.showConfeti = false;
    this._chapter5Facade.resetTurtleHomeScore();
    this._utilService.navigateTo(ROUTES.CHAPTER_5_SCENE_5);
  }
}
