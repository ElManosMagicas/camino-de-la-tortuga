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
import { Chapter2Facade } from '@app/facades/chapter-2.facade';
import { UtilService } from '@app/services/util.service';
import { SUBTITLES_CHAPTER_2 } from '../chapter-2.subtitles';
import { IContextModal } from '@app/core/models/modal.model';
import { Observable } from 'rxjs';
import { AppFacade } from '@app/facades/app.facade';
import { ECONFIGURATION } from '@app/core/enums/configuration.enum';

@Component({
  selector: 'chapter-2-scene-three',
  templateUrl: './scene-three.page.html',
  styleUrls: ['./scene-three.page.scss'],
})
export class SceneThreePage implements OnInit, AfterViewInit {
  @ViewChild('backpackChapter2', { static: true })
  backpackChapter2!: TemplateRef<IContextModal>;
  @ViewChild('scenesList', { static: true })
  scenesList!: TemplateRef<IContextModal>;
  @ViewChild('config', { static: true })
  config!: TemplateRef<IContextModal>;
  @ViewChild('cap2Esc3Tucan') audioPlayer: ElementRef;

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
    private _renderer: Renderer2,
    private _appFacade: AppFacade,
    private _chapter2Facade: Chapter2Facade,
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
    return SUBTITLES_CHAPTER_2.SCENE_THREE.replace(/{turtleName}/g, name);
  }

  public playAudio() {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (audioElement.paused) {
      audioElement.play();
    }
  }

  public onGoToNextPage(): void {
    this._chapter2Facade.goToNextStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_2_SCENE_4);
  }
  public onGoToPreviousPage(): void {
    this._chapter2Facade.goToPreviousStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_2_SCENE_2);
  }

  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_2_SCENE_3);
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
