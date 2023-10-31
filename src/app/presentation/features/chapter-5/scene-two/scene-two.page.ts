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
import { UtilService } from '@app/services/util.service';
import { Observable, Subscription } from 'rxjs';
import { SUBTITLES_CHAPTER_5 } from '../chapter-5.subtitles';
import { Chapter5Facade } from '@app/facades/chapter-5.facade';
import { IContextModal } from '@app/core/models/modal.model';

@Component({
  selector: 'chapter-5-scene-two',
  templateUrl: './scene-two.page.html',
  styleUrls: ['./scene-two.page.scss'],
})
export class SceneTwoPage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('backpackChapter5', { static: true })
  backpackChapter5!: TemplateRef<IContextModal>;
  @ViewChild('scenesList', { static: true })
  scenesList!: TemplateRef<IContextModal>;
  @ViewChild('config', { static: true })
  config!: TemplateRef<IContextModal>;
  @ViewChild('cap5Esc2Narrator') audioPlayer: ElementRef;

  public CONST = CONST;
  public currentRoute: string = '';
  public turtleName: string;
  public showNextButton: boolean = true;
  public showPreviousButton: boolean = true;
  public removeSubtitlesAnimation: number = 0;

  public turtleName$: Observable<string>;
  public chapterTwoFinished$: Observable<boolean>;
  public chapterThreeFinished$: Observable<boolean>;
  public chapterFourFinished$: Observable<boolean>;
  public isSubtitles$: Observable<boolean>;
  public isSound$: Observable<boolean>;

  public turtleNameSubscription$: Subscription;
  public isSubtitlesSubscription$: Subscription;

  constructor(
    private _renderer: Renderer2,
    private _appFacade: AppFacade,
    private _chapter5Facade: Chapter5Facade,
    private _utilService: UtilService
  ) {}

  ngOnInit(): void {
    this._setValues();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.playAudio();
    }, 1000);
  }

  ngOnDestroy(): void {
    this.turtleNameSubscription$?.unsubscribe();
    this.isSubtitlesSubscription$?.unsubscribe();
  }

  private _setValues(): void {
    this.turtleName$ = this._appFacade.turtleName$;
    this.turtleNameSubscription$ = this.turtleName$.subscribe((name) => {
      this.turtleName = name;
    });
    this.currentRoute = this._utilService.getCurrentRoute();
    this.chapterTwoFinished$ = this._appFacade.isChapterTwoFinished$;
    this.chapterThreeFinished$ = this._appFacade.isChapterThreeFinished$;
    this.chapterFourFinished$ = this._appFacade.isChapterFourFinished$;
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
    return SUBTITLES_CHAPTER_5.SCENE_TWO.replace(/{turtleName}/g, name);
  }

  public playAudio() {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (audioElement.paused) {
      audioElement.play();
    }
  }

  public onGoToNextPage(): void {
    this._chapter5Facade.goToNextStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_5_SCENE_3);
  }
  public onGoToPreviousPage(): void {
    this._chapter5Facade.goToPreviousStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_5_SCENE_1);
  }

  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_5_SCENE_2);
  }

  public onGoToBackpack(): void {
    this._appFacade.openModal(this.backpackChapter5);
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
