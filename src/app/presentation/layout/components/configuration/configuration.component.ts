import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ECONFIGURATION } from '@app/core/enums/configuration.enum';

@Component({
  selector: 'layout-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
})
export class ConfigurationComponent implements OnInit {
  @Input() isSoundToggled: boolean;
  @Input() isSubtitlesToggled: boolean;
  @Output() closeConfigEvent = new EventEmitter<void>();
  @Output() soundToggleEvent = new EventEmitter<boolean>();
  @Output() subtitlesToggleEvent = new EventEmitter<boolean>();

  public ECONFIGURATION = ECONFIGURATION;

  ngOnInit(): void {}

  public onClose(): void {
    this.closeConfigEvent.emit();
  }

  public onSoundToggle(event: boolean) {
    this.soundToggleEvent.emit(event);
  }

  public onSubtitlesToggle(event: boolean) {
    this.subtitlesToggleEvent.emit(event);
  }
}
