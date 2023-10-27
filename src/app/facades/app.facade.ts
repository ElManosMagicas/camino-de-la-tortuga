import { Injectable, TemplateRef } from '@angular/core';
import { Store } from '@ngrx/store';
import * as appSelectors from '@store/app/app.selectors';
import * as appActions from '@store/app/app.actions';
import { Observable } from 'rxjs';
import { IContextModal, IModalConfig } from '@app/core/models/modal.model';
import { ModalService } from '@app/domain/services/modal/modal.service';

@Injectable({ providedIn: 'root' })
export class AppFacade {
  public turtleName$: Observable<string>;
  public modalShow$: Observable<boolean>;
  public isChapterOneFinished$: Observable<boolean>;
  public isChapterTwoFinished$: Observable<boolean>;
  public isChapterThreeFinished$: Observable<boolean>;
  public isChapterFourFinished$: Observable<boolean>;
  public isChapterFiveFinished$: Observable<boolean>;

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
}
