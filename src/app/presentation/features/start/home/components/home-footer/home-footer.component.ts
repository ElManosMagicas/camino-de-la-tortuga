import { Component, EventEmitter, Output } from '@angular/core';
import { APP_ROUTES as ROUTES } from '@app/app.routes';

@Component({
  selector: 'home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.scss'],
})
export class HomeFooterComponent {
  public ROUTES = ROUTES;
  @Output() goToInstructionsEvent = new EventEmitter<boolean>();
  @Output() goToConfigurationEvent = new EventEmitter<boolean>();
  @Output() goToCreditsEvent = new EventEmitter<boolean>();
  @Output() goToChapterOneEvent = new EventEmitter<boolean>();

  constructor() {}

  public onGoToReadBook() {
    this.goToChapterOneEvent.emit(true);
  }

  public onGoToInstructions() {
    this.goToInstructionsEvent.emit(true);
  }

  public onGoToConfiguration() {
    this.goToConfigurationEvent.emit(true);
  }

  public onGoToCredits() {
    this.goToCreditsEvent.emit(true);
  }
}
