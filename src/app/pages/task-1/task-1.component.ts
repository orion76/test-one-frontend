import {Component, OnInit, NgModule, Inject, OnDestroy} from '@angular/core';
import {SCRIPT_LOAD_SERVICE, ScriptLoadService} from '../../services/script-load.service';
import {FormsModule} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {appPagesInfo, IPageInfo} from '../home/data';
import {LinkModule} from '../../components/link.component';

@Component({
  selector: 'task-1',
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
    <mat-card class="test-obj-flip">
      <mat-card-header>
        <mat-card-title>Test function obj_flip(obj)</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <h4>Ввод</h4>
        <div class="note-content">
          <p>
            Введите в JSON-формате литерал массива или объекта.
          </p>
          <p> например:</p>
          <p> [1,2,3,"one"]</p>
          <p> {{'{'}}one:1,two:2,three:3,str:"one"}</p>
        </div>
        <textarea [(ngModel)]="dataObjFlip"></textarea>
        <h4>Вывод</h4>
        <div class="test-result" [ngClass]="{'test-result-error':errorObjFlip}">{{resultObjFlip}}</div>

      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary" (click)="runObjectFlip()">Run</button>
      </mat-card-actions>
    </mat-card>
    <mat-card class="test-array-flip">
      <mat-card-header>
        <mat-card-title>Test function Array.prototype.flip()</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <h4>Ввод</h4>
        <div class="note-content">
          <p>
            Введите в JSON-формате литерал массива со значениями: положительные целые числа.
          </p>
          <p> например:</p>
          <p> [1,2,3]</p>

        </div>
        <textarea [(ngModel)]="dataArrayFlip"></textarea>
        <div class="test-result" [ngClass]="{'test-result-error':errorArrayFlip}">{{resultArrayFlip}}</div>

      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary" (click)="runArrayFlip()">Run</button>
      </mat-card-actions>
    </mat-card>
  `
})

export class Task1Component implements OnInit, OnDestroy {
  dataObjFlip: string = '[1,2,3]';
  resultObjFlip: string;
  errorObjFlip: boolean;
  dataArrayFlip: string = '[1,2,3]';
  resultArrayFlip: string;
  errorArrayFlip: boolean;
  destroy = new Subject<boolean>();
  taskInfo: IPageInfo = appPagesInfo[0];

  constructor(@Inject(SCRIPT_LOAD_SERVICE) private scriptLoader: ScriptLoadService) {
  }

  ngOnInit() {

  }

  runObjectFlip() {
    this.errorObjFlip = false;
    this.scriptLoader.loaded([
      '/assets/js/json5.js',
      '/assets/js/task-1.js',
    ]).toPromise().then(() => {
      try {
        const obj = JSON5.parse(this.dataObjFlip);
        const result = obj_flip(obj);
        this.resultObjFlip = JSON5.stringify(result);
      } catch (err) {
        this.resultObjFlip = err;
        this.errorObjFlip = true;
      }

    })
  }


  runArrayFlip() {
    this.errorArrayFlip = false;
    this.scriptLoader.loaded([
      '/assets/js/json5.js',
      '/assets/js/task-1.js',
    ]).toPromise().then(() => {
      const arr = JSON5.parse(this.dataArrayFlip);
      try {
        const result = arr.flip();
        this.resultArrayFlip = JSON5.stringify(result);
      } catch (err) {
        this.resultArrayFlip = err;
        this.errorArrayFlip = true;
      }


    })
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
  }
}


@NgModule({
  imports: [
    FormsModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    LinkModule
  ],
  exports: [Task1Component],
  declarations: [Task1Component],
  providers: [],
})
export class Task1Module {
}
