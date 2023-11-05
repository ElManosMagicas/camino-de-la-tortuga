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
import { AppFacade } from '@app/facades/app.facade';
import { Chapter2Facade } from '@app/facades/chapter-2.facade';
import { UtilService } from '@app/services/util.service';
import { Observable, Subscription } from 'rxjs';
import { SUBTITLES_CHAPTER_2 } from '../chapter-2.subtitles';
import { IContextModal } from '@app/core/models/modal.model';

@Component({
  selector: 'chapter-2-scene-one',
  templateUrl: './scene-one.page.html',
  styleUrls: ['./scene-one.page.scss'],
})
export class SceneOnePage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('backpackChapter2', { static: true })
  backpackChapter2!: TemplateRef<IContextModal>;
  @ViewChild('scenesList', { static: true })
  scenesList!: TemplateRef<IContextModal>;
  @ViewChild('config', { static: true })
  config!: TemplateRef<IContextModal>;
  @ViewChild('cap2Esc1Narrator') audioPlayer: ElementRef<HTMLAudioElement>;

  public CONST = CONST;
  public currentRoute: string = '';
  public turtleName: string;
  public showNextButton: boolean = true;
  public showPreviousButton: boolean = true;
  public removeSubtitlesAnimation: number = 0;
  public audioPlaying: boolean = false;
  public audioCounter: number = 0;

  public turtleName$: Observable<string>;
  public chapterTwoFinished$: Observable<boolean>;
  public chapterThreeFinished$: Observable<boolean>;
  public chapterFourFinished$: Observable<boolean>;
  public isSubtitles$: Observable<boolean>;
  public isSound$: Observable<boolean>;

  public turtleNameSubscription$: Subscription;
  public isSubtitlesSubscription$: Subscription;
  public isSoundSubscription$: Subscription;

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
    this.isSoundSubscription$ = this.isSound$.subscribe((isSound) => {
      if (isSound && this.audioCounter === 0) {
        this.audioCounter;
        setTimeout(() => {
          this.playAudio();
        }, 2000);
      }
      if (isSound && this.audioCounter > 0) {
        this.audioCounter;
        this.playAudio();
      }
      if (isSound == false) {
        this.audioCounter = this.audioCounter + 1;
        this.stopAudio();
      }
    });
  }

  ngOnDestroy(): void {
    this.turtleNameSubscription$?.unsubscribe();
    this.isSubtitlesSubscription$?.unsubscribe();
    this.isSoundSubscription$?.unsubscribe();
  }

  private _setValues(): void {
    this.turtleName$ = this._appFacade.turtleName$;
    this.chapterTwoFinished$ = this._appFacade.isChapterTwoFinished$;
    this.chapterThreeFinished$ = this._appFacade.isChapterThreeFinished$;
    this.chapterFourFinished$ = this._appFacade.isChapterFourFinished$;
    this.turtleNameSubscription$ = this.turtleName$.subscribe((name) => {
      this.turtleName = name;
    });
    this.currentRoute = this._utilService.getCurrentRoute();
    this.isSubtitles$ = this._appFacade.isSubtitles$;
    this.isSound$ = this._appFacade.isSound$;
    this.isSubtitlesSubscription$ = this.isSubtitles$.subscribe((value) => {
      this.removeSubtitlesAnimation =
        value === false
          ? this.removeSubtitlesAnimation + 1
          : this.removeSubtitlesAnimation;
    });
  }

  public getSubtitles(): string {
    const name = this.turtleName || '';
    return SUBTITLES_CHAPTER_2.SCENE_ONE.replace(/{turtleName}/g, name);
  }

  public playAudio() {
    if (!this.audioPlaying) {
      const audioElement = this.audioPlayer.nativeElement;
      audioElement.play();
      this.audioPlaying = true;
    }
  }

  public stopAudio() {
    if (this.audioPlaying) {
      const audioElement = this.audioPlayer.nativeElement;
      audioElement.pause();
      audioElement.currentTime = 0;
      this.audioPlaying = false;
    }
  }

  public onGoToNextPage(): void {
    this._chapter2Facade.goToNextStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_2_SCENE_2);
  }
  public onGoToPreviousPage(): void {
    this._utilService.navigateTo(ROUTES.MAP);
  }

  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_2_SCENE_1);
  }

  public onGoToBackpack(): void {
    this._appFacade.openModal(this.backpackChapter2);
  }

  public onCloseBackpack(): void {
    this._appFacade.closeModal();
  }

  public onOpenScenesList(): void {
    this._appFacade.openModal(this.scenesList);
  }

  public onCloseScenesList(): void {
    this._appFacade.closeModal();
  }

  public onGoToConfiguration(): void {
    this._appFacade.openModal(this.config);
  }

  public onCloseConfig(): void {
    this._appFacade.closeModal();
  }

  public onSoundToggle(event: boolean) {
    event ? this._appFacade.activateSound() : this._appFacade.deactivateSound();
  }

  public onSubtitlesToggle(event: boolean) {
    event
      ? this._appFacade.activateSubtitles()
      : this._appFacade.deactivateSubtitles();
  }
}
