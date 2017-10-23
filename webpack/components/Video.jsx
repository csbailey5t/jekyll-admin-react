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
        <video
          id="player"
          src="http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_h264.mov"
          controls
        />
        <h3>{this.props.currentTime}</h3>
      </div>
    );
  }
}

Video.propTypes = {
  currentTime: PropTypes.number
};

Video.defaultProps = {
  currentTime: 0
};

const mapStateToProps = state => ({ currentTime: state.currentTime });

export default connect(mapStateToProps)(Video);
