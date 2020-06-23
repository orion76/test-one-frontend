import {Component, OnInit, NgModule} from '@angular/core';
import {appPagesInfo, IPageInfo} from './data';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {LinkModule} from '../../components/link.component';

@Component({
  selector: 'home',
  template: `
    <mat-card *ngFor="let info of pagesInfo">
      <mat-card-title>{{info.label}}</mat-card-title>
      <mat-card-content>
        <div class="task-content">
          <p *ngFor="let paragraph of info.content">{{paragraph}}</p>
        </div>
        <div class="link-code">Source code:
          <ext-link *ngFor="let link of info.linkCode" [link]="link"></ext-link>
        </div>
        <div class="link-demo">Demo:
          <ext-link [link]="info.linkDemo"></ext-link>
        </div>
      </mat-card-content>
    </mat-card>
  `
})

export class HomeComponent implements OnInit {
  pagesInfo: IPageInfo[] = appPagesInfo;

  constructor() {
  }

  ngOnInit() {

  }
}


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    LinkModule
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {
}
