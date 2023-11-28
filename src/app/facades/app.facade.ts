import { Injectable, TemplateRef } from '@angular/core';
import { Store } from '@ngrx/store';
import * as appSelectors from '@store/app/app.selectors';
import * as appActions from '@store/app/app.actions';
import { Observable } from 'rxjs';
import { IContextModal, IModalConfig } from '@app/core/models/modal.model';
import { ModalService } from '@app/domain/services/modal/modal.service';
import { ILastChapterFinished } from '@app/core/models/finished-chapter.model';

@Injectable({ providedIn: 'root' })
export class AppFacade {
  public turtleName$: Observable<string>;
  public modalShow$: Observable<boolean>;
  public isChapterOneFinished$: Observable<boolean>;
  public isChapterTwoFinished$: Observable<boolean>;
  public isChapterThreeFinished$: Observable<boolean>;
  public isChapterFourFinished$: Observable<boolean>;
  public isChapterFiveFinished$: Observable<boolean>;
  public lastChapterFinished$: Observable<ILastChapterFinished>;
  public isSubtitles$: Observable<boolean>;
  public isSound$: Observable<boolean>;
  public isLoadingOrientation$: Observable<boolean>;
  public isPortrait$: Observable<boolean>;
  public isLandscape$: Observable<boolean>;

  constructor(private _store: Store, private _modalService: ModalService) {
    this.turtleName$ = this._store.select(appSelectors.selectTurtleName);
    this.modalShow$ = this._store.select(appSelectors.selectModalShow);
    this.isChapterOneFinished$ = this._store.select(
      appSelectors.selectChapterOneFinished
    );
    this.isChapterTwoFinished$ = this._store.select(
      appSelectors.selectChapterTwoFinished
    );
    this.isChapterThreeFinished$ = this._store.select(
      appSelectors.selectChapterThreeFinished
    );
    this.isChapterFourFinished$ = this._store.select(
      appSelectors.selectChapterFourFinished
    );
    this.isChapterFiveFinished$ = this._store.select(
      appSelectors.selectChapterFiveFinished
    );
    this.lastChapterFinished$ = this._store.select(
      appSelectors.selectLastChapterFinished
    );
    this.isSubtitles$ = this._store.select(appSelectors.selectSubtitles);
    this.isSound$ = this._store.select(appSelectors.selectSound);
    this.isLoadingOrientation$ = this._store.select(
      appSelectors.selectIsLoadingOrientation
    );
    this.isPortrait$ = this._store.select(appSelectors.selectIsPortrait);
    this.isLandscape$ = this._store.select(appSelectors.selectIsLandscape);
  }

  public setTurtleName(turtleName: string) {
    this._store.dispatch(appActions.setTurtleName({ turtleName: turtleName }));
  }

  public openModal(templateRef: TemplateRef<IContextModal>, data?: any): void {
    const modalConfig: IModalConfig = {
      templateRef,
      show: true,
      data,
    };
    this._modalService.setModalConfig = modalConfig;
    this._store.dispatch(appActions.updateModalShow({ modalShow: true }));
  }

  public closeModal(): void {
    this._modalService.setModalConfig = {} as IModalConfig;
    this._store.dispatch(appActions.updateModalShow({ modalShow: false }));
  }

  public finishChapterOne(): void {
    this._store.dispatch(appActions.finishChapterOne());
  }

  public finishChapterTwo(): void {
    this._store.dispatch(appActions.finishChapterTwo());
  }

  public finishChapterThree(): void {
    this._store.dispatch(appActions.finishChapterThree());
  }

  public finishChapterFour(): void {
    this._store.dispatch(appActions.finishChapterFour());
  }

  public finishChapterFive(): void {
    this._store.dispatch(appActions.finishChapterFive());
  }

  public setLastChapterFinished(
    lastChapterFinished: ILastChapterFinished
  ): void {
    this._store.dispatch(
      appActions.setLastChapterFinished({ lastChapterFinished })
    );
  }

  public activateSubtitles(): void {
    this._store.dispatch(appActions.activateSubtitles());
  }

  public deactivateSubtitles(): void {
    this._store.dispatch(appActions.deactivateSubtitles());
  }

  public activateSound(): void {
    this._store.dispatch(appActions.activateSound());
  }

  public deactivateSound(): void {
    this._store.dispatch(appActions.deactivateSound());
  }

  public setIsLoadingOrientation(isLoadingOrientation: boolean): void {
    this._store.dispatch(
      appActions.setIsLoadingOrientation({ isLoadingOrientation })
    );
  }

  public setIsPortrait(isPortrait: boolean): void {
    this._store.dispatch(appActions.selectIsPortrait({ isPortrait }));
  }

  public setIsLandscape(isLandscape: boolean): void {
    this._store.dispatch(appActions.selectIsLandscape({ isLandscape }));
  }
}
