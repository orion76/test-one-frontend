import {Component, Inject, NgModule, OnInit} from '@angular/core';
import {appPagesInfo, IPageInfo} from '../home/data';
import {MatCardModule} from '@angular/material/card';
import {LinkModule} from '../../components/link.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {DATA_SERVICE, DataService} from '../../services/data.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {TaskYandexMapModule} from './task-yandex-map/task-yandex-map.component';

@Component({
  selector: 'task-9',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{taskInfo.label}}</mat-card-title>
      </mat-card-header>
      <mat-card-content class="task-content">
        <p *ngFor="let paragraph of taskInfo.content">{{paragraph}}</p>

      </mat-card-content>
      <mat-card-footer>
        <div class="link-code">Source code:
          <ext-link *ngFor="let link of taskInfo.linkCode" [link]="link"></ext-link>
        </div>
      </mat-card-footer>
    </mat-card>
    <h3>Решение:</h3>
    <mat-card>
      <mat-card-content>
        <task-yandex-map class="task-9"></task-yandex-map>
      </mat-card-content>
    </mat-card>
  `
})

export class Task9Component implements OnInit {

  taskInfo: IPageInfo = appPagesInfo[8];
  methodName: string;
  result = '';

  constructor(@Inject(DATA_SERVICE) private dataService: DataService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.get('/task-6').toPromise().then((response) => {
      this.result = response.table;
    })
  }

}


@NgModule({
  imports: [
    MatCardModule,
    LinkModule,
    FormsModule,
    MatButtonModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    TaskYandexMapModule
  ],
  exports: [Task9Component],
  declarations: [Task9Component],
  providers: [],
})
export class Task9Module {
}
