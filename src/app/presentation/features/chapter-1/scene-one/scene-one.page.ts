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
import { IContextModal } from '@app/core/models/modal.model';
import { AppFacade } from '@app/facades/app.facade';
import { Chapter1Facade } from '@app/facades/chapter-1.facade';
import { UtilService } from '@app/services/util.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'chapter-1-scene-one',
  templateUrl: './scene-one.page.html',
  styleUrls: ['./scene-one.page.scss'],
})
export class SceneOnePage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('backpackChapter1', { static: true })
  backpackChapter1!: TemplateRef<IContextModal>;
  @ViewChild('scenesList', { static: true })
  scenesList!: TemplateRef<IContextModal>;
  @ViewChild('config', { static: true })
  config!: TemplateRef<IContextModal>;
  @ViewChild('cap1Esc1Narrator') audioPlayer: ElementRef<HTMLAudioElement>;

  public CONST = CONST;
  public turtleName: string = '';
  public placeholderText: string = 'Ingresa el nombre aquí';
  public isButtonDisabled: boolean = true;
  public currentRoute: string = '';
  public audioPlaying: boolean = false;
  public audioCounter: number = 0;

  public chapterTwoFinished$: Observable<boolean>;
  public chapterThreeFinished$: Observable<boolean>;
  public chapterFourFinished$: Observable<boolean>;
  public isSubtitles$: Observable<boolean>;
  public isSound$: Observable<boolean>;

  public isSoundSubscription$: Subscription;

  constructor(
    private _renderer: Renderer2,
    private _utilService: UtilService,
    private _appFacade: AppFacade,
    private _chapter1Facade: Chapter1Facade
  ) {}

  ngOnInit(): void {
    this.currentRoute = this._utilService.getCurrentRoute();
    this.chapterTwoFinished$ = this._appFacade.isChapterTwoFinished$;
    this.chapterThreeFinished$ = this._appFacade.isChapterThreeFinished$;
    this.chapterFourFinished$ = this._appFacade.isChapterFourFinished$;
    this.isSubtitles$ = this._appFacade.isSubtitles$;
    this.isSound$ = this._appFacade.isSound$;
  }

  ngAfterViewInit(): void {
    this.isSoundSubscription$ = this.isSound$.subscribe((isSound) => {
      if (isSound && this.audioCounter === 0) {
        this.audioCounter;
        setTimeout(() => {
          this.playAudio();
        }, 5000);
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
    this.isSoundSubscription$?.unsubscribe();
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

  public onInputChange(): void {
    this.isButtonDisabled = this.turtleName.trim() === '';
  }

  public onClearPlaceholder(): void {
    this.turtleName = '';
  }

  public onSubmit(): void {
    if (this.turtleName.trim() !== '') {
      this._appFacade.setTurtleName(this.turtleName);
      this._chapter1Facade.goToNextStep();
      this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_2);
    }
  }

  public onGoToNextPage(): void {}
  public onGoToPreviousPage(): void {}
  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_1_SCENE_1);
  }

  public onGoToBackpack(): void {
    this._appFacade.openModal(this.backpackChapter1);
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
