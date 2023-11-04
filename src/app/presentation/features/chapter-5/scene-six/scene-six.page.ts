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
  @ViewChild('bgSound') audioPlayer: ElementRef<HTMLAudioElement>;

  public CONST = CONST;
  public currentRoute: string = '';
  public turtleName: string;
  public audioPlaying: boolean = false;

  public turtleName$: Observable<string>;
  public isSound$: Observable<boolean>;

  public turtleNameSubscription$: Subscription;
  public isSoundSubscription$: Subscription;

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
    this.isSound$ = this._appFacade.isSound$;
  }

  ngAfterViewInit(): void {
    this.isSoundSubscription$ = this.isSound$.subscribe((isSound) => {
      if (isSound) {
        setTimeout(() => {
          this.playAudio();
        }, 2000);
      }
      if (isSound == false) {
        this.stopAudio();
      }
    });
  }

  ngOnDestroy(): void {
    this.turtleNameSubscription$?.unsubscribe();
    this.isSoundSubscription$?.unsubscribe();
  }

  public getSubtitles(): string {
    const name = this.turtleName || '';
    return SUBTITLES_CHAPTER_5.SCENE_FIVE.replace(/{turtleName}/g, name);
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

  public onGoToNextPage(): void {
    this._chapter5Facade.goToNextStep();
    this._appFacade.finishChapterFive();
    this._utilService.navigateTo(ROUTES.CHAPTER_5_SCENE_7);
  }
  public onGoToPreviousPage(): void {
    this._chapter5Facade.goToPreviousStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_5_SCENE_5);
  }
  public onGoToConfiguration() {}
  public onGoToBackpack() {}
  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_5_SCENE_6);
  }

  public onPlayTucanSound(): void {
    // const tucanElement: HTMLAudioElement = this.tucanPlayer.nativeElement;
    // if (tucanElement.paused) {
    //   tucanElement.play();
    // }
  }
}
