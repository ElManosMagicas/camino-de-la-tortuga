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
import { Chapter2Facade } from '@app/facades/chapter-2.facade';
import { UtilService } from '@app/services/util.service';
import { SUBTITLES_CHAPTER_2 } from '../chapter-2.subtitles';

@Component({
  selector: 'chapter-2-scene-three',
  templateUrl: './scene-three.page.html',
  styleUrls: ['./scene-three.page.scss'],
})
export class SceneThreePage implements OnInit, AfterViewInit {
  @ViewChild('cap2Esc3Tucan') audioPlayer: ElementRef;

  public CONST = CONST;
  public currentRoute: string = '';
  public turtleName: string;
  public showNextButton: boolean = true;
  public showPreviousButton: boolean = true;

  constructor(
    private _renderer: Renderer2,
    private _chapter2Facade: Chapter2Facade,
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
    return SUBTITLES_CHAPTER_2.SCENE_THREE.replace(/{turtleName}/g, name);
  }

  public playAudio() {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (audioElement.paused) {
      audioElement.play();
    }
  }

  public onGoToNextPage(): void {
    this._chapter2Facade.goToNextStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_2_SCENE_4);
  }
  public onGoToPreviousPage(): void {
    this._chapter2Facade.goToPreviousStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_2_SCENE_2);
  }
  public onGoToConfiguration() {}
  public onGoToBackpack() {}
  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_2_SCENE_3);
  }
}
