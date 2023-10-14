import { Component, Input } from '@angular/core';

@Component({
  selector: 'layout-subtitles',
  templateUrl: './subtitles.component.html',
  styleUrls: ['./subtitles.component.scss'],
})
export class SubtitlesComponent {
  @Input() subtitles: string;
}
