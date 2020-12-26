import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

todos= ['html','css','javaScript'];
todo = '';



constructor() { }

ngOnInit() {
  
}


addToDo() {
  if(this.todo !== '') {
    this.todos.push(this.todo);
    this.todo= '';
  }
  
}

remove(i: any) { 
  this.todos.splice(i,1);
}


}





  
    
    


