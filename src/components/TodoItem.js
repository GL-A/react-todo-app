var React = require( 'react' );

var TodoItem = function( props ) {
  console.log( props.todoItem );
  var todoItem = props.todoItem;
  return (
    <li className="list-group-item">
      <h3>
        <input
          className="pull-left"
          type="checkbox"
          checked={ todoItem.completed }
          onChange={ props.onCheckboxClick }
          value={ todoItem.id }
        />
        { todoItem.todo }
        <button
          onClick={ props.onDelete }
          value={ todoItem.id }
          className="btn btn-default btn-danger pull-right">
          Delete
        </button>
      </h3>
    </li>
  )
}

module.exports = TodoItem;
