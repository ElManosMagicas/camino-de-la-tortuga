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

@Component({
  selector: 'chapter-1-scene-one',
  templateUrl: './scene-one.page.html',
  styleUrls: ['./scene-one.page.scss'],
})
export class SceneOnePage implements OnInit, AfterViewInit {
  @ViewChild('cap1Esc1Narradora') audioPlayer: ElementRef;

  public CONST = CONST;
  public turtleName: string = '';
  public placeholderText: string = 'Ingresa el nombre aquí';
  public isButtonDisabled: boolean = true;

  constructor(
    private _renderer: Renderer2,
    private _utilService: UtilService,
    private _appFacade: AppFacade,
    private _chapter1Facade: Chapter1Facade
  ) {}
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.playAudio();
    }, 4000);
  }

  ngOnInit(): void {}

  public playAudio() {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (audioElement.paused) {
      audioElement.play();
    }
  }

  public onInputChange(): void {
    this.isButtonDisabled = this.turtleName.trim() === '';
  }

  public onClearPlaceholder(): void {
    this.turtleName = '';
  }

  public onSubmit(): void {
    if (this.turtleName.trim() !== '') {
      this._appFacade.setTurtleName(this.turtleName);
      this._chapter1Facade.goToNextStep();
      this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_2);
    }
  }

  public onGoToNextPage(): void {
    this._chapter1Facade.goToNextStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_2);
  }
  public onGoToPreviousPage(): void {
    // this._chapter1Facade.goToPreviousStep();
  }
  public onGoToConfiguration() {}
  public onGoToBackpack() {}
  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_1_SCENE_1);
  }
}
