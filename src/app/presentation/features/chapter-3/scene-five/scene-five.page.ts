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
import { Chapter3Facade } from '@app/facades/chapter-3.facade';
import { UtilService } from '@app/services/util.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'chapter-3-scene-five',
  templateUrl: './scene-five.page.html',
  styleUrls: ['./scene-five.page.scss'],
})
export class SceneFivePage implements OnInit, AfterViewInit {
  @ViewChild('cap1Esc2Narrator') audioPlayer: ElementRef;
  @ViewChild('cap3Esc1Serpiente') tucanPlayer: ElementRef;

  public CONST = CONST;
  public currentRoute: string = '';

  public turtleName$: Observable<string>;

  constructor(
    private _renderer: Renderer2,
    private _appFacade: AppFacade,
    private _chapter3Facade: Chapter3Facade,
    private _utilService: UtilService
  ) {}
  ngOnInit(): void {
    this.turtleName$ = this._appFacade.turtleName$;
    this.currentRoute = this._utilService.getCurrentRoute();
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.playAudio();
    // }, 5000);
  }

  public playAudio() {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (audioElement.paused) {
      audioElement.play();
    }
  }

  public onGoToNextPage(): void {
    this._chapter3Facade.goToNextStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_3_SCENE_6);
  }
  public onGoToPreviousPage(): void {
    this._chapter3Facade.goToPreviousStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_3_SCENE_4);
  }
  public onGoToConfiguration() {}
  public onGoToBackpack() {}
  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_3_SCENE_5);
  }

  public onPlayTucanSound(): void {
    // const tucanElement: HTMLAudioElement = this.tucanPlayer.nativeElement;
    // if (tucanElement.paused) {
    //   tucanElement.play();
    // }
  }
}
