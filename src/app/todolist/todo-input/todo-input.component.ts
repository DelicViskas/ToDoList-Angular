import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'todo-input',
  imports: [FormsModule],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.css'
})
export class SmartinputComponent {
  task = '';
  @Output() taskAdded = new EventEmitter;
  @Output() removeCompleted = new EventEmitter;
  addTask() {
    if (this.task.trim()){
      this.taskAdded.emit(this.task);
      this.task = '';
    }
  }
  removeCompletedTodos() {
    this.removeCompleted.emit()
  }
}
