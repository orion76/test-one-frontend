import {Component, OnInit, NgModule, ViewChild, AfterViewInit, Input, Inject} from '@angular/core';
import {appPagesInfo, IPageInfo} from '../home/data';
import {MatCardModule} from '@angular/material/card';
import {LinkModule} from '../../components/link.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {SCRIPT_LOAD_SERVICE, ScriptLoadService} from '../../services/script-load.service';

@Component({
  selector: 'task-2',
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
        <textarea #textareaTest ></textarea>
      </mat-card-content>
    </mat-card>

  `
})

export class Task2Component implements OnInit, AfterViewInit {

  @ViewChild('textareaTest') textarea;
  taskInfo: IPageInfo = appPagesInfo[1];

  constructor(@Inject(SCRIPT_LOAD_SERVICE) private scriptLoader: ScriptLoadService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.textarea);
    this.scriptLoader.loaded([
      '/assets/js/task-2.js',
    ]).toPromise().then(() => {
      loadTextToTextArea(this.textarea.nativeElement,'/assets/task-2-data.txt')
    })
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
  exports: [Task2Component],
  declarations: [Task2Component],
  providers: [],
})
export class Task2Module {
}
