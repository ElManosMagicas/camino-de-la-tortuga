import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'layout-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
})
export class ToggleButtonComponent {
  @Input() identifier: string;
  @Input() isToggled: boolean;
  @Output() toggleEvent = new EventEmitter<{
    identifier: string;
    isToggled: boolean;
  }>();

  public onToggle() {
    this.isToggled = !this.isToggled;
    this.toggleEvent.emit({
      identifier: this.identifier,
      isToggled: this.isToggled,
    });
  }
}
