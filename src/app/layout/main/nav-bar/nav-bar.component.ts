import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-main-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  constructor() { }

  ngOnInit(): void { }

}
