import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'file-upload',
  template: `
    <div class="container" drag-and-drop-file-upload (fileDropped)="onFileDropped($event)">
      <img src="assets/img/ic-upload-file.svg" alt="">
      <h3>Drag and drop file here</h3>
    </div>
    <div class="files-list">
      <div class="single-file" *ngFor="let file of files; let i = index">
        <img src="assets/img/ic-file.svg" width="45px" alt="file">
        <div class="info">
          <h4 class="name">
            {{ file?.name }}
          </h4>
          <p class="size">
            {{ formatBytes(file?.size) }}
          </p>
          <mat-progress-bar mode="determinate" value="file?.progress"></mat-progress-bar>
        </div>
        <img src="assets/img/ic-delete-file.svg" class="delete" width="20px" alt="file" (click)="deleteFile(i)">
      </div>
    </div>
  `
})

export class FileUploadComponent {

  files: any[] = [];

  @Output() uploadFiles = new EventEmitter<FormData>();


  onFileDropped(files) {

    this.files = this.prepareFilesList(files);
    const formData = new FormData();
    this.files.forEach((file, index) => {
      formData.append('files[]', file, file.name);
    });

    this.uploadFiles.emit(formData);
  }

  deleteFile(index: number) {
    if (this.files[index].progress < 100) {
      console.log('Upload in progress.');
      return;
    }
    this.files.splice(index, 1);
  }

  prepareFilesList(files: Array<any>) {
    const _files = [];
    for (const item of files) {
      item.progress = 0;
      _files.push(item);
    }
    return _files;
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}


