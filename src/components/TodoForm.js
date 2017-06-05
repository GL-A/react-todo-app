var React = require( 'react' );

class TodoForm extends React.Component {
  constructor( props ) {
    super( props );

    this.handleFormSubmit = this.handleFormSubmit.bind( this );
    this.handleInputTextChangeEvent = this.handleInputTextChangeEvent.bind( this );
    this.handleRefInputEvent = this.handleRefInputEvent.bind( this );
  }
  handleFormSubmit( event ) {
    event.preventDefault();
    this.props.onNewTodoItem( this.props.todoText );
  }
  handleInputTextChangeEvent( event ) {
    var todoText = event.target.value;
    this.props.onTodoSearch( todoText );
  }
  handleRefInputEvent( inputRef ) {
    inputRef.focus();
  }

  render() {
    return (
      <form
        className="form-group"
        onSubmit={ this.handleFormSubmit }>
        <input
          className="form-control"
          type="text"
          placeholder="type to seach or add new item"
          ref={ this.handleRefInputEvent }
          value={ this.props.todoText }
          onChange={ this.handleInputTextChangeEvent }>
          </input>
      </form>
    )
  }
}

module.exports = TodoForm;
