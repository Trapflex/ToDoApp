import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'td-selection',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
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