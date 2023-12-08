/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo <= this.todos.length - 1){
      this.todos.splice(indexOfTodo, 1); 
    } 
  }

  update(index, updatedTodo) {
    if (index <= this.todos.length - 1){
      this.todos.splice(index, 1, updatedTodo);
    }
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (indexOfTodo <= this.todos.length - 1){
      return this.todos[indexOfTodo];
    }
    return null;
  }

  clear() {
    for (let i = 0; i < this.todos.length; i){
      this.todos.pop();
    }
  }

}

// const Todo1 = new Todo();
// console.log(Todo1.add("Abhi"));
// console.log(Todo1.add("Bargi"));
// console.log(Todo1.update(1, "Laxmi"));
// console.log(Todo1.get(1));
// console.log(Todo1.remove(0));
// console.log(Todo1.clear());
// console.log(Todo1.get(5));
module.exports = Todo;
