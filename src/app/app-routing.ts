import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {Task1Component} from './pages/task-1/task-1.component';
import {Task2Component} from './pages/task-2/task-2.component';
import {Task3Component} from './pages/task-3/task-3.component';
import {Task4Component} from './pages/task-4/task-4.component';
import {Task5Component} from './pages/task-5/task-5.component';
import {Task6Component} from './pages/task-6/task-6.component';
import {Task7Component} from './pages/task-7/task-7.component';
import {Task8Component} from './pages/task-8/task-8.component';
import {Task9Component} from './pages/task-9/task-9.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'task-1', component: Task1Component},
  {path: 'task-2', component: Task2Component},
  {path: 'task-3', component: Task3Component},
  {path: 'task-4', component: Task4Component},
  {path: 'task-5', component: Task5Component},
  // {path: 'task-6', component: Task6Component},
  {path: 'task-7', component: Task7Component},
  {path: 'task-8', component: Task8Component},
  {path: 'task-9', component: Task9Component},
  // {path: ':section', component: HomeComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // scrollPositionRestoration: 'enabled',
    // anchorScrolling: 'enabled',
    enableTracing: false,
    onSameUrlNavigation: 'reload',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
