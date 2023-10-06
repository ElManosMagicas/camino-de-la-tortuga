import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UtilService } from '@app/services/util.service';

@Component({
  selector: 'success-activity-chapter-two',
  templateUrl: './success-activity-chapter-two.component.html',
  styleUrls: ['./success-activity-chapter-two.component.scss'],
})
export class SuccessActivityChapterTwoComponent implements OnInit {
  @Input() turtleName: string;

  @Output() goToMapEvent = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  public onGoToMap(): void {
    this.goToMapEvent.emit();
  }
}
