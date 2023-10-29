import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { APP_ROUTES as ROUTES } from '@app/app.routes';
import { Observable, Subscription } from 'rxjs';
import { AppFacade } from '@app/facades/app.facade';
import { Chapter1Facade } from '@app/facades/chapter-1.facade';
import { UtilService } from '@app/services/util.service';
import { SUBTITLES_CHAPTER_1 } from '../chapter-1.subtitles';
import { APP_CONSTANTS as CONST } from '@app/app.constants';
import { IContextModal } from '@app/core/models/modal.model';

@Component({
  selector: 'chapter-1-scene-eleven',
  templateUrl: './scene-eleven.page.html',
  styleUrls: ['./scene-eleven.page.scss'],
})
export class SceneElevenPage implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('backpackChapter1', { static: true })
  backpackChapter1!: TemplateRef<IContextModal>;
  @ViewChild('scenesList', { static: true })
  scenesList!: TemplateRef<IContextModal>;
  @ViewChild('cap1Esc11Narrator') audioPlayer: ElementRef;

  public CONST = CONST;
  public currentRoute: string = '';
  public turtleName: string;
  public showNextButton: boolean = true;
  public showPreviousButton: boolean = true;

  public turtleName$: Observable<string>;
  public chapterTwoFinished$: Observable<boolean>;
  public chapterThreeFinished$: Observable<boolean>;
  public chapterFourFinished$: Observable<boolean>;

  public turtleNameSubscription$: Subscription;

  constructor(
    private _appFacade: AppFacade,
    private _chapter1Facade: Chapter1Facade,
    private _utilService: UtilService
  ) {}

  ngOnInit(): void {
    this._setValues();
  }

  ngOnDestroy(): void {
    this.turtleNameSubscription$?.unsubscribe();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.playAudio();
    }, 2000);
  }

  private _setValues() {
    this.turtleName$ = this._appFacade.turtleName$;
    this.turtleNameSubscription$ = this.turtleName$.subscribe((name) => {
      this.turtleName = name;
    });
    this.currentRoute = this._utilService.getCurrentRoute();
    this.chapterTwoFinished$ = this._appFacade.isChapterTwoFinished$;
    this.chapterThreeFinished$ = this._appFacade.isChapterThreeFinished$;
    this.chapterFourFinished$ = this._appFacade.isChapterFourFinished$;
  }

  public getSubtitles(): string {
    const name = this.turtleName || '';
    return SUBTITLES_CHAPTER_1.SCENE_ELEVEN.replace(/{turtleName}/g, name);
  }

  public playAudio() {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (audioElement.paused) {
      audioElement.play();
    }
  }

  public onGoToNextPage(): void {
    this._chapter1Facade.goToNextStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_12);
  }
  public onGoToPreviousPage(): void {
    this._chapter1Facade.goToPreviousStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_10);
  }
  public onGoToConfiguration() {}

  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_1_SCENE_11);
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
}
