import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PerfectScrollbarModule,
  ],
  exports: [
    PerfectScrollbarModule
  ],
  providers: [
    //? Perfect Scrollbar
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
})
export class MyPerfectScrollbarModule { }
