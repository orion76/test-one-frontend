import {Component, Input, NgModule, OnInit} from '@angular/core';


import {CommonModule} from '@angular/common';

import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenav} from '@angular/material/sidenav';


@Component({
  selector: 'app-toolbar',
  template: `

    <mat-toolbar class="toolbar app-dark-theme">
      <button mat-stroked-button color="accent" routerLink="/">
        <mat-icon>home</mat-icon>
        Home
      </button>
      <button mat-button (click)="sidenav.toggle()">
        <mat-icon>menu</mat-icon>
      </button>
    </mat-toolbar>
    <!--      <button mat-fab (click)="toolbarToggle()" class="button-toolbar-toggle">-->
    <!--        <div class="button-arrow"></div>-->
    <!--      </button>-->
    <!--      <page-toolbar class="page-toolbar" [items]="pageMenu$|async"></page-toolbar>-->

  `,
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['app-toolbar.component.scss'],

})
export class AppToolbarComponent implements OnInit {
  @Input() sidenav: MatSidenav;

  constructor() {

  }

  ngOnInit() {

  }

}


@NgModule({
  imports: [
    CommonModule,

    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,

  ],
  exports: [AppToolbarComponent],
  declarations: [AppToolbarComponent],

})
export class AppToolbarModule {
}
