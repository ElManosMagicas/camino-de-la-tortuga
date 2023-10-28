import { Component, TemplateRef, ViewChild } from '@angular/core';
import { APP_ROUTES } from '@app/app.routes';
import { IContextModal } from '@app/core/models/modal.model';
import { AppFacade } from '@app/facades/app.facade';
import { Chapter1Facade } from '@app/facades/chapter-1.facade';
import { UtilService } from '@app/services/util.service';

@Component({
  selector: 'start-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  @ViewChild('credits', { static: true })
  credits!: TemplateRef<IContextModal>;
  public ROUTES = APP_ROUTES;

  constructor(
    private _utilService: UtilService,
    private _appFacade: AppFacade,
    private _chapter1Facade: Chapter1Facade
  ) {}

  public onGoToInstructions(): void {
    this._utilService.navigateTo(this.ROUTES.INSTRUCTIONS);
  }

  public onGoToConfiguration(): void {
    this._utilService.navigateTo(this.ROUTES.CONFIGURATION);
  }

  public onGoToCredits(): void {
    this._appFacade.openModal(this.credits);
  }

  public onCloseCredits(): void {
    this._appFacade.closeModal();
  }

  public onGoToChapterOne(): void {
    this._chapter1Facade.goToNextStep();
    this._utilService.navigateTo(this.ROUTES.CHAPTER_1);
  }
}
