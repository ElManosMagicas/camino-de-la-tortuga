import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'layout-toggle-subtitles-button',
  templateUrl: './toggle-subtitles-button.component.html',
  styleUrls: ['./toggle-subtitles-button.component.scss'],
})
export class ToggleSubtitlesButtonComponent implements OnInit {
  @Input() isSubtitlesToggled: boolean;
  @Output() subtitlesToggleEvent = new EventEmitter<boolean>();

  ngOnInit(): void {}

  public onToggle() {
    this.isSubtitlesToggled = !this.isSubtitlesToggled;
    this.subtitlesToggleEvent.emit(this.isSubtitlesToggled);
  }
}
