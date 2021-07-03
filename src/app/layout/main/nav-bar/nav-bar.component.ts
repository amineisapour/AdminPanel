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
      new Models.MenuItem(1, 'Dashboard', '', '/dashboard', null),
      new Models.MenuItem(2, 'Tasks', '', '', [
        new Models.MenuItem(3, 'Tasks Board', '', '/tasks/board', null),
        new Models.MenuItem(4, 'Tasks Departments', '', '', [
          new Models.MenuItem(5, 'Tasks DV', '', '/tasks/departments/dv', null),
          new Models.MenuItem(6, 'Tasks Admin', '', '/tasks/departments/admin', null),
          new Models.MenuItem(7, 'Tasks FC', '', '/tasks/departments/fc', null),
        ]),
        new Models.MenuItem(8, 'Tasks Report', '', '', [
          new Models.MenuItem(9, 'Report 1', '', '/tasks/report/1', null),
          new Models.MenuItem(10, 'Report 2', '', '/tasks/report/2', null),
          new Models.MenuItem(11, 'Report 3', '', '/tasks/report/3', null),
        ]),
      ]),
      new Models.MenuItem(12, 'User', '', '', [
        new Models.MenuItem(13, 'Profile', '', '/user/Profile', null),
        new Models.MenuItem(14, 'User List', '', '/user/list', null),
        new Models.MenuItem(15, 'User Access', '', '/user/access', null),
      ]),
    ];
  }

  ngOnInit(): void { }

  public getTrackById(item: any, index: any) {
    return item.id;
  }

}
