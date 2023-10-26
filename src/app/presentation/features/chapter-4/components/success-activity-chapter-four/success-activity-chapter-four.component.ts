import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'success-activity-chapter-four',
  templateUrl: './success-activity-chapter-four.component.html',
  styleUrls: ['./success-activity-chapter-four.component.scss'],
})
export class SuccessActivityChapterFourComponent implements OnInit {
  @Input() turtleName: string;

  @Output() goToMapEvent = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  public onGoToMap(): void {
    this.goToMapEvent.emit();
  }
}
