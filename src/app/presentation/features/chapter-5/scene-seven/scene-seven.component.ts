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
import { Chapter1Facade } from '@app/facades/chapter-1.facade';
import { Chapter2Facade } from '@app/facades/chapter-2.facade';
import { Chapter3Facade } from '@app/facades/chapter-3.facade';
import { Chapter4Facade } from '@app/facades/chapter-4.facade';
import { IContextModal } from '@app/core/models/modal.model';

@Component({
  selector: 'app-scene-seven',
  templateUrl: './scene-seven.component.html',
  styleUrls: ['./scene-seven.component.scss'],
})
export class SceneSevenComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('credits', { static: true })
  credits!: TemplateRef<IContextModal>;
  @ViewChild('cap5Esc7Narrator') audioPlayer: ElementRef;

  public CONST = CONST;
  public currentRoute: string = '';
  public turtleName: string;

  public turtleName$: Observable<string>;

  public turtleNameSubscription$: Subscription;

  constructor(
    private _renderer: Renderer2,
    private _appFacade: AppFacade,
    private _chapter1Facade: Chapter1Facade,
    private _chapter2Facade: Chapter2Facade,
    private _chapter3Facade: Chapter3Facade,
    private _chapter4Facade: Chapter4Facade,
    private _chapter5Facade: Chapter5Facade,
    private _utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.turtleName$ = this._appFacade.turtleName$;
    this.turtleNameSubscription$ = this.turtleName$.subscribe((name) => {
      this.turtleName = name;
    });
    this.currentRoute = this._utilService.getCurrentRoute();
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
    return SUBTITLES_CHAPTER_5.SCENE_FIVE.replace(/{turtleName}/g, name);
  }

  public playAudio() {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (audioElement.paused) {
      audioElement.play();
    }
  }

  public onGoToNextPage(): void {
    this._chapter5Facade.goToNextStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_5_SCENE_5);
  }

  public onGoToPreviousPage(): void {
    this._chapter5Facade.goToPreviousStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_5_SCENE_3);
  }

  public onGoToConfiguration() {}

  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_5_SCENE_4);
  }

  public onGoToCredits(): void {
    this._appFacade.openModal(this.credits);
  }

  public onCloseCredits(): void {
    this._appFacade.closeModal();
  }

  public onRepeat(): void {
    this._chapter1Facade.resetStep();
    this._chapter2Facade.resetStep();
    this._chapter3Facade.resetStep();
    this._chapter4Facade.resetStep();
    this._chapter5Facade.resetStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_1);
  }
}
