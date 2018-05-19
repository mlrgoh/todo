import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TodoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TodoService {
  private todos = [];
  private archivedTodos = [];

  constructor(public http: Http) {
    console.log('Hello TodoService Provider');
  }

  archiveTodo(todoIndex) {
    let todoToBeArchived = this.todos[todoIndex];
    this.todos.splice(todoIndex, 1);
    this.archivedTodos.push(todoToBeArchived);
  }

  getTodos() {
    return this.todos;
  }

  getArchivedTodos() {
    return this.archivedTodos;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  editTodo(todo, todoIndex) {
    this.todos[todoIndex] = todo;
  }
}