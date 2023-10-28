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
import { SUBTITLES_CHAPTER_3 } from '../chapter-3.subtitles';
import { APP_ROUTES as ROUTES } from '@app/app.routes';
import { AppFacade } from '@app/facades/app.facade';
import { Chapter3Facade } from '@app/facades/chapter-3.facade';
import { UtilService } from '@app/services/util.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'chapter-3-scene-seven',
  templateUrl: './scene-seven.page.html',
  styleUrls: ['./scene-seven.page.scss'],
})
export class SceneSevenPage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('cap3Esc7Snake') audioPlayer: ElementRef;

  public CONST = CONST;
  public currentRoute: string = '';
  public turtleName: string;
  public showNextButton: boolean = true;
  public showPreviousButton: boolean = true;

  public turtleName$: Observable<string>;

  public turtleNameSubscription$: Subscription;

  constructor(
    private _renderer: Renderer2,
    private _appFacade: AppFacade,
    private _chapter3Facade: Chapter3Facade,
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
    }, 1000);
  }

  ngOnDestroy(): void {
    this.turtleNameSubscription$?.unsubscribe();
  }

  public getSubtitles(): string {
    const name = this.turtleName || '';
    return SUBTITLES_CHAPTER_3.SCENE_SEVEN.replace(/{turtleName}/g, name);
  }

  public playAudio() {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (audioElement.paused) {
      audioElement.play();
    }
  }

  public onGoToNextPage(): void {
    this._chapter3Facade.goToNextStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_3_SCENE_8);
  }
  public onGoToPreviousPage(): void {
    this._chapter3Facade.goToPreviousStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_3_SCENE_6);
  }
  public onGoToConfiguration() {}
  public onGoToBackpack() {}
  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_3_SCENE_6);
  }

  public onPlayTucanSound(): void {
    // const tucanElement: HTMLAudioElement = this.tucanPlayer.nativeElement;
    // if (tucanElement.paused) {
    //   tucanElement.play();
    // }
  }
}
