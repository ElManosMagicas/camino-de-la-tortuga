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
import { AppFacade } from '@app/facades/app.facade';
import { Chapter1Facade } from '@app/facades/chapter-1.facade';
import { UtilService } from '@app/services/util.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'chapter-1-scene-seven',
  templateUrl: './scene-seven.page.html',
  styleUrls: ['./scene-seven.page.scss'],
})
export class SceneSevenPage implements OnInit, AfterViewInit {
  @ViewChild('cap1Esc7Narrator') audioPlayer: ElementRef;

  public CONST = CONST;
  public currentRoute: string = '';

  public turtleName$: Observable<string>;

  constructor(
    private _renderer: Renderer2,
    private _appFacade: AppFacade,
    private _chapter1Facade: Chapter1Facade,
    private _utilService: UtilService
  ) {}

  ngOnInit(): void {
    this._setValues();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.playAudio();
    }, 3000);
  }

  private _setValues(): void {
    this.turtleName$ = this._appFacade.turtleName$;
    this.currentRoute = this._utilService.getCurrentRoute();
  }

  public playAudio() {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (audioElement.paused) {
      audioElement.play();
    }
  }

  public onGoToNextPage(): void {
    this._chapter1Facade.goToNextStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_8);
  }
  public onGoToPreviousPage(): void {
    this._chapter1Facade.goToPreviousStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_6);
  }
  public onGoToConfiguration() {}
  public onGoToBackpack() {}
  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_1_SCENE_7);
  }
}
