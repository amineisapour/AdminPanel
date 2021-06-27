import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public direction: string = 'menu';

  constructor() { }

  ngOnInit(): void {
  }

  @Output() sideNavToggle = new EventEmitter();

  toggle() {
    this.sideNavToggle.emit();
  }

  mouseEnter() {
    this.direction = 'menu_open';
  }

  mouseLeave() {
    this.direction = 'menu';
  }
}
