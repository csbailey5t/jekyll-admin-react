import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import data from '../data/kiri-data.json';

class Dance extends Component {
  currentDance() {
    console.log(data);
    console.log(this);
    // return name if currentTime is > timeStart and < timeEnd for dance in kiri.dance
    return '';
  }

  render() {
    return (
      <div className="dance-style">
        <h2>Dance Style: {this.currentDance()}</h2>
        <h3>{this.props.currentTime}</h3>
      </div>
    );
  }
}

Dance.propTypes = {
  currentTime: PropTypes.number
};

Dance.defaultProps = {
  currentTime: 0
};

const mapStateToProps = state => ({ currentTime: state.currentTime });

export default connect(mapStateToProps)(Dance);
