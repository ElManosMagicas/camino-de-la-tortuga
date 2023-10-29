import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SCENES_LIST_CONTENT as LIST } from '../../constants/scenes-list.constants';
import { ESCENES_LIST } from '@app/core/enums/scenes-list.enum';
import { UtilService } from '@app/services/util.service';
import { AppFacade } from '@app/facades/app.facade';

@Component({
  selector: 'layout-scenes-list',
  templateUrl: './scenes-list.component.html',
  styleUrls: ['./scenes-list.component.scss'],
})
export class ScenesListComponent implements OnInit {
  @Output() closeScenesListEvent = new EventEmitter<void>();

  public scenesLists = LIST;
  public ESCENES_LIST = ESCENES_LIST;

  constructor(
    private _utilService: UtilService,
    private _appFacade: AppFacade
  ) {}

  ngOnInit(): void {}

  public onGoTo(path: string, type: string) {
    switch (type) {
      case ESCENES_LIST.SCENE:
        this._appFacade.closeModal();
        return this._utilService.navigateTo(path);
      case ESCENES_LIST.CHAPTER:
        this._appFacade.closeModal();
        return false;
    }
  }

  public onClose(): void {
    this.closeScenesListEvent.emit();
  }
}
