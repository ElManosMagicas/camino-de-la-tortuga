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
import { EPERFECT_DAY } from '@app/core/enums/chapter-4-scene-6.enum';
import { AppFacade } from '@app/facades/app.facade';
import { UtilService } from '@app/services/util.service';
import { Observable, Subscription } from 'rxjs';
import { Chapter4Facade } from '@app/facades/chapter-4.facade';
import { IContextModal } from '@app/core/models/modal.model';

@Component({
  selector: 'chapter-4-scene-six',
  templateUrl: './scene-six.page.html',
  styleUrls: ['./scene-six.page.scss'],
})
export class SceneSixPage implements OnInit, AfterViewInit, OnInit {
  @ViewChild('successChapter4Activity', { static: true })
  successChapter4Activity!: TemplateRef<IContextModal>;
  @ViewChild('cap4Esc1Narrator') audioPlayer: ElementRef;
  @ViewChild('cap4Esc2Danta') dantaPlayer: ElementRef;

  public CONST = CONST;
  public EPERFECT_DAY = EPERFECT_DAY;
  public currentRoute: string = '';
  public turtleName: string;
  public showNextButton: boolean = false;
  public showPreviousButton: boolean = true;
  public divClicked: boolean[] = [false, false, false];

  public turtleName$: Observable<string>;
  public perfectDay$: Observable<number>;

  public perfectDaySubscription$: Subscription;

  constructor(
    private _renderer: Renderer2,
    private _appFacade: AppFacade,
    private _chapter4Facade: Chapter4Facade,
    private _utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.turtleName$ = this._appFacade.turtleName$;
    this.perfectDay$ = this._chapter4Facade.perfectDay$;
    this.perfectDaySubscription$ = this.perfectDay$.subscribe((score) => {
      score === EPERFECT_DAY.STATE_3
        ? this._appFacade.openModal(this.successChapter4Activity)
        : false;
    });
    this.currentRoute = this._utilService.getCurrentRoute();
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.playAudio();
    // }, 5000);
  }

  ngOnDestroy(): void {
    this.perfectDaySubscription$?.unsubscribe();
  }

  public playAudio() {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (audioElement.paused) {
      audioElement.play();
    }
  }

  public onGoToNextPage(): void {
    this._utilService.navigateTo(ROUTES.CHAPTER_5_SCENE_1);
  }
  public onGoToPreviousPage(): void {
    this._chapter4Facade.goToPreviousStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_4_SCENE_5);
  }
  public onGoToConfiguration() {}
  public onGoToBackpack() {}
  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_4_SCENE_5);
  }

  public onPlayDantaSound(): void {
    // const dantaElement: HTMLAudioElement = this.dantaPlayer.nativeElement;
    // if (dantaElement.paused) {
    //   dantaElement.play();
    // }
  }

  public onIncreasePerfectDayScore(index: number): void {
    this.divClicked[index] = true;
    this._chapter4Facade.increasePerfectDayScore();
  }

  public onGoToMap() {
    this.divClicked = [false, false, false];
    this._chapter4Facade.resetPerfectDayScore();
    this._appFacade.closeModal();
    this._appFacade.finishChapterFour();
    this._utilService.navigateTo(ROUTES.MAP);
  }
}
