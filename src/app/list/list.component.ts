import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'td-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  todos = [
    { text: 'Learn Angular' },
    { text: 'Build a ToDo App' },
    { text: 'Deploy the App' }
  ];
  addTodo(newTodoText: string) {
    this.todos.push({ text: newTodoText });
  }
  deleteTodo(todo: { text: string }) {
    this.todos = this.todos.filter(t => t !== todo);
  }
}
