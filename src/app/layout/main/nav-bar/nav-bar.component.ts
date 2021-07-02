import { Component, OnInit } from '@angular/core';
import * as Models from 'src/app/models/menu-item.model';
import * as Interfaces from 'src/app/interfaces/menu-item.interface';


@Component({
  selector: 'app-layout-main-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  public menuItems: Interfaces.MenuItem[];

  public constructor() {
    this.menuItems = [
      new Models.MenuItem(1, 'Dashboard', '', '/', []),
      new Models.MenuItem(2, 'Tasks 1', '', '/tasks', [
        new Models.MenuItem(3, 'Tasks 1 - 1', '', '/tasks/1', []),
        new Models.MenuItem(4, 'Tasks 1 - 2', '', '/tasks/2', [
          new Models.MenuItem(5, 'Tasks 1 - 2 - 1', '', '/tasks/2/1', [
            new Models.MenuItem(6, 'Tasks 1 - 2 - 1 - 1', '', '/tasks/2/1/1', []),
          ])
        ]),
        new Models.MenuItem(7, 'Tasks 1 - 3', '', '/tasks/3', [])
      ]),
      new Models.MenuItem(8, 'Profile', '', '/profile', []),
    ]
  }

  ngOnInit(): void { }

  public getTrackById(item: any, index: any) {
    return item.id;
  }

}
