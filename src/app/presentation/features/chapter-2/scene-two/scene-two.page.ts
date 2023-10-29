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
import { ECONFIGURATION } from '@app/core/enums/configuration.enum';

@Component({
  selector: 'chapter-2-scene-two',
  templateUrl: './scene-two.page.html',
  styleUrls: ['./scene-two.page.scss'],
})
export class SceneTwoPage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('backpackChapter2', { static: true })
  backpackChapter2!: TemplateRef<IContextModal>;
  @ViewChild('scenesList', { static: true })
  scenesList!: TemplateRef<IContextModal>;
  @ViewChild('config', { static: true })
  config!: TemplateRef<IContextModal>;
  @ViewChild('cap2Esc2Turtle') audioPlayer: ElementRef;

  public CONST = CONST;
  public currentRoute: string = '';
  public turtleName: string;
  public showNextButton: boolean = true;
  public showPreviousButton: boolean = true;
  public isToggled: boolean = true;

  public turtleName$: Observable<string>;
  public chapterTwoFinished$: Observable<boolean>;
  public chapterThreeFinished$: Observable<boolean>;
  public chapterFourFinished$: Observable<boolean>;
  public isSubtitles$: Observable<boolean>;
  public isSound$: Observable<boolean>;

  public turtleNameSubscription$: Subscription;

  constructor(
    private _renderer: Renderer2,
    private _appFacade: AppFacade,
    private _chapter2Facade: Chapter2Facade,
    private _utilService: UtilService
  ) {}
  ngOnInit(): void {
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
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.playAudio();
    }, 2500);
  }

  ngOnDestroy(): void {
    this.turtleNameSubscription$?.unsubscribe();
  }

  public getSubtitles(): string {
    const name = this.turtleName || '';
    return SUBTITLES_CHAPTER_2.SCENE_TWO.replace(/{turtleName}/g, name);
  }

  public playAudio() {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (audioElement.paused) {
      audioElement.play();
    }
  }

  public onGoToNextPage(): void {
    this._chapter2Facade.goToNextStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_2_SCENE_3);
  }
  public onGoToPreviousPage(): void {
    this._chapter2Facade.goToPreviousStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_2_SCENE_1);
  }

  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_2_SCENE_2);
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
