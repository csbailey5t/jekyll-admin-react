import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCurrentTime } from '../actionCreators';

const Hello = props => (
  <div>
    <h1>{props.currentTime}</h1>
    <input
      onChange={props.handleTimeChange}
      value={props.currentTime}
      type="text"
      placeholder="time"
    />
  </div>
);

Hello.propTypes = {
  currentTime: PropTypes.string,
  handleTimeChange: PropTypes.func
};

Hello.defaultProps = {
  currentTime: '',
  handleTimeChange: () => {}
};

const mapStateToProps = state => ({ currentTime: state.currentTime });
const mapDispatchToProps = dispatch => ({
  handleTimeChange(event) {
    dispatch(setCurrentTime(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
