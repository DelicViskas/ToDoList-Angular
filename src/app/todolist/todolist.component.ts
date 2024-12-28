import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SmartinputComponent } from './todo-input/todo-input.component';
import { TodoComponent } from "./todo/todo.component";
import { NgClass } from '@angular/common';


export type Todo = {
  id: number;
  text: string;
  completed: boolean;
}

function setItemLocaleStorage(where: string, arr: Todo[]) {
  localStorage.setItem(where, JSON.stringify(arr));
}


@Component({
  selector: 'app-todolist',
  imports: [FormsModule, SmartinputComponent, TodoComponent, NgClass],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  todolist: Todo[] = JSON.parse(localStorage.getItem('todolist') || '[]');
  copytodolist:Todo[] = this.todolist;
  nextId: number = this.todolist.length > 0 
  ? this.todolist.reduce((acc, todo) => Math.max(acc, todo.id), 0) + 1 : 1;
  filterButtons = [
    {text:'все', click: () => this.showAll()},
    {text:'выполненные', click: () => this.showCompleted()},
    {text:'не выполненные', click:() => this.showNoCompleted()},
  ];
  activeIndex = 0;

  addTodo(task: string) {
    this.todolist.push({ id: this.nextId++, text: task, completed: false })
    setItemLocaleStorage('todolist', this.todolist);
  }

  removeTodo(id: number) {
    this.todolist = this.todolist.filter(todo => todo.id !== id)
    setItemLocaleStorage('todolist', this.todolist);
  }
  
  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed
    this.updateFilteredList(); 
    setItemLocaleStorage('todolist', this.copytodolist);
  }

  removeCompletedTodos () {
    this.todolist = this.todolist.filter(todo => !todo.completed)
    setItemLocaleStorage('todolist', this.todolist);
  }

  showAll () {
    this.todolist = this.copytodolist;
    this.activeIndex = 0;
  }
  
  showCompleted() {
    this.todolist = this.copytodolist.filter(todo => todo.completed)
    this.activeIndex = 1;
  }

  showNoCompleted() {
    this.todolist = this.copytodolist.filter(todo => !todo.completed)
    this.activeIndex = 2;
  }
  updateFilteredList() {
    switch (this.activeIndex) {
      case 0:
        this.showAll();
        break;
      case 1:
        this.showCompleted();
        break;
      case 2:
        this.showNoCompleted();
        break;
    }
}

}



