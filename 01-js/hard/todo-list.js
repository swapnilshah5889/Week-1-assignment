/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(){
    this.todoMap = [];
  }
  add(task) {
    this.todoMap.push(task);
  }
  remove(index) {
    if(index>=0 && index<this.todoMap.length) {
      this.todoMap.splice(index,1);
    }
  }
  update(index, task) {
    if(index>=0 && index<this.todoMap.length) {
      this.todoMap[index] = task;
    }
  }
  clear() {
    this.todoMap = [];
  }
  get(index) {
    if(index>=0 && index<this.todoMap.length) {
      return this.todoMap[index];
    }
    return null;
  }
  getAll() {
    return this.todoMap;
  }
}

module.exports = Todo;
