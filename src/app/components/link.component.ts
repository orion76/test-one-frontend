import {Component, HostBinding, Input, NgModule, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

export interface ILink {
  url: string;
  label: string;
  external?: boolean;
}

@Component({
  selector: 'ext-link',
  template: `
    <a *ngIf="link.external; else linkInternal" [href]="link.url" [target]="linkTarget(link)"
       class="task-demo-link">{{link.label}}</a>
    <ng-template #linkInternal>
      <a [routerLink]="link.url" class="task-code-link">{{link.label}}</a>
    </ng-template>
  `
})
export class LinkComponent implements OnInit {
  @Input() link: ILink;

  @HostBinding('class.ext-link') hostClass = true;

  constructor() {
  }

  linkTarget(link: ILink) {
    return link.external ? '_blank' : '_self';
  }

  ngOnInit() {

  }
}


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LinkComponent],
  declarations: [LinkComponent],
  providers: [],
})
export class LinkModule {
}
