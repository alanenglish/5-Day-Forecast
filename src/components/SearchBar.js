import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    woeId: ''
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.woeId !== '') {
      this.props.onSubmit(this.state.woeId);
    }

    this.setState({ woeId: '' });
  }

  render() {
    return (
      <form className="search-bar" onSubmit={(e) => { this.onSubmit(e); }} >
        <span className="fa fa-search search-bar__icon" />
        <input
          className="search-bar__input"
          type="number"
          placeholder="provide a WOE ID and press enter to display forecast for that location..."
          value={this.state.woeId}
          onChange={(e) => { this.setState({ woeId: e.target.value }); }}
          autoFocus
        />
      </form>
    );
  }
}

export default SearchBar;
