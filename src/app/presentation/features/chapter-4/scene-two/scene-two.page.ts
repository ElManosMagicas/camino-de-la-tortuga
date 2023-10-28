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
import { SUBTITLES_CHAPTER_4 } from '../chapter-4.subtitles';
import { Chapter4Facade } from '@app/facades/chapter-4.facade';

@Component({
  selector: 'chapter-4-scene-two',
  templateUrl: './scene-two.page.html',
  styleUrls: ['./scene-two.page.scss'],
})
export class SceneTwoPage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('cap4Esc1Narrator') audioPlayer: ElementRef;
  @ViewChild('cap4Esc2Danta') dantaPlayer: ElementRef;

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
    private _chapter4Facade: Chapter4Facade,
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
    return SUBTITLES_CHAPTER_4.SCENE_TWO.replace(/{turtleName}/g, name);
  }

  public playAudio() {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (audioElement.paused) {
      audioElement.play();
    }
  }

  public onGoToNextPage(): void {
    this._chapter4Facade.goToNextStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_4_SCENE_3);
  }
  public onGoToPreviousPage(): void {
    this._chapter4Facade.goToPreviousStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_4_SCENE_1);
  }
  public onGoToConfiguration() {}
  public onGoToBackpack() {}
  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_4_SCENE_2);
  }
}
