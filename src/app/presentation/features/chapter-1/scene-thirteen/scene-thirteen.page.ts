import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { APP_CONSTANTS as CONST } from '@app/app.constants';
import { APP_ROUTES as ROUTES } from '@app/app.routes';
import { Chapter1Facade } from '@app/facades/chapter-1.facade';
import { UtilService } from '@app/services/util.service';
import { SUBTITLES_CHAPTER_1 } from '../chapter-1.subtitles';
import { AppFacade } from '@app/facades/app.facade';

@Component({
  selector: 'chapter-1-scene-thirteen',
  templateUrl: './scene-thirteen.page.html',
  styleUrls: ['./scene-thirteen.page.scss'],
})
export class SceneThirteenPage implements OnInit, AfterViewInit {
  @ViewChild('cap1Esc13Cuy') audioPlayer: ElementRef;

  public CONST = CONST;
  public currentRoute: string = '';
  public turtleName: string;
  public showNextButton: boolean = true;
  public showPreviousButton: boolean = true;

  constructor(
    private _appFacade: AppFacade,
    private _chapter1Facade: Chapter1Facade,
    private _utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.currentRoute = this._utilService.getCurrentRoute();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.playAudio();
    }, 2000);
  }

  public getSubtitles(): string {
    const name = this.turtleName || '';
    return SUBTITLES_CHAPTER_1.SCENE_THIRTEEN.replace(/{turtleName}/g, name);
  }

  public playAudio() {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (audioElement.paused) {
      audioElement.play();
    }
  }

  public onGoToNextPage(): void {
    this._appFacade.finishChapterOne();
    this._chapter1Facade.resetStep();
    this._utilService.navigateTo(ROUTES.MAP);
  }
  public onGoToPreviousPage(): void {
    this._chapter1Facade.goToPreviousStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_12);
  }
  public onGoToConfiguration() {}
  public onGoToBackpack() {}
  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_1_SCENE_13);
  }
}
