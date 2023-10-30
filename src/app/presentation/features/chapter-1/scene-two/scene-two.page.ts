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
import { IContextModal } from '@app/core/models/modal.model';
import { Observable } from 'rxjs';
import { AppFacade } from '@app/facades/app.facade';
import { ECONFIGURATION } from '@app/core/enums/configuration.enum';

@Component({
  selector: 'chapter-1-scene-two',
  templateUrl: './scene-two.page.html',
  styleUrls: ['./scene-two.page.scss'],
})
export class SceneTwoPage implements OnInit, AfterViewInit {
  @ViewChild('backpackChapter1', { static: true })
  backpackChapter1!: TemplateRef<IContextModal>;
  @ViewChild('scenesList', { static: true })
  scenesList!: TemplateRef<IContextModal>;
  @ViewChild('config', { static: true })
  config!: TemplateRef<IContextModal>;
  @ViewChild('cap1Esc2Narrator') audioPlayer: ElementRef;

  public CONST = CONST;
  public currentRoute: string = '';
  public turtleName: string;
  public showNextButton: boolean = true;
  public showPreviousButton: boolean = true;

  public chapterTwoFinished$: Observable<boolean>;
  public chapterThreeFinished$: Observable<boolean>;
  public chapterFourFinished$: Observable<boolean>;
  public isSubtitles$: Observable<boolean>;
  public isSound$: Observable<boolean>;

  constructor(
    private _renderer: Renderer2,
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
    }, 5000);
  }

  public getSubtitles(): string {
    const name = this.turtleName || '';
    return SUBTITLES_CHAPTER_1.SCENE_TWO.replace(/{turtleName}/g, name);
  }

  public playAudio() {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (audioElement.paused) {
      audioElement.play();
    }
  }

  public onGoToNextPage(): void {
    this._chapter1Facade.goToNextStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_3);
  }
  public onGoToPreviousPage(): void {
    this._chapter1Facade.goToPreviousStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_1);
  }

  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_1_SCENE_2);
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
