import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  static propTypes = {
    fetchForecast: PropTypes.func.isRequired
  }

  state = {
    woeId: ''
  }

  onSubmitForecast = (event) => {
    event.preventDefault();

    if (this.state.woeId !== '') {
      this.props.fetchForecast(this.state.woeId);
    }

    this.setState({ woeId: '' });
  }

  render() {
    return (
      <form className="search-bar" onSubmit={(event) => { this.onSubmitForecast(event); }} >
        <span className="fa fa-search search-bar__icon" />
        <input
          className="search-bar__input"
          type="number"
          placeholder="Enter a WOE ID to display forecast for that location..."
          value={this.state.woeId}
          onChange={(e) => { this.setState({ woeId: e.target.value }); }}
        />
      </form>
    );
  }
}

export default SearchBar;
