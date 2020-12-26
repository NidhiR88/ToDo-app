import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ComplexListComponent } from './complex-list/complex-list.component';
import { AddTaskComponent } from './add-task/add-task.component';


const routes: Routes = [
  { path: '', component: TodoListComponent, pathMatch: 'full' },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'complex-list', component: ComplexListComponent },
  { path: 'add-task', component: AddTaskComponent},

];//each route is an object, which containes path

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ TodoListComponent , ComplexListComponent, AddTaskComponent];
