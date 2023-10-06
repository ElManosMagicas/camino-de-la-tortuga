import { Injectable } from '@angular/core';
import { IModalConfig } from '@app/core/models/modal.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _modalConfig!: BehaviorSubject<IModalConfig>;
  public modalConfig$: Observable<IModalConfig>;

  constructor() {
    this._modalConfig = new BehaviorSubject<IModalConfig>({} as IModalConfig);
    this.modalConfig$ = this._modalConfig.asObservable();
  }

  public set setModalConfig(modalConfig: IModalConfig) {
    this._modalConfig.next(modalConfig);
  }
}
