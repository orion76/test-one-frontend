import {Directive, EventEmitter, HostBinding, HostListener, NgModule, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Directive({
  selector: '[drag-and-drop-file-upload]'
})
export class DragAndDropFileUploadDirective {
  @HostBinding('class.fileover') fileOver: boolean;
  @Output() fileDropped = new EventEmitter<any>();

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event'])
  public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
  }

  // Drop listener
  @HostListener('drop', ['$event'])
  public ondrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [DragAndDropFileUploadDirective],
  declarations: [DragAndDropFileUploadDirective],
  providers: [],
})
export class DragAndDropFileUploadModule {
}
