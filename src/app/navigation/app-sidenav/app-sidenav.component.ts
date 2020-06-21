import {Component, Input, NgModule, OnInit} from '@angular/core';


import {CommonModule} from '@angular/common';

import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {appPagesInfo, IPageInfo} from '../../pages/home/data';
import {MatSidenav} from '@angular/material/sidenav';


@Component({
  selector: 'app-sidenav',
  template: `

    <nav class="navbar navbar-show-small">
      <a mat-raised-button class="navbar-link" *ngFor="let page of pages" [routerLink]="page.linkDemo.url"
         (click)="click()">{{page.linkDemo.label}}</a>

    </nav>
  `,

})
export class AppSidenavComponent implements OnInit {
  pages: IPageInfo[] = appPagesInfo;
  @Input() sidenav: MatSidenav;

  constructor() {

  }

  click() {
    this.sidenav.close();
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
  exports: [AppSidenavComponent],
  declarations: [AppSidenavComponent],

})
export class AppSidenavModule {
}
