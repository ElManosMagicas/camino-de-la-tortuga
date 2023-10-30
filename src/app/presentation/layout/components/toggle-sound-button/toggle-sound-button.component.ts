import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'layout-toggle-sound-button',
  templateUrl: './toggle-sound-button.component.html',
  styleUrls: ['./toggle-sound-button.component.scss'],
})
export class ToggleSoundButtonComponent implements OnInit {
  @Input() isSoundToggled: boolean;
  @Output() soundToggleEvent = new EventEmitter<boolean>();

  ngOnInit(): void {}

  public onToggle() {
    this.isSoundToggled = !this.isSoundToggled;
    this.soundToggleEvent.emit(this.isSoundToggled);
  }
}
