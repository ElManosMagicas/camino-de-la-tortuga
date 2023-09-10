import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-bar',
  templateUrl: './layout-bar.component.html',
  styleUrls: ['./layout-bar.component.scss'],
})
export class LayoutBarComponent implements OnInit {
  public toggleControls: boolean = false;

  ngOnInit(): void {}

  public onToggleControls(): void {
    this.toggleControls = !this.toggleControls;
  }
}
