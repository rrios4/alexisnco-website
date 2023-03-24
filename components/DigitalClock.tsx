import React, { Component } from 'react';
import moment from 'moment';

interface DigitalClockState {
  time: string;
}

class DigitalClock extends Component<{}, DigitalClockState> {
  interval: number = 0;

  state: DigitalClockState = {
    time: moment().format('h:mm A')
  }

  updateTime = () => {
    this.setState({ time: moment().format('h:mm A') });
  }

  componentDidMount() {
    this.interval = window.setInterval(() => this.updateTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>{this.state.time}</div>
    );
  }
}

export default DigitalClock;
