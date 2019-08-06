import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    zipCode: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleChange = ({ target }) => {
    const value = target.value;
    this.setState({
      [target.name]: value
    });
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="zipCode">Search by Zip-Code</label>
        <input
          type="text"
          name="zipCode"
          id="zipCode"
          onChange={this.handleChange}
          value={this.state.zipCode}
        />
        <button>Search</button>
      </form>
    );
  }
}
