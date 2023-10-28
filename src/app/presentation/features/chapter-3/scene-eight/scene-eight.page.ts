import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { APP_CONSTANTS as CONST } from '@app/app.constants';
import { APP_ROUTES as ROUTES } from '@app/app.routes';
import { EBACKPACK } from '@app/core/enums/chapter-2-scene-6.enum';
import { ILastChapterFinished } from '@app/core/models/finished-chapter.model';
import { IContextModal } from '@app/core/models/modal.model';
import { AppFacade } from '@app/facades/app.facade';
import { Chapter3Facade } from '@app/facades/chapter-3.facade';
import { UtilService } from '@app/services/util.service';
import { Observable, Subscription, combineLatest } from 'rxjs';

@Component({
  selector: 'chapter-3-scene-eight',
  templateUrl: './scene-eight.page.html',
  styleUrls: ['./scene-eight.page.scss'],
})
export class SceneEightPage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('successChapter3Activity', { static: true })
  successChapter3Activity!: TemplateRef<IContextModal>;
  @ViewChild('cap3Esc8Narrator')
  audioPlayer: ElementRef;

  public CONST = CONST;
  public EBACKPACK = EBACKPACK;
  public currentRoute: string = '';
  public showNextButton: boolean = false;
  public showPreviousButton: boolean = true;
  public divClicked: boolean[] = [false, false, false, false];
  public pieceOneClicked: boolean[] = [false, true, false, false];

  public turtleName$: Observable<string>;
  public pieceOne$: Observable<boolean>;
  public pieceTwo$: Observable<boolean>;
  public pieceThree$: Observable<boolean>;
  public pieceFour$: Observable<boolean>;
  public pieceFive$: Observable<boolean>;
  public pieceSix$: Observable<boolean>;
  public backpack$: Observable<number>;

  public combinedPiecesSubscription$: Subscription;
  public backpackSubscription$: Subscription;

  public currentBackgroundClassPiece1: string = 'pos4';
  public currentBackgroundClassPiece2: string = 'pos3';
  public currentBackgroundClassPiece3: string = 'pos3';
  public currentBackgroundClassPiece4: string = 'pos2';
  public currentBackgroundClassPiece5: string = 'pos4';
  public currentBackgroundClassPiece6: string = 'pos3';

  public isPieceOne: boolean = false;
  public isPieceTwo: boolean = false;
  public isPieceThree: boolean = false;
  public isPieceFour: boolean = false;
  public isPieceFive: boolean = false;
  public isPieceSix: boolean = false;

  public backgroundsPiece1: string[] = ['pos1', 'pos2', 'pos3', 'pos4'];
  public backgroundsPiece2: string[] = ['pos1', 'pos2', 'pos3', 'pos4'];
  public backgroundsPiece3: string[] = ['pos1', 'pos2', 'pos3', 'pos4'];
  public backgroundsPiece4: string[] = ['pos1', 'pos2', 'pos3', 'pos4'];
  public backgroundsPiece5: string[] = ['pos1', 'pos2', 'pos3', 'pos4'];
  public backgroundsPiece6: string[] = ['pos1', 'pos2', 'pos3', 'pos4'];

  constructor(
    private _renderer: Renderer2,
    private _appFacade: AppFacade,
    private _chapter3Facade: Chapter3Facade,
    private _utilService: UtilService
  ) {}

  ngOnInit(): void {
    this._setValues();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.playAudio();
    }, 1000);
  }

  ngOnDestroy(): void {
    this.backpackSubscription$?.unsubscribe();
  }

  private _setValues() {
    this.turtleName$ = this._appFacade.turtleName$;
    this.pieceOne$ = this._chapter3Facade.pieceOne$;
    this.pieceTwo$ = this._chapter3Facade.pieceTwo$;
    this.pieceThree$ = this._chapter3Facade.pieceThree$;
    this.pieceFour$ = this._chapter3Facade.pieceFour$;
    this.pieceFive$ = this._chapter3Facade.pieceFive$;
    this.pieceSix$ = this._chapter3Facade.pieceSix$;
    const combinedPiecesObservable$ = combineLatest(
      this.pieceOne$,
      this.pieceTwo$,
      this.pieceThree$,
      this.pieceFour$,
      this.pieceFive$,
      this.pieceSix$
    );
    this.combinedPiecesSubscription$ = combinedPiecesObservable$.subscribe(
      ([pieceOne, pieceTwo, pieceThree, pieceFour, pieceFive, pieceSix]) => {
        if (
          pieceOne &&
          pieceTwo &&
          pieceThree &&
          pieceFour &&
          pieceFive &&
          pieceSix
        ) {
          this._appFacade.openModal(this.successChapter3Activity);
        }
      }
    );
    this.currentRoute = this._utilService.getCurrentRoute();
    // this.backpack$ = this._chapter2Facade.backpack$;
    // this.backpackSubscription$ = this.backpack$.subscribe((score) => {
    //   score === EBACKPACK.STATE_5
    //     ? this._appFacade.openModal(this.successChapter2Activity)
    //     : false;
    // });
  }

  public playAudio() {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (audioElement.paused) {
      audioElement.play();
    }
  }

  public onGoToNextPage(): void {
    this._utilService.navigateTo(ROUTES.CHAPTER_4_SCENE_1);
  }
  public onGoToPreviousPage(): void {
    this._chapter3Facade.goToPreviousStep();
    this._utilService.navigateTo(ROUTES.CHAPTER_3_SCENE_7);
  }
  public onGoToConfiguration() {}
  public onGoToBackpack() {}
  public onRepeatScene() {
    this._utilService.redirectToUrl(ROUTES.CHAPTER_3_SCENE_7);
  }

  public onIncreaseBackpackScore(index: number) {
    this.divClicked[index] = true;
    // this._chapter2Facade.increaseBackpackScore();
  }

  public onGoToMap() {
    const lastChapterFinished: ILastChapterFinished = {
      chapter1: false,
      chapter2: false,
      chapter3: true,
      chapter4: false,
      chapter5: false,
    };
    this._appFacade.setLastChapterFinished(lastChapterFinished);
    this.divClicked = [false, false, false, false];
    // this._chapter3Facade.resetBackpackScore();
    this._appFacade.closeModal();
    this._appFacade.finishChapterThree();
    this._utilService.navigateTo(ROUTES.MAP);
  }

  public onToggleBackgroundPiece1() {
    const currentIndex = this.backgroundsPiece1.indexOf(
      this.currentBackgroundClassPiece1
    );
    if (
      currentIndex === -1 ||
      currentIndex === this.backgroundsPiece1.length - 1
    ) {
      this.currentBackgroundClassPiece1 = 'pos1';
      this.isPieceOne = true;
      this._chapter3Facade.setPieceOne(this.isPieceOne);
    } else {
      this.currentBackgroundClassPiece1 =
        this.backgroundsPiece1[currentIndex + 1];
      this.isPieceOne = false;
      this._chapter3Facade.setPieceOne(this.isPieceOne);
    }
  }

  public onToggleBackgroundPiece2() {
    const currentIndex = this.backgroundsPiece2.indexOf(
      this.currentBackgroundClassPiece2
    );
    if (
      currentIndex === -1 ||
      currentIndex === this.backgroundsPiece2.length - 1
    ) {
      this.currentBackgroundClassPiece2 = 'pos1';
      this.isPieceTwo = true;
      this._chapter3Facade.setPieceTwo(this.isPieceTwo);
    } else {
      this.currentBackgroundClassPiece2 =
        this.backgroundsPiece2[currentIndex + 1];
      this.isPieceTwo = false;
      this._chapter3Facade.setPieceTwo(this.isPieceTwo);
    }
  }

  public onToggleBackgroundPiece3() {
    const currentIndex = this.backgroundsPiece3.indexOf(
      this.currentBackgroundClassPiece3
    );
    if (
      currentIndex === -1 ||
      currentIndex === this.backgroundsPiece3.length - 1
    ) {
      this.currentBackgroundClassPiece3 = 'pos1';
      this.isPieceThree = true;
      this._chapter3Facade.setPieceThree(this.isPieceThree);
    } else {
      this.currentBackgroundClassPiece3 =
        this.backgroundsPiece3[currentIndex + 1];
      this.isPieceThree = false;
      this._chapter3Facade.setPieceThree(this.isPieceThree);
    }
  }

  public onToggleBackgroundPiece4() {
    const currentIndex = this.backgroundsPiece4.indexOf(
      this.currentBackgroundClassPiece4
    );
    if (
      currentIndex === -1 ||
      currentIndex === this.backgroundsPiece4.length - 1
    ) {
      this.currentBackgroundClassPiece4 = 'pos1';
      this.isPieceFour = true;
      this._chapter3Facade.setPieceFour(this.isPieceFour);
    } else {
      this.currentBackgroundClassPiece4 =
        this.backgroundsPiece4[currentIndex + 1];
      this.isPieceFour = false;
      this._chapter3Facade.setPieceFour(this.isPieceFour);
    }
  }

  public onToggleBackgroundPiece5() {
    const currentIndex = this.backgroundsPiece5.indexOf(
      this.currentBackgroundClassPiece5
    );
    if (
      currentIndex === -1 ||
      currentIndex === this.backgroundsPiece5.length - 1
    ) {
      this.currentBackgroundClassPiece5 = 'pos1';
      this.isPieceFive = true;
      this._chapter3Facade.setPieceFive(this.isPieceFive);
    } else {
      this.currentBackgroundClassPiece5 =
        this.backgroundsPiece5[currentIndex + 1];
      this.isPieceFive = false;
      this._chapter3Facade.setPieceFive(this.isPieceFive);
    }
  }

  public onToggleBackgroundPiece6() {
    const currentIndex = this.backgroundsPiece6.indexOf(
      this.currentBackgroundClassPiece6
    );
    if (
      currentIndex === -1 ||
      currentIndex === this.backgroundsPiece6.length - 1
    ) {
      this.currentBackgroundClassPiece6 = 'pos1';
      this.isPieceSix = true;
      this._chapter3Facade.setPieceSix(this.isPieceSix);
    } else {
      this.currentBackgroundClassPiece6 =
        this.backgroundsPiece6[currentIndex + 1];
      this.isPieceSix = false;
      this._chapter3Facade.setPieceSix(this.isPieceSix);
    }
  }
}
