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

  constructor(private _store: Store, private _modalService: ModalService) {
    this.turtleName$ = this._store.select(appSelectors.selectTurtleName);
    this.modalShow$ = this._store.select(appSelectors.selectModalShow);
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
}
