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
import {FileUploadComponent} from './file-upload.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {DragAndDropFileUploadModule} from '../../components/drag-and-drop-file-upload.directive';

@Component({
  selector: 'task-7',
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
        <file-upload (uploadFiles)="uploadFiles($event)" class="file-upload"></file-upload>
      </mat-card-content>
      <div class="response" [innerHTML]="result" ></div>
    </mat-card>
  `
})

export class Task7Component implements OnInit {

  taskInfo: IPageInfo = appPagesInfo[6];
  methodName: string;
  result = '';

  constructor(@Inject(DATA_SERVICE) private dataService: DataService) {
  }

  ngOnInit() {

  }

  uploadFiles(form: FormData) {

    this.dataService.post('/task-7', form).toPromise().then((response) => {
      this.result = response.result;
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
    MatProgressBarModule,
    DragAndDropFileUploadModule
  ],
  exports: [Task7Component],
  declarations: [Task7Component, FileUploadComponent],
  providers: [],
})
export class Task7Module {
}
