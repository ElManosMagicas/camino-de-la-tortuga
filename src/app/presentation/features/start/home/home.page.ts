import { Component } from '@angular/core';
import { APP_ROUTES } from '@app/app.routes';
import { UtilService } from '@app/services/util.service';

@Component({
  selector: 'start-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  public ROUTES = APP_ROUTES;

  constructor(private _utilService: UtilService) {}

  public onGoToInstructions(): void {
    this._utilService.navigateTo(this.ROUTES.INSTRUCTIONS);
  }

  public onGoToConfiguration(): void {
    this._utilService.navigateTo(this.ROUTES.CONFIGURATION);
  }

  public onGoToCredits(): void {
    this._utilService.navigateTo(this.ROUTES.CREDITS);
  }

  public onGoToChapterOne(): void {
    this._utilService.navigateTo(this.ROUTES.CHAPTER_1);
  }
}
