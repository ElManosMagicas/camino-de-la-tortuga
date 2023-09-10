import { Component, OnInit } from '@angular/core';
import { INSTRUCTIONS_SLIDER_CONSTANTS } from '../../constants/instructions-slider.constants';
import { APP_ROUTES as ROUTES } from '@app/app.routes';
import { UtilService } from '@app/services/util.service';

@Component({
  selector: 'instructions-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  public SLIDER_CONST = INSTRUCTIONS_SLIDER_CONSTANTS;
  public ROUTES = ROUTES;
  public currentSlide;
  public currentSlideIndex: number = 0;

  constructor(private _utilService: UtilService) {}

  ngOnInit(): void {
    this.currentSlide = this.SLIDER_CONST[this.currentSlideIndex];
  }

  public onPreviousSlide(): void {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
      this.currentSlide = this.SLIDER_CONST[this.currentSlideIndex];
    }
  }

  public onNextSlide(): void {
    if (this.currentSlideIndex < this.SLIDER_CONST.length - 1) {
      this.currentSlideIndex++;
      this.currentSlide = this.SLIDER_CONST[this.currentSlideIndex];
    }
  }

  public onGoToHome(): void {
    this._utilService.navigateTo(this.ROUTES.START);
  }
}
