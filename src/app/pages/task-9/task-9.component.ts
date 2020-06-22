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
import {TaskGoogleMapModule} from './task-google-map/task-google-map.component';

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
        <div class="link-code">Code:
          <ext-link [link]="taskInfo.linkCode"></ext-link>
        </div>
      </mat-card-footer>
    </mat-card>
    <h3>Решение:</h3>
    <mat-card>
      <mat-card-content>
        <task-google-map class="task-9"></task-google-map>
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
    this.dataService.get('/backend/task-6').toPromise().then((response) => {
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
    TaskGoogleMapModule
  ],
  exports: [Task9Component],
  declarations: [Task9Component],
  providers: [],
})
export class Task9Module {
}