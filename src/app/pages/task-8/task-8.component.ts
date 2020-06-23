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
import {MatTabsModule} from '@angular/material/tabs';
import {AngularSplitModule} from 'angular-split';

@Component({
  selector: 'task-8',
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

    <div class="task-8">
      <as-split direction="horizontal" unit="percent">
        <as-split-area size="30" class="task-8__sidebar">
          <h3>Sidebar</h3>
          <div class="textarea-output">
            <div class="textarea-output__label">Textarea 1 output:</div>
            <div class="textarea-output__value">{{text1}}</div>
          </div>
        </as-split-area>
        <as-split-area size="70" class="task-8__content">
          <as-split direction="vertical">
            <as-split-area class="task-8__content-row">
              <div class="textarea-output">
                <div class="textarea-output__label">Textarea 2 output:</div>
                <div class="textarea-output__value">{{text2}}</div>
              </div>
            </as-split-area>
            <as-split-area class="task-8__content-row">
              <mat-tab-group>
                <mat-tab label="Tab 1">
                  <div class="task-8__textarea textarea">
                    <label class="textarea__label">Textarea 1</label>
                    <textarea [(ngModel)]="text1" class="textarea__input"></textarea>
                  </div>

                </mat-tab>
                <mat-tab label="Tab 2">
                  <div class="task-8__textarea textarea">
                    <label class="textarea__label">Textarea 2</label>
                    <textarea [(ngModel)]="text2" class="textarea__input"></textarea>
                  </div>
                </mat-tab>
              </mat-tab-group>
            </as-split-area>
          </as-split>
        </as-split-area>
      </as-split>
    </div>

  `
})

export class Task8Component implements OnInit {

  taskInfo: IPageInfo = appPagesInfo[7];

  text1: string;
  text2: string;

  constructor(@Inject(DATA_SERVICE) private dataService: DataService) {
  }

  ngOnInit() {

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
    MatTabsModule,
    AngularSplitModule
  ],
  exports: [Task8Component],
  declarations: [Task8Component],
  providers: [],
})
export class Task8Module {
}
