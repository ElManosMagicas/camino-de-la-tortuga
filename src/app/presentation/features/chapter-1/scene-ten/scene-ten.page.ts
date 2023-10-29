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
import { Observable } from 'rxjs';
import { IContextModal } from '@app/core/models/modal.model';

@Component({
  selector: 'chapter-1-scene-ten',
  templateUrl: './scene-ten.page.html',
  styleUrls: ['./scene-ten.page.scss'],
})
export class SceneTenPage implements OnInit, AfterViewInit {
  @ViewChild('backpackChapter1', { static: true })
  backpackChapter1!: TemplateRef<IContextModal>;
  @ViewChild('scenesList', { static: true })
  scenesList!: TemplateRef<IContextModal>;
  @ViewChild('cap1Esc10Narrator') audioPlayer: ElementRef;

  public CONST = CONST;
  public currentRoute: string = '';
  public turtleName: string;
  public showNextButton: boolean = true;
  public showPreviousButton: boolean = true;

  public chapterTwoFinished$: Observable<boolean>;
  public chapterThreeFinished$: Observable<boolean>;
  public chapterFourFinished$: Observable<boolean>;

  constructor(
    private _chapter1Facade: Chapter1Facade,
    private _appFacade: AppFacade,
    private _utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.currentRoute = this._utilService.getCurrentRoute();
    this.chapterTwoFinished$ = this._appFacade.isChapterTwoFinished$;
    this.chapterThreeFinished$ = this._appFacade.isChapterThreeFinished$;
    this.chapterFourFinished$ = this._appFacade.isChapterFourFinished$;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.playAudio();
    }, 1500);
  }

  public getSubtitles(): string {
    const name = this.turtleName || '';
    return SUBTITLES_CHAPTER_1.SCENE_TEN.replace(/{turtleName}/g, name);
  }

  public playAudio() {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (audioElement.paused) {
      audioElement.play();
    }
  }

  public onGoToNextPage(): void {
    this._chapter1Facade.goToNextStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_11);
  }
  public onGoToPreviousPage(): void {
    this._chapter1Facade.goToPreviousStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_9);
  }
  public onGoToConfiguration() {}

  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_1_SCENE_10);
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
