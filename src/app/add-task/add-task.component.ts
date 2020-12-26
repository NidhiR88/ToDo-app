import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  todos=[ ];
  todo: string ='';

  

  constructor() { }

  ngOnInit() {
    
  }


  currentDate = new Date();

  addNewTask() {
    if(this.todo !== '') {
      this.todos.push(this.todo);
      this.todo ='';
    }
  }
   
  remove(i: any) { 
      this.todos.splice(i,1);
    }
  }

