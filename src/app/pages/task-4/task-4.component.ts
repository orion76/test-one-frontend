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

@Component({
  selector: 'task-4',
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
        <div class="note-content">
          Введите наименование метода класса.<br> Существующий метод: "existsMethod"
        </div>
        <mat-form-field appearance="fill">
          <mat-label>Имя метода</mat-label>
          <input matInput [(ngModel)]="methodName">
        </mat-form-field>
        <div class="test-result" [ngClass]="{'test-result-error':responseError}">{{result}}</div>
        <button mat-raised-button color="primary" (click)="methodRun(methodName)">Run</button>
      </mat-card-content>
    </mat-card>
  `
})

export class Task4Component implements OnInit {

  taskInfo: IPageInfo = appPagesInfo[3];
  methodName = 'existsMethod';
  result = '';
  responseError = false;

  constructor(@Inject(DATA_SERVICE) private dataService: DataService) {
  }

  ngOnInit() {
  }

  methodRun(methodName: string) {
    this.dataService.get('/backend/task-4/' + methodName).toPromise().then((response) => {
      this.result = response.result;
      this.responseError = this.result === 'Error'
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
    MatInputModule
  ],
  exports: [Task4Component],
  declarations: [Task4Component],
  providers: [],
})
export class Task4Module {
}
