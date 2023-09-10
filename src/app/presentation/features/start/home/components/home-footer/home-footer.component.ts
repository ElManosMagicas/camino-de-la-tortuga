import { Component } from '@angular/core';
import { APP_ROUTES as ROUTES } from '@app/app.routes';
import { UtilService } from '@app/services/util.service';

@Component({
  selector: 'home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.scss'],
})
export class HomeFooterComponent {
  public ROUTES = ROUTES;

  constructor(private _utilService: UtilService) {}

  public onGoToReadBook() {}

  public onGoToInstructions() {
    this._utilService.navigateTo(this.ROUTES.INSTRUCTIONS);
  }

  public onGoToConfiguration() {
    this._utilService.navigateTo(this.ROUTES.CONFIGURATION);
  }

  public onGoToCredits() {
    this._utilService.navigateTo(this.ROUTES.CREDITS);
  }
}
