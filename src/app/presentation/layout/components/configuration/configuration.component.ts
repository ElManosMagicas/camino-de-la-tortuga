import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ECONFIGURATION } from '@app/core/enums/configuration.enum';

@Component({
  selector: 'layout-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
})
export class ConfigurationComponent {
  @Input() isToggled: boolean;
  @Output() closeConfigEvent = new EventEmitter<void>();
  @Output() toggleEvent = new EventEmitter<{
    identifier: string;
    isToggled: boolean;
  }>();

  public ECONFIGURATION = ECONFIGURATION;

  public onClose(): void {
    this.closeConfigEvent.emit();
  }

  public onToggle(eventData: { identifier: string; isToggled: boolean }) {
    // Receive the event from the grandchild component and re-emit it to the parent component.
    this.toggleEvent.emit(eventData);
  }
}
