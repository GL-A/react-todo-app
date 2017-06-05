var React = require( 'react' );
var TodoItem = require( './TodoItem' );

var TodoList = function( props ) {
  var todoList = props.todos.map( ( item, index ) => {
    return <TodoItem
      todoItem={ item }
      onDelete={ props.onDelete }
      key={ item.id }
      onCheckboxClick={ props.onCheckboxClick }
      />
  })
  return (
    <ul className="list-group">
      { todoList }
    </ul>
  )
}

module.exports = TodoList;
