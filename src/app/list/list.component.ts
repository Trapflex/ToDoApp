import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'td-list',
  imports: [CommonModule, FormsModule,],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  todos: { text: string, completed: boolean }[] = [
    
  ];

  filteredTodos: { text: string, completed: boolean }[] = [...this.todos];

  addTodo(newTodoText: string) {
    this.todos.push({ text: newTodoText, completed: false });
    this.applyFilter('all');
  }

  deleteTodo(todo: { text: string, completed: boolean }) {
    this.todos = this.todos.filter(t => t !== todo);
    this.applyFilter('all');
  }

  applyFilter(filter: string) {
    if (filter === 'completed') {
      this.filteredTodos = this.todos.filter(todo => todo.completed);
    } else if (filter === 'incompleted') {
      this.filteredTodos = this.todos.filter(todo => !todo.completed);
    } else {
      this.filteredTodos = [...this.todos];
    }
  }
}
