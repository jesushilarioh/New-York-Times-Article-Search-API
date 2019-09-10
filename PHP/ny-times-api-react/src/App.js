import React, { Component } from "react";
import Form from "./component/Form";
import Articles from "./component/Articles";
import Footer from "./component/Footer";

class App extends Component {
  state = {
    articles: []
  }

  results = (data) => {
    this.setState({ articles: data });
  }

  render() {
    return (
      <div className="App container">
        <h1 className="main-title">New York Times | Article Search</h1>
        <Form results={this.results} />
        <h4>Results for ...</h4>
        <Articles articles={ this.state.articles }/>
        <Footer />
      </div>
    );
  }
}

export default App;
