import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LABELS_MAPPING } from '@app/domain/services/labels/labels.map';

@Component({
  selector: 'layout-bar',
  templateUrl: './layout-bar.component.html',
  styleUrls: ['./layout-bar.component.scss'],
})
export class LayoutBarComponent implements OnInit {
  @Input() currentRoute: string;

  @Output() goToNextPageEvent = new EventEmitter<boolean>();
  @Output() goToPreviousPageEvent = new EventEmitter<boolean>();
  @Output() goToConfigurationEvent = new EventEmitter<boolean>();
  @Output() goToBackpackEvent = new EventEmitter<boolean>();
  @Output() repeatSceneEvent = new EventEmitter<boolean>();

  public toggleControls: boolean = false;
  public sceneListLabel: string = '';
  private _mouseOverControls: boolean = false;
  private _hideControlsTimeout: any;

  ngOnInit(): void {
    this.sceneListLabel = LABELS_MAPPING[this.currentRoute];
  }

  private _hideAfterFourSeconds() {
    this._hideControlsTimeout = setTimeout(() => {
      if (!this._mouseOverControls) {
        this.toggleControls = false;
      }
    }, 4000);
  }

  public onToggleControls(): void {
    this.toggleControls = !this.toggleControls;
    if (!this.toggleControls) {
      clearTimeout(this._hideControlsTimeout);
    }
    this._hideAfterFourSeconds();
  }

  public onMouseEnterControls(): void {
    this._mouseOverControls = true;
  }

  public onMouseLeaveControls(): void {
    this._mouseOverControls = false;
    this._hideAfterFourSeconds();
  }

  public onGoToNextPage(): void {
    this.goToNextPageEvent.emit(true);
  }

  public onGoToPreviousPage(): void {
    this.goToPreviousPageEvent.emit(true);
  }

  public onGoToConfiguration(): void {
    this.goToConfigurationEvent.emit(true);
  }

  public onGoToBackpack(): void {
    this.goToBackpackEvent.emit(true);
  }

  public onRepeatScene(): void {
    this.repeatSceneEvent.emit(true);
  }
}
