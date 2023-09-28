import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APP_ROUTES as ROUTES } from '@app/app.routes';
import { AppFacade } from '@app/facades/app.facade';
import { UtilService } from '@app/services/util.service';

@Component({
  selector: 'chapter-1-scene-one',
  templateUrl: './scene-one.page.html',
  styleUrls: ['./scene-one.page.scss'],
})
export class SceneOnePage implements OnInit {
  public turtleName: string = '';
  public placeholderText: string = 'Ingresa el nombre aquí';
  public isButtonDisabled: boolean = true;

  constructor(
    private _utilService: UtilService,
    private _appFacade: AppFacade
  ) {}

  ngOnInit(): void {}

  public onInputChange(): void {
    this.isButtonDisabled = this.turtleName.trim() === '';
  }

  public onClearPlaceholder(): void {
    this.turtleName = '';
  }

  public onSubmit(): void {
    if (this.turtleName.trim() !== '') {
      this._appFacade.setTurtleName(this.turtleName);
      this._utilService.navigateTo(ROUTES.CHAPTER_1_SCENE_2);
    }
  }
}
