import store from "./store";
import React, { Component } from "react";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: store.getState().users,
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        users: store.getState().users,
      });
    });
  }
  render() {
    const { users } = this.state;
    return (
      <div>
        <ul>
          {users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Users;
