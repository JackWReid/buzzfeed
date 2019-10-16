import React from 'react';
import ReactDOM from 'react-dom';

import { differenceInSeconds } from 'date-fns';

const LAUNCH_DATE = new Date('2018-07-18T12:00:00Z');

const rD = diff => (Math.floor(diff / (60 * 60 * 24))).toString();
const rH = diff => (Math.floor(diff / (60 * 60) % 24)).toString().padStart(2, '0');
const rM = diff => (Math.floor(diff / 60) % 60).toString().padStart(2, '0');
const rS = diff => (diff % 60).toString().padStart(2, '0');

const rF = diff => `${rD(diff)}:${rH(diff)}:${rM(diff)}:${rS(diff)}`;

const playAudio = () => document.querySelector('audio').play();

const Clock = ({ diff }) => diff > 0 && <h1 className="clock-face">{rF(diff)}</h1>;

const App = ({ now }) => {
  const diff = differenceInSeconds(LAUNCH_DATE, new Date());
  const passed = diff <= 0;
  document.title = passed ? '🚀': rF(diff);

  return (
    <section onClick={playAudio} className={clockClassNames(diff)}>
      {!passed && <Clock diff={diff} />}
      {passed && <div class="rocket">🚀🚀</div>} 
    </section>
  );
}

const clockClassNames = diff => {
  const even = diff % 2 == 0;
  const passed = diff <= 0;
  const dayOf = diff <= (60 * 60 * 24) && !passed;
  const classes = ['clock-background'];

  if (passed) {
    classes.push('clock-background--launched');
    return classes.join(' ');
  }

  if (dayOf) {
    classes.push('clock-background--day');
    return classes.join(' ');
  }

  classes.push(even ? 'clock-background--even' : 'clock-background--odd');
  return classes.join(' ');
}

class Refresher extends React.Component {
  constructor() {
    super();
    this.state = {
      now: new Date()
    };
  }

  componentDidMount() {
    setInterval(() => this.update(), 100);
  };

  update() {
    this.setState({now: new Date()})
  }

  render() {
    return <App now={this.state.now} />;
  }
}

ReactDOM.render(<Refresher />, document.getElementById('countdown-element'));

setTimeout(location.refresh, 30 * 1000);
