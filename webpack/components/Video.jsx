/* eslint-disable jsx-a11y/media-has-caption */

import React, { Component } from 'react';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = { time: 0 };
  }

  componentDidMount() {
    const player = document.getElementById('player');
    player.addEventListener('timeupdate', this.tick);
  }

  tick() {
    console.log('ticking', this.currentTime);
  }

  render() {
    return (
      <div>
        <video
          id="player"
          src="http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_h264.mov"
          controls
        />
        <h3>{this.state.time}</h3>
      </div>
    );
  }
}

export default Video;
