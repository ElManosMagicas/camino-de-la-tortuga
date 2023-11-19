import { Injectable } from '@angular/core';
import { APP_ROUTES as ROUTES } from '@app/app.routes';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root',
})
export class AppInitializerService {
  constructor(private _utilService: UtilService) {}

  initializeApp(): () => Promise<void> {
    return () => {
      return new Promise<void>((resolve) => {
        const initialOrientation = screen.orientation.type;
        if (
          initialOrientation === 'portrait-primary' ||
          initialOrientation === 'portrait-secondary'
        ) {
          this._utilService.navigateTo(ROUTES.ROTATE_DEVICE);
        }
        resolve();
      });
    };
  }
}
