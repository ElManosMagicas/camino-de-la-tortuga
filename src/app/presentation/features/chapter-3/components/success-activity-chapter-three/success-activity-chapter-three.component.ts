import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'success-activity-chapter-three',
  templateUrl: './success-activity-chapter-three.component.html',
  styleUrls: ['./success-activity-chapter-three.component.scss'],
})
export class SuccessActivityChapterThreeComponent implements OnInit {
  @Input() turtleName: string;

  @Output() goToMapEvent = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  public onGoToMap(): void {
    this.goToMapEvent.emit();
  }
}
