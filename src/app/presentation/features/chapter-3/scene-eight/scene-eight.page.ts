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
import { EBACKPACK } from '@app/core/enums/scene-6.enum';
import { IContextModal } from '@app/core/models/modal.model';
import { AppFacade } from '@app/facades/app.facade';
import { Chapter2Facade } from '@app/facades/chapter-2.facade';
import { UtilService } from '@app/services/util.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'chapter-3-scene-eight',
  templateUrl: './scene-eight.page.html',
  styleUrls: ['./scene-eight.page.scss'],
})
export class SceneEightPage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('successChapter2Activity', { static: true })
  successChapter2Activity!: TemplateRef<IContextModal>;
  @ViewChild('cap2Esc6Narrator')
  audioPlayer: ElementRef;

  public CONST = CONST;
  public EBACKPACK = EBACKPACK;
  public currentRoute: string = '';
  public divClicked: boolean[] = [false, false, false, false];
  public pieceOneClicked: boolean[] = [false, true, false, false];

  public turtleName$: Observable<string>;
  public backpack$: Observable<number>;

  public backpackSubscription$: Subscription;

  public currentBackgroundClass: string = 'pos1';

  public backgrounds: string[] = ['pos1', 'pos2', 'pos3', 'pos4'];

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
    // setTimeout(() => {
    //   this.playAudio();
    // }, 5000);
  }

  ngOnDestroy(): void {
    this.backpackSubscription$?.unsubscribe();
  }

  private _setValues() {
    this.turtleName$ = this._appFacade.turtleName$;
    this.currentRoute = this._utilService.getCurrentRoute();
    this.backpack$ = this._chapter2Facade.backpack$;
    this.backpackSubscription$ = this.backpack$.subscribe((score) => {
      score === EBACKPACK.STATE_5
        ? this._appFacade.openModal(this.successChapter2Activity)
        : false;
    });
  }

  public playAudio() {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (audioElement.paused) {
      audioElement.play();
    }
  }

  public onGoToNextPage(): void {
    this._utilService.navigateTo(ROUTES.CHAPTER_4_SCENE_1);
  }
  public onGoToPreviousPage(): void {
    this._chapter2Facade.goToPreviousStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_3_SCENE_7);
  }
  public onGoToConfiguration() {}
  public onGoToBackpack() {}
  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_3_SCENE_7);
  }

  public onIncreaseBackpackScore(index: number) {
    this.divClicked[index] = true;
    // this._chapter2Facade.increaseBackpackScore();
  }

  public onGoToMap() {
    this.divClicked = [false, false, false, false];
    this._chapter2Facade.resetBackpackScore();
    this._appFacade.closeModal();
    this._utilService.navigateTo(ROUTES.MAP);
  }

  public onToggleBackground() {
    const currentIndex = this.backgrounds.indexOf(this.currentBackgroundClass);
    if (currentIndex === -1 || currentIndex === this.backgrounds.length - 1) {
      this.currentBackgroundClass = 'pos1';
    } else {
      this.currentBackgroundClass = this.backgrounds[currentIndex + 1];
    }
  }
}
