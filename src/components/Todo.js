var React = require( 'react' );
var TodoForm = require( './TodoForm' );
var TodoList = require( './TodoList' );
var TodosCount = require( './TodosCount' );
var FilterLinks = require( './FilterLinks' );
var  constants = require( '../constants' );
var ALL = constants.ALL;
var COMPLETED = constants.COMPLETED;
var ACTIVE = constants.ACTIVE;


class Todo extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      todos: [],
      currentFilter: ALL,
      searchTerm: ''
    }
    this.handleNewTodoItem = this.handleNewTodoItem.bind( this );
    this.handleDeleteBtnClick = this.handleDeleteBtnClick.bind( this );
    this.handleCheckBoxClick = this.handleCheckBoxClick.bind( this );
    this.handleFilterChange = this.handleFilterChange.bind( this );
    this.handleTodoSearch = this.handleTodoSearch.bind( this );
  }
  handleNewTodoItem(  ) {
    this.setState(function( prevState ) {
      var todoItem = {
        todo: prevState.searchTerm,
        id: Date.now().toString(),
        completed: false
      }
      var todos = prevState.todos.concat( todoItem );
      return {
        todos: todos,
        searchTerm: ''
      }
    })
  }
  handleDeleteBtnClick( event ) {
    var id = event.target.value;
    this.setState( function( prevState ) {
      var todos = prevState.todos;
      var index = null;
      for( var x = 0; x < todos.length; x ++ ) {
        if ( todos[ x ].id === id ) {
          index = x;
          break;
        }
      }
      todos = todos.slice( 0, index ).concat( todos.slice( index + 1 ));
      return {
        todos: todos
      }
    })
  }
  handleCheckBoxClick( event ) {
    var id = event.target.value;
    this.setState( function( prevState ) {
      var todos = prevState.todos;
      var index = null;
      for( var x = 0; x < todos.length; x ++ ) {
        if ( todos[ x ].id === id ) {
          index = x;
          break;
        }
      }
      todos = (
        todos.slice(0, index)
          .concat([{
            todo: todos[index].todo,
            id: todos[index].id,
            completed: !todos[index].completed
          }])
          .concat(todos.slice(index+1))
      );
      return {
        todos: todos
      }
    })
  }
  handleFilterChange( event, currentFilter ) {
    event.preventDefault();
    console.log( currentFilter );
    this.setState( function() {
      return {
        currentFilter: currentFilter
      }
    })
  }
  filterTodos() {
    var todos = this.state.todos;

    var currentFilter = this.state.currentFilter;

    var filteredTodos = [];

    var searchTerm = this.state.searchTerm;
    for ( var x = 0; x < todos.length; x ++ ){
      var todoItem = todos[ x ];
      if ( todoItem.todo.indexOf( searchTerm ) === -1 ) {
        continue;
      }
      if( currentFilter === COMPLETED && !todoItem.completed ) {
        continue;
      }
      else if ( currentFilter === ACTIVE && todoItem.completed ) {
        continue;
      }
      filteredTodos.push( todoItem );
    }
    return filteredTodos;
  }
  handleTodoSearch( searchTerm ) {
    this.setState( function() {
      return {
        searchTerm: searchTerm
      }
    })
  }
  render() {
    var todos = this.filterTodos();
    return (
      <div>
        <TodoForm
          onTodoSearch={ this.handleTodoSearch }
          onNewTodoItem={ this.handleNewTodoItem }
          todoText={ this.state.searchTerm }>

        </TodoForm>
        <FilterLinks
          currentFilter={ this.state.currentFilter }
          onFilterChange={ this.handleFilterChange }
        />
        <TodoList
          onCheckboxClick={ this.handleCheckBoxClick }
          onDelete={ this.handleDeleteBtnClick }
          todos={ todos }
        />
        <TodosCount todosCount={ todos.length } />
      </div>
    )
  }
}
module.exports = Todo;
