import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'todo-item',
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input() todo: { id: number; text: string; completed: boolean; } | undefined;
  @Output() remove = new EventEmitter;
  @Output() toggle = new EventEmitter;
  

  removeTodo() {
    this.remove.emit(this?.todo?.id)
  }
  toggleTodo(){
    this.toggle.emit()
  }

}

