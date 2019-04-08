import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

interface state {
  msg: string;
  roomNr: string;
}

class App extends React.Component<{}, state> {
  constructor(props) {
    super(props);

    this.state = {
      msg: "",
      roomNr: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeRoomNr = this.handleChangeRoomNr.bind(this);
  }

  handleChange(e) {
    let input = e.target.value;
    let currentThis = this;
    // check for #z
    // toLower
    let regexRoomNr = /#z(\d{1,7}) /;
    let m = regexRoomNr.exec(input);
    if (m !== null) {
      this.setState({ roomNr: m[1] });
      // replace with space
      input = input.replace(m[0], "");
    }

    this.setState({
      msg: input
    });
  }
  handleChangeRoomNr(e) {
    this.setState({ roomNr: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <div>
          <p>
            Message
            <br />
            {this.state.msg}
          </p>
          <textarea
            rows={4}
            cols={50}
            value={this.state.msg}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <p>
            RoomNr
            <br />
            {this.state.roomNr}
          </p>
          <input value={this.state.roomNr} onChange={this.handleChangeRoomNr} />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
