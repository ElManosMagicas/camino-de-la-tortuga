import { Component, OnInit } from '@angular/core';
import { IModalConfig } from '@app/core/models/modal.model';
import { ModalService } from '@app/domain/services/modal/modal.service';
import { AppFacade } from '@app/facades/app.facade';
import { Observable, combineLatest, map } from 'rxjs';

@Component({
  selector: 'layout-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  public modalConfig$: Observable<IModalConfig>;
  public onCloseStylesAnimationInProgress: boolean = false;

  constructor(
    private _appFacade: AppFacade,
    private _modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.modalConfig$ = combineLatest([
      this._appFacade.modalShow$,
      this._modalService.modalConfig$,
    ]).pipe(
      map(([show, modalConfig]: [boolean, IModalConfig]) => {
        return {
          ...modalConfig,
          show,
        };
      })
    );
  }
}
