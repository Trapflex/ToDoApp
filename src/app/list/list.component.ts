import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'td-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todos: { text: string, completed: boolean }[] = [];
  filteredTodos: { text: string, completed: boolean }[] = [];

  ngOnInit() {
    this.loadTodos();
  }

  addTodo(newTodoText: string) {
    this.todos.push({ text: newTodoText, completed: false });
    this.saveTodos();
    this.applyFilter('all');
  }

  deleteTodo(todo: { text: string, completed: boolean }) {
    this.todos = this.todos.filter(t => t !== todo);
    this.saveTodos();
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

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  loadTodos() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
      this.applyFilter('all');
    }
  }
}
