import Nav from "./Nav";
import Users from "./Users";
import store from "./store";
import React, { Component } from "react";
import { render } from "react-dom";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }
  async componentDidMount() {
    const users = (await axios.get("/api/users")).data;
    const unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
    store.dispatch({ type: "LOAD_USERS", users });

    store.dispatch({ type: "LOADED" });
  }
  render() {
    const { users, loading } = this.state;
    if (loading) {
      return "....loading";
    }
    return (
      <div>
        <Nav />
        <Users />
      </div>
    );
  }
}

render(<App />, document.querySelector("#root"));
