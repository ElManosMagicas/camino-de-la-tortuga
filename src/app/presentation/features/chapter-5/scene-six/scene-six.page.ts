import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { APP_CONSTANTS as CONST } from '@app/app.constants';
import { APP_ROUTES as ROUTES } from '@app/app.routes';
import { AppFacade } from '@app/facades/app.facade';
import { UtilService } from '@app/services/util.service';
import { Observable, Subscription } from 'rxjs';
import { SUBTITLES_CHAPTER_5 } from '../chapter-5.subtitles';
import { Chapter5Facade } from '@app/facades/chapter-5.facade';

@Component({
  selector: 'chapter-5-scene-six',
  templateUrl: './scene-six.page.html',
  styleUrls: ['./scene-six.page.scss'],
})
export class SceneSixPage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('cap5Esc1Narrator') audioPlayer: ElementRef;
  @ViewChild('cap5Esc1Serpiente') tucanPlayer: ElementRef;

  public CONST = CONST;
  public currentRoute: string = '';
  public turtleName: string;

  public turtleName$: Observable<string>;

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
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.playAudio();
    // }, 5000);
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
    this._utilService.navigateTo(ROUTES.CHAPTER_5_SCENE_6);
  }
  public onGoToPreviousPage(): void {
    this._chapter5Facade.goToPreviousStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_5_SCENE_4);
  }
  public onGoToConfiguration() {}
  public onGoToBackpack() {}
  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_5_SCENE_5);
  }

  public onPlayTucanSound(): void {
    // const tucanElement: HTMLAudioElement = this.tucanPlayer.nativeElement;
    // if (tucanElement.paused) {
    //   tucanElement.play();
    // }
  }
}
