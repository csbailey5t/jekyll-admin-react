/* eslint-disable jsx-a11y/media-has-caption */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCurrentTime } from '../actionCreators';
import store from '../store';

class Video extends Component {
  componentDidMount() {
    const player = document.getElementById('player');
    player.addEventListener('timeupdate', () => {
      store.dispatch(setCurrentTime(player.currentTime));
    });
  }

  render() {
    return (
      <div>
        <video id="player" src={this.props.videoUrl} controls />
        <h3>{this.props.currentTime}</h3>
      </div>
    );
  }
}

Video.propTypes = {
  currentTime: PropTypes.number,
  videoUrl: PropTypes.string
};

Video.defaultProps = {
  currentTime: 0,
  videoUrl: ''
};

const mapStateToProps = state => ({ currentTime: state.currentTime });

export default connect(mapStateToProps)(Video);
