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
  selector: 'task-5',
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
        <h3>Table "Product"</h3>
        <div [innerHTML]="product"></div>
        <h3>Table "Manufacturer"</h3>
        <div [innerHTML]="manufacturer"></div>
      </mat-card-content>
    </mat-card>
  `
})

export class Task5Component implements OnInit {

  taskInfo: IPageInfo = appPagesInfo[4];
  methodName: string;
  result = '';

  product: string;
  manufacturer: string;

  constructor(@Inject(DATA_SERVICE) private dataService: DataService) {
  }

  ngOnInit() {
    this.loadData('product');
    this.loadData('manufacturer');
  }

  loadData($name) {
    this.dataService.get('/task-5/' + $name).toPromise().then((response) => {
      this[$name] = response.table;
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
  exports: [Task5Component],
  declarations: [Task5Component],
  providers: [],
})
export class Task5Module {
}
