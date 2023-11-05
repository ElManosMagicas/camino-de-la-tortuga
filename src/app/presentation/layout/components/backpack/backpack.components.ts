import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'layout-backpack',
  templateUrl: './backpack.components.html',
  styleUrls: ['./backpack.components.scss'],
})
export class BackpackComponents implements OnInit {
  @Input() food: boolean;
  @Input() river: boolean;
  @Input() sun: boolean;
  @Output() closeBackpackEvent = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  public onClose(): void {
    this.closeBackpackEvent.emit();
  }
}
