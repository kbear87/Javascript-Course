import React, { Component } from 'react';
import classes from './beer.css';
import WithClass from '../../../HOC/WithClass';
import PropTypes from 'prop-types';


class Beer extends Component {
  render () {
    return (
      <WithClass classes={classes.beer}>
        {this.props.getsPizza ? <p>Tubbs gets pizza!</p> : null}
        <p onClick={this.props.deleteBeer}>Beer: {this.props.name}</p>
        <input type="text" onChange={this.props.changeName} value={this.props.name}/>
      </WithClass>
    )
  }
}

Beer.propTypes = {
  name: PropTypes.string,
  changeName: PropTypes.func,
  deleteBeer: PropTypes.func
}

export default Beer;
