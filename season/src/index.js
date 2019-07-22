import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";
class App extends React.Component {
  state = { lat: null, errorMassage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      //if u wanna change value of state use setState
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMassage: err.message })
    );
  }
  renderContent() {
    if (this.state.errorMassage && !this.state.lat) {
      return <div>Errorr : {this.state.errorMassage}</div>;
    }
    if (!this.state.errorMassage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Loader message="Please accept location request" />;
  }

  //react says we gotta define render for clas!!    d
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

//componentdidupdate
// it will be called a little after render got called

ReactDOM.render(<App />, document.querySelector("#root"));
