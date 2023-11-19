import { Location } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { AppInitializerService } from '@app/services/app-initializer.service';
import { UtilService } from '@app/services/util.service';
import { APP_ROUTES as ROUTES } from '@app/app.routes';

@Component({
  selector: 'rotate-device',
  templateUrl: './rotate-device.page.html',
  styleUrls: ['./rotate-device.page.scss'],
})
export class RotateDevicePage implements OnInit, AfterViewInit, OnDestroy {
  public isPortrait: boolean;
  public screenOrientation: OrientationType;

  constructor(
    private _location: Location,
    private _appInitializer: AppInitializerService,
    private _utilService: UtilService
  ) {}

  ngOnInit(): void {
    // window.addEventListener('orientationchange', this.handleOrientationChange);
  }

  ngAfterViewInit(): void {
    this.screenOrientation = screen.orientation.type;
  }

  ngOnDestroy(): void {
    // window.removeEventListener(
    //   'orientationchange',
    //   this.handleOrientationChange
    // );
  }

  public onReload(): void {
    this._location.back();
  }

  // public handleOrientationChange = () => {
  //   const currentOrientation = screen.orientation.type;
  //   if (
  //     currentOrientation === 'portrait-primary' ||
  //     currentOrientation === 'portrait-secondary'
  //   ) {
  //     this._utilService.navigateTo(ROUTES.ROTATE_DEVICE);
  //   } else {
  //     console.log(currentOrientation);
  //   }
  // };
}
