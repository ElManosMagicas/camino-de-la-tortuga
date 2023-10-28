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
  selector: 'chapter-5-scene-one',
  templateUrl: './scene-one.page.html',
  styleUrls: ['./scene-one.page.scss'],
})
export class SceneOnePage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('backpackChapter5', { static: true })
  backpackChapter5!: TemplateRef<IContextModal>;
  @ViewChild('cap5Esc1Narrator') audioPlayer: ElementRef;

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
    private _renderer: Renderer2,
    private _appFacade: AppFacade,
    private _chapter5Facade: Chapter5Facade,
    private _utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.turtleName$ = this._appFacade.turtleName$;
    this.turtleNameSubscription$ = this.turtleName$.subscribe((name) => {
      this.turtleName = name;
    });
    this.currentRoute = this._utilService.getCurrentRoute();
    this.chapterTwoFinished$ = this._appFacade.isChapterTwoFinished$;
    this.chapterThreeFinished$ = this._appFacade.isChapterThreeFinished$;
    this.chapterFourFinished$ = this._appFacade.isChapterFourFinished$;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.playAudio();
    }, 3500);
  }

  ngOnDestroy(): void {
    this.turtleNameSubscription$?.unsubscribe();
  }

  public getSubtitles(): string {
    const name = this.turtleName || '';
    return SUBTITLES_CHAPTER_5.SCENE_ONE.replace(/{turtleName}/g, name);
  }

  public playAudio() {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (audioElement.paused) {
      audioElement.play();
    }
  }

  public onGoToNextPage(): void {
    this._chapter5Facade.goToNextStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_5_SCENE_2);
  }
  public onGoToPreviousPage(): void {
    this._utilService.navigateTo(ROUTES.MAP);
  }
  public onGoToConfiguration() {}

  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_5_SCENE_1);
  }

  public onGoToBackpack(): void {
    this._appFacade.openModal(this.backpackChapter5);
  }

  public onCloseBackpack(): void {
    this._appFacade.closeModal();
  }
}
