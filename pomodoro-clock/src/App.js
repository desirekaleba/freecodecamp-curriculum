const { Component } = require("react");

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      session: "",
      timeLeft: "",
      sessionState: "paused",
      currentTime: '',
      timeout: null
    };

    this.breakIncrement = this.breakIncrement.bind(this);
    this.breakDecrement = this.breakDecrement.bind(this);
    this.sessionIncrement = this.sessionIncrement.bind(this);
    this.sessionDecrement = this.sessionDecrement.bind(this);
    this.playPause = this.playPause.bind(this);
    this.reset = this.reset.bind(this);
    this.countdown = this.countdown.bind(this);
  }

  breakIncrement(event) {
    event.preventDefault();
    this.setState((state) => ({
      breakLength: state.breakLength >= 60 ? 1 : state.breakLength + 1,
    }));
  }

  breakDecrement(event) {
    event.preventDefault();
    this.setState((state) => ({
      breakLength: state.breakLength <= 1 ? 60 : state.breakLength - 1,
    }));
  }

  sessionIncrement(event) {
    event.preventDefault();
    this.setState((state) => ({
      sessionLength: state.sessionLength >= 60 ? 1 : state.sessionLength + 1
    }));
  }

  sessionDecrement(event) {
    event.preventDefault();
    this.setState((state) => ({
      sessionLength: state.sessionLength <= 1 ? 60 : state.sessionLength - 1,
    }));
  }

  playPause(event) {
    event.preventDefault();
    let parent = this;
    (function() {
      if (parent.state.sessionState === "paused") {
        parent.setState(state => ({
          sessionState: "running",
        }));
        if (parent.state.currentTime === '') {
          parent.countdown(parent, parent.state.sessionLength, 0);
        } else {
          let subTime = parent.state.currentTime.split(':');
          parent.countdown(parent, parseInt(subTime[0]), parseInt(subTime[1]));
        }
        
      } else {
        clearTimeout(parent.state.timeout);
        parent.setState({
          sessionState: 'paused'
        });
        
      }
    })();
  }

countdown( parent, minutes, seconds )
{
    var endTime, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date());
        if ( msLeft < 1000 ) {
            parent.setState({
              timeLeft: 'Time is out!'
            })
        } else {

            time = new Date( msLeft );
            mins = time.getUTCMinutes();
            parent.setState({
              timeLeft: twoDigits( mins ) + ':' + twoDigits( time.getUTCSeconds()),
              currentTime: twoDigits( mins ) + ':' + twoDigits( time.getUTCSeconds()),
              timeout: setTimeout( updateTimer, time.getUTCMilliseconds() + 500 )
            });
        }
    }
    endTime = (+new Date()) + 1000 * (60 * minutes + seconds) + 500;
    updateTimer();
}

  reset(event) {
    event.preventDefault();
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      session: "",
      timeLeft: "",
      sessionState: "paused",
      timeout: null
    });
    clearTimeout(this.state.timeout);
  }


  render() {
    return (
      <div>
        <div id="break">
          <label id="break-label">Break Length</label>
          <br />
          <button id="break-decrement" onClick={this.breakDecrement}>
            <i class="fa fa-arrow-down" aria-hidden="true"></i>
          </button>
          <button id="break-increment" onClick={this.breakIncrement}>
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
          </button>
          <p id="break-length">{this.state.breakLength}</p>
        </div>
        <div id="session">
          <label id="session-label">Session Length</label>
          <br />
          <button id="session-decrement" onClick={this.sessionDecrement}>
            <i class="fa fa-arrow-down" aria-hidden="true"></i>
          </button>
          <button id="session-increment" onClick={this.sessionIncrement}>
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
          </button>
          <p id="session-length">{this.state.sessionLength}</p>
          <label id="timer-label">Session ({this.state.sessionState})</label>
          <p id="time-left">{this.state.timeLeft}</p>
        </div>
        <button id="start_stop" onClick={this.playPause}>
          <i class="fa fa-play" aria-hidden="true"></i>
          <i class="fa fa-pause" aria-hidden="true"></i>
        </button>
        <button id="reset" onClick={this.reset}>
          <i class="fa fa-retweet" aria-hidden="true"></i>
        </button>
        <audio id="beep"></audio>
      </div>
    );
  }
}

export default App;
