import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'layout-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss'],
})
export class CreditsComponent {
  @Output() closeCreditsEvent = new EventEmitter<void>();

  public onClose(): void {
    this.closeCreditsEvent.emit();
  }
}
