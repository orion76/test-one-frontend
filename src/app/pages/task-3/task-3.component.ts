import {Component, OnInit, NgModule, ViewChild, AfterViewInit, Input, Inject, OnDestroy} from '@angular/core';
import {appPagesInfo, IPageInfo} from '../home/data';
import {MatCardModule} from '@angular/material/card';
import {LinkModule} from '../../components/link.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule, DOCUMENT} from '@angular/common';
import {SCRIPT_LOAD_SERVICE, ScriptLoadService} from '../../services/script-load.service';

@Component({
  selector: 'task-3',
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

      </mat-card-content>
    </mat-card>
  `
})

export class Task3Component implements OnInit, AfterViewInit, OnDestroy {

  taskInfo: IPageInfo = appPagesInfo[2];
  textarea: HTMLTextAreaElement;

  constructor(@Inject(SCRIPT_LOAD_SERVICE) private scriptLoader: ScriptLoadService,
              @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    this.scriptLoader.loaded([
      '/assets/js/task-3.js',
    ]).toPromise().then(() => {

      this.textarea = this.createTextArea(300, 80);
      this.document.body.appendChild(this.textarea);
      runTask3(this.textarea)
    })
  }

  ngOnDestroy(): void {
    this.document.body.removeChild(this.textarea);
  }

  createTextArea(top: number, left: number) {
    const textarea = this.document.createElement('textarea');
    textarea.style.top = (top || 0) + 'px';
    textarea.style.left = (left || 0) + 'px';
    textarea.name = 'test-textarea';
    return textarea;
  }

}


@NgModule({
  imports: [
    MatCardModule,
    LinkModule,
    FormsModule,
    MatButtonModule,
    CommonModule
  ],
  exports: [Task3Component],
  declarations: [Task3Component],
  providers: [],
})
export class Task3Module {
}
