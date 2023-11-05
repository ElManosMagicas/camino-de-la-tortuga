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
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';

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

  public audioPlaying: boolean = false;

  public isSubtitles$: Observable<boolean>;
  public isSound$: Observable<boolean>;

  public isSoundSubscription$: Subscription;
  public destroy$: Subject<void> = new Subject<void>();

  constructor(
    private _utilService: UtilService,
    private _appFacade: AppFacade,
    private _chapter1Facade: Chapter1Facade
  ) {}
  ngOnInit(): void {
    this.isSubtitles$ = this._appFacade.isSubtitles$;
    this.isSound$ = this._appFacade.isSound$;
  }

  ngAfterViewInit(): void {
    this.isSoundSubscription$ = this.isSound$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isSound) => {
        if (isSound) {
          setTimeout(() => {
            this.playAudio();
          }, 1000);
        } else {
          this.stopAudio();
        }
      });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the observable to prevent memory leaks
    this.destroy$.next();
    this.destroy$.complete();
    this.isSoundSubscription$?.unsubscribe();
  }

  public playAudio() {
    if (!this.audioPlaying) {
      const audioElement = this.audioPlayer.nativeElement;
      audioElement.play();
      this.audioPlaying = true;
    }
  }

  public stopAudio() {
    if (this.audioPlaying) {
      const audioElement = this.audioPlayer.nativeElement;
      audioElement.pause();
      audioElement.currentTime = 0;
      this.audioPlaying = false;
    }
  }

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
}
