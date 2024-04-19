import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'layout-rotate-device',
  templateUrl: './rotate-device.component.html',
  styleUrls: ['./rotate-device.component.scss'],
})
export class RotateDeviceComponent implements OnInit {
  @Output() closeRotateDeviceEvent = new EventEmitter<void>();

  ngOnInit(): void {}

  public onClose(): void {
    this.closeRotateDeviceEvent.emit();
  }
}
