import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {SCRIPT_LOAD_SERVICE, ScriptLoadService} from './services/script-load.service';
import {DATA_SERVICE, DataService} from './services/data.service';
import {AppRoutingModule} from './app-routing';
import {AppToolbarModule} from './navigation/app-toolbar/app-toolbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Task1Module} from './pages/task-1/task-1.component';
import {Task2Module} from './pages/task-2/task-2.component';
import {Task3Module} from './pages/task-3/task-3.component';

import {Task4Module} from './pages/task-4/task-4.component';
import {Task5Module} from './pages/task-5/task-5.component';
import {Task6Module} from './pages/task-6/task-6.component';

import {Task7Module} from './pages/task-7/task-7.component';
import {Task8Module} from './pages/task-8/task-8.component';
import {Task9Module} from './pages/task-9/task-9.component';
import {AngularSplitModule} from 'angular-split';
import {AppSidenavModule} from './navigation/app-sidenav/app-sidenav.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Task1Module,
    Task2Module,
    Task3Module,
    Task4Module,
    Task5Module,
    Task6Module,
    Task7Module,
    Task8Module,
    Task9Module,
    AppRoutingModule,
    AppToolbarModule,
    MatSidenavModule,
    AngularSplitModule.forRoot(),
    AppSidenavModule,
  ],
  providers: [
    {provide: SCRIPT_LOAD_SERVICE, useClass: ScriptLoadService},
    {provide: DATA_SERVICE, useClass: DataService}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
