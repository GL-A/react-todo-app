var React = require( 'react' );
var  constants = require( '../constants' );
var ALL = constants.ALL;
var ACTIVE = constants.ACTIVE;
var COMPLETED = constants.COMPLETED;

var Link = function( props ) {
  var currentFilter = props.currentFilter;
  var filterName = props.filterName;
  var linkStyle = {
    marginRight: '3px',
    marginLeft: '3px'
  }
  if ( currentFilter === filterName ){
    linkStyle = {
      marginRight: '3px',
      marginLeft: '3px',
      backgroundColor: "#e6e6e6",
      borderColor: '#adadad',
      lineHeight: '1.5'
    };
  }
  return (
    <a
      href="#"
      className="btn btn-default btn-sm"
      style={ linkStyle }
      onClick={ function( event ){ props.onFilterChange( event, props.filterName );} }
      >
       <strong>
         { props.children }
       </strong>
    </a>
  )
}
var FilterLinks = function( props ) {
  return (
    <div style={{ marginBottom: "30px" }}>
      { 'Display: '}
      <Link currentFilter={ props.currentFilter } filterName={ ALL } onFilterChange={ props.onFilterChange }>
        <em>{ ALL }</em>
      </Link>
      <Link filterName={ ACTIVE } onFilterChange={ props.onFilterChange }>
        <em>{ ACTIVE }</em>
      </Link>
      <Link filterName={ COMPLETED } onFilterChange={ props.onFilterChange }>
        <em>{ COMPLETED }</em>
      </Link>
    </div>
  )
}
module.exports = FilterLinks;
