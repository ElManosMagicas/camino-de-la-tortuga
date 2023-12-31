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
import { EBACKPACK } from '@app/core/enums/chapter-2-scene-6.enum';
import { ILastChapterFinished } from '@app/core/models/finished-chapter.model';
import { IContextModal } from '@app/core/models/modal.model';
import { AppFacade } from '@app/facades/app.facade';
import { Chapter2Facade } from '@app/facades/chapter-2.facade';
import { UtilService } from '@app/services/util.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'chapter-2-scene-six',
  templateUrl: './scene-six.page.html',
  styleUrls: ['./scene-six.page.scss'],
})
export class SceneSixPage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('successChapter2Activity', { static: true })
  successChapter2Activity!: TemplateRef<IContextModal>;
  @ViewChild('cap2Esc6Narrator')
  audioPlayer: ElementRef;
  @ViewChild('successSound')
  successSound: ElementRef;

  public CONST = CONST;
  public EBACKPACK = EBACKPACK;
  public currentRoute: string = '';
  public showNextButton: boolean = false;
  public showPreviousButton: boolean = true;
  public divClicked: boolean[] = [false, false, false, false];

  public turtleName$: Observable<string>;
  public backpack$: Observable<number>;

  public backpackSubscription$: Subscription;

  constructor(
    private _renderer: Renderer2,
    private _appFacade: AppFacade,
    private _chapter2Facade: Chapter2Facade,
    private _utilService: UtilService
  ) {}

  ngOnInit(): void {
    this._setValues();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.playAudio();
    }, 2500);
  }

  ngOnDestroy(): void {
    this.backpackSubscription$?.unsubscribe();
  }

  private _setValues() {
    this.turtleName$ = this._appFacade.turtleName$;
    this.currentRoute = this._utilService.getCurrentRoute();
    this.backpack$ = this._chapter2Facade.backpack$;
    this.backpackSubscription$ = this.backpack$.subscribe((score) => {
      if (score === EBACKPACK.STATE_5) {
        this.playSuccessAudio();
        setTimeout(() => {
          this._appFacade.openModal(this.successChapter2Activity);
        }, 2000);
      } else {
        false;
      }
    });
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
    this._utilService.navigateTo(ROUTES.CHAPTER_3_SCENE_1);
  }
  public onGoToPreviousPage(): void {
    this._chapter2Facade.goToPreviousStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_2_SCENE_5);
  }
  public onGoToConfiguration() {}
  public onGoToBackpack() {}
  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_2_SCENE_5);
  }

  public onIncreaseBackpackScore(index: number) {
    this.divClicked[index] = true;
    this._chapter2Facade.increaseBackpackScore();
  }

  public onGoToMap() {
    const lastChapterFinished: ILastChapterFinished = {
      chapter1: false,
      chapter2: true,
      chapter3: false,
      chapter4: false,
      chapter5: false,
    };
    this._appFacade.setLastChapterFinished(lastChapterFinished);
    this.divClicked = [false, false, false, false];
    this._chapter2Facade.resetBackpackScore();
    this._appFacade.closeModal();
    this._appFacade.finishChapterTwo();
    this._utilService.navigateTo(ROUTES.MAP);
  }
}
