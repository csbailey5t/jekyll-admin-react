import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import data from '../data/kiri-data.json';

class Dance extends Component {
  currentDance() {
    // return name if currentTime is > timeStart and < timeEnd for dance in kiri.dance
    // use Object.values to iterate over values in kiri.dance
    const chunks = data.kiri.dance;
    let dance = '';
    for (let i = 0; i < chunks.length; i += 1) {
      if (
        this.props.currentTime >= chunks[i].timeStart &&
        this.props.currentTime < chunks[i].timeEnd
      ) {
        dance = chunks[i].name;
      }
    }
    return dance;
  }

  render() {
    return (
      <div className="dance-style">
        <h2>Dance Style: {this.currentDance()}</h2>
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
