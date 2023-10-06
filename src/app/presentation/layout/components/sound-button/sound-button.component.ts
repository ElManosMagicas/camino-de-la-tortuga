import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'layout-sound-button',
  templateUrl: './sound-button.component.html',
  styleUrls: ['./sound-button.component.scss'],
})
export class SoundButtonComponent implements OnInit {
  @Output() soundEvent = new EventEmitter<void>();

  public isClicked: boolean;

  ngOnInit(): void {}

  public onPlaySound() {
    this.isClicked = true;
    this.soundEvent.emit();
  }
}
