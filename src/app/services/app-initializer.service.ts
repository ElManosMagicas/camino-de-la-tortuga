import { Injectable } from '@angular/core';
import { APP_ROUTES as ROUTES } from '@app/app.routes';
import { UtilService } from './util.service';
import { AppFacade } from '@app/facades/app.facade';

@Injectable({
  providedIn: 'root',
})
export class AppInitializerService {
  constructor(
    private _utilService: UtilService,
    private _appFacade: AppFacade
  ) {}

  initializeApp(): () => Promise<void> {
    return () => {
      return new Promise<void>((resolve) => {
        this._appFacade.setIsLoadingOrientation(true);
        const initialOrientation = screen.orientation.type;
        if (
          initialOrientation === 'portrait-primary' ||
          initialOrientation === 'portrait-secondary'
        ) {
          setTimeout(() => {
            this._appFacade.setIsLoadingOrientation(false);
            this._appFacade.setIsPortrait(true);
            this._appFacade.setIsLandscape(false);
          }, 2000);
        }
        if (
          initialOrientation === 'landscape-primary' ||
          initialOrientation === 'landscape-secondary'
        ) {
          setTimeout(() => {
            this._appFacade.setIsLoadingOrientation(false);
            this._appFacade.setIsPortrait(false);
            this._appFacade.setIsLandscape(true);
          }, 2000);
        }
        resolve();
      });
    };
  }
}
