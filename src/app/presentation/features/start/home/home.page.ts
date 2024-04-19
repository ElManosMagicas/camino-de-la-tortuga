import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { APP_ROUTES } from '@app/app.routes';
import { APP_CONSTANTS as CONST } from '@app/app.constants';
import { IContextModal } from '@app/core/models/modal.model';
import { AppFacade } from '@app/facades/app.facade';
import { Chapter1Facade } from '@app/facades/chapter-1.facade';
import { UtilService } from '@app/services/util.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'start-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  @ViewChild('credits', { static: true })
  credits!: TemplateRef<IContextModal>;
  @ViewChild('config', { static: true })
  config!: TemplateRef<IContextModal>;
  @ViewChild('homeBgMusic') audioPlayer: ElementRef<HTMLAudioElement>;

  public ROUTES = APP_ROUTES;
  public CONST = CONST;
  public orientationCounter: number = 0;

  public isSubtitles$: Observable<boolean>;
  public isLoadingOrientation$: Observable<boolean>;
  public isPortrait$: Observable<boolean>;
  public isLandscape$: Observable<boolean>;

  constructor(
    private _utilService: UtilService,
    private _appFacade: AppFacade,
    private _chapter1Facade: Chapter1Facade
  ) {}
  ngOnInit(): void {
    this.isSubtitles$ = this._appFacade.isSubtitles$;
    this.isLoadingOrientation$ = this._appFacade.isLoadingOrientation$;
    this.isPortrait$ = this._appFacade.isPortrait$;
    this.isLandscape$ = this._appFacade.isLandscape$;
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {}

  public onGoToInstructions(): void {
    this._utilService.navigateTo(this.ROUTES.INSTRUCTIONS);
  }

  public onGoToConfiguration(): void {
    this._appFacade.openModal(this.config);
  }

  public onCloseConfig(): void {
    this._appFacade.closeModal();
  }

  public onSoundToggle(event: boolean) {
    event ? this._appFacade.activateSound() : this._appFacade.deactivateSound();
  }

  public onSubtitlesToggle(event: boolean) {
    event
      ? this._appFacade.activateSubtitles()
      : this._appFacade.deactivateSubtitles();
  }

  public onGoToCredits(): void {
    this._appFacade.openModal(this.credits);
  }

  public onCloseCredits(): void {
    this._appFacade.closeModal();
  }

  public onGoToChapterOne(): void {
    this._chapter1Facade.goToNextStep();
    this._utilService.navigateTo(this.ROUTES.CHAPTER_1);
  }

  public onReload(): void {}
}
