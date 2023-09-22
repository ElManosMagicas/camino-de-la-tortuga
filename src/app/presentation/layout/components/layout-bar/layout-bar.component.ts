import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-bar',
  templateUrl: './layout-bar.component.html',
  styleUrls: ['./layout-bar.component.scss'],
})
export class LayoutBarComponent implements OnInit {
  public toggleControls: boolean = false;

  private _mouseOverControls: boolean = false;
  private _hideControlsTimeout: any;

  ngOnInit(): void {}

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
}
