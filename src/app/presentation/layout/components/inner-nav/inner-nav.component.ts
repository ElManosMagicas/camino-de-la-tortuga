import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'layout-inner-nav',
  templateUrl: './inner-nav.component.html',
  styleUrls: ['./inner-nav.component.scss'],
})
export class InnerNavComponent {
  @Input() showNextButton: boolean;
  @Input() showPreviousButton: boolean;
  @Output() goToNextPageEvent = new EventEmitter<boolean>();
  @Output() goToPreviousPageEvent = new EventEmitter<boolean>();

  public onGoToNextPage(): void {
    this.goToNextPageEvent.emit(true);
  }

  public onGoToPreviousPage(): void {
    this.goToPreviousPageEvent.emit(true);
  }
}
