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

@Component({
  selector: 'chapter-1-scene-nine',
  templateUrl: './scene-nine.page.html',
  styleUrls: ['./scene-nine.page.scss'],
})
export class SceneNinePage implements OnInit, AfterViewInit {
  @ViewChild('cap1Esc9Narrator') audioPlayer: ElementRef;

  public CONST = CONST;
  public currentRoute: string = '';

  constructor(
    private _renderer: Renderer2,
    private _chapter1Facade: Chapter1Facade,
    private _utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.currentRoute = this._utilService.getCurrentRoute();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.playAudio();
    }, 3000);
  }

  public playAudio() {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (audioElement.paused) {
      audioElement.play();
    }
  }

  public onGoToNextPage(): void {
    this._chapter1Facade.goToNextStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_10);
  }
  public onGoToPreviousPage(): void {
    this._chapter1Facade.goToPreviousStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_8);
  }
  public onGoToConfiguration() {}
  public onGoToBackpack() {}
  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_1_SCENE_9);
  }
}
