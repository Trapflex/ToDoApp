import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FilterComponent } from "./filter/filter.component";
import { SelectionComponent } from "./selection/selection.component";
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, FilterComponent, SelectionComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo_app';
}
