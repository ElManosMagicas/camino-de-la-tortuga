import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { APP_CONSTANTS as CONST } from '@app/app.constants';
import { APP_ROUTES as ROUTES } from '@app/app.routes';
import { IContextModal } from '@app/core/models/modal.model';
import { AppFacade } from '@app/facades/app.facade';
import { Chapter1Facade } from '@app/facades/chapter-1.facade';
import { UtilService } from '@app/services/util.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'chapter-1-scene-one',
  templateUrl: './scene-one.page.html',
  styleUrls: ['./scene-one.page.scss'],
})
export class SceneOnePage implements OnInit, AfterViewInit {
  @ViewChild('backpackChapter1', { static: true })
  backpackChapter1!: TemplateRef<IContextModal>;
  @ViewChild('scenesList', { static: true })
  scenesList!: TemplateRef<IContextModal>;
  @ViewChild('cap1Esc1Narrator') audioPlayer: ElementRef;

  public CONST = CONST;
  public turtleName: string = '';
  public placeholderText: string = 'Ingresa el nombre aquí';
  public isButtonDisabled: boolean = true;
  public currentRoute: string = '';

  public chapterTwoFinished$: Observable<boolean>;
  public chapterThreeFinished$: Observable<boolean>;
  public chapterFourFinished$: Observable<boolean>;

  constructor(
    private _renderer: Renderer2,
    private _utilService: UtilService,
    private _appFacade: AppFacade,
    private _chapter1Facade: Chapter1Facade
  ) {}

  ngOnInit(): void {
    this.currentRoute = this._utilService.getCurrentRoute();
    this.chapterTwoFinished$ = this._appFacade.isChapterTwoFinished$;
    this.chapterThreeFinished$ = this._appFacade.isChapterThreeFinished$;
    this.chapterFourFinished$ = this._appFacade.isChapterFourFinished$;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.playAudio();
    }, 3500);
  }

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

  public onGoToNextPage(): void {}
  public onGoToPreviousPage(): void {}
  public onGoToConfiguration() {}
  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_1_SCENE_1);
  }

  public onGoToBackpack(): void {
    this._appFacade.openModal(this.backpackChapter1);
  }

  public onCloseBackpack(): void {
    this._appFacade.closeModal();
  }

  public onOpenScenesList(): void {
    this._appFacade.openModal(this.scenesList);
  }

  public onCloseScenesList(): void {
    this._appFacade.closeModal();
  }
}
