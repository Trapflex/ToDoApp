import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'td-selection',
  imports: [CommonModule, FormsModule],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.css'
})
export class SelectionComponent {
  newTodoText: string = '';

  @Output() todoAdded = new EventEmitter<string>();

  addTodo() {
    if (this.newTodoText.trim()) {
      this.todoAdded.emit(this.newTodoText);
      this.newTodoText = '';
    }
  }
}
