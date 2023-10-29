import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { APP_CONSTANTS as CONST } from '@app/app.constants';
import { APP_ROUTES as ROUTES } from '@app/app.routes';
import { Chapter1Facade } from '@app/facades/chapter-1.facade';
import { UtilService } from '@app/services/util.service';
import { SUBTITLES_CHAPTER_1 } from '../chapter-1.subtitles';
import { AppFacade } from '@app/facades/app.facade';
import { ILastChapterFinished } from '@app/core/models/finished-chapter.model';
import { IContextModal } from '@app/core/models/modal.model';
import { Observable } from 'rxjs';
import { ECONFIGURATION } from '@app/core/enums/configuration.enum';
@Component({
  selector: 'chapter-1-scene-thirteen',
  templateUrl: './scene-thirteen.page.html',
  styleUrls: ['./scene-thirteen.page.scss'],
})
export class SceneThirteenPage implements OnInit, AfterViewInit {
  @ViewChild('backpackChapter1', { static: true })
  backpackChapter1!: TemplateRef<IContextModal>;
  @ViewChild('scenesList', { static: true })
  scenesList!: TemplateRef<IContextModal>;
  @ViewChild('config', { static: true })
  config!: TemplateRef<IContextModal>;
  @ViewChild('cap1Esc13Cuy') audioPlayer: ElementRef;

  public CONST = CONST;
  public currentRoute: string = '';
  public turtleName: string;
  public showNextButton: boolean = true;
  public showPreviousButton: boolean = true;
  public isToggled: boolean = true;

  public chapterTwoFinished$: Observable<boolean>;
  public chapterThreeFinished$: Observable<boolean>;
  public chapterFourFinished$: Observable<boolean>;
  public isSubtitles$: Observable<boolean>;
  public isSound$: Observable<boolean>;

  constructor(
    private _appFacade: AppFacade,
    private _chapter1Facade: Chapter1Facade,
    private _utilService: UtilService
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
    setTimeout(() => {
      this.playAudio();
    }, 2000);
  }

  public getSubtitles(): string {
    const name = this.turtleName || '';
    return SUBTITLES_CHAPTER_1.SCENE_THIRTEEN.replace(/{turtleName}/g, name);
  }

  public playAudio() {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (audioElement.paused) {
      audioElement.play();
    }
  }

  public onGoToNextPage(): void {
    const lastChapterFinished: ILastChapterFinished = {
      chapter1: true,
      chapter2: false,
      chapter3: false,
      chapter4: false,
      chapter5: false,
    };
    this._appFacade.setLastChapterFinished(lastChapterFinished);
    this._appFacade.finishChapterOne();
    this._chapter1Facade.resetStep();
    this._utilService.navigateTo(ROUTES.MAP);
  }
  public onGoToPreviousPage(): void {
    this._chapter1Facade.goToPreviousStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_12);
  }

  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_1_SCENE_13);
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

  public onToggle(eventData: { identifier: string; isToggled: boolean }) {
    if (eventData.identifier === ECONFIGURATION.SUBTITLES) {
      if (eventData.isToggled) {
        this._appFacade.activateSubtitles();
      } else {
        this._appFacade.deactivateSubtitles();
      }
    } else if (eventData.identifier === ECONFIGURATION.SOUND) {
      if (eventData.isToggled) {
        this._appFacade.activateSound();
      } else {
        this._appFacade.deactivateSound();
      }
    }
  }
}
