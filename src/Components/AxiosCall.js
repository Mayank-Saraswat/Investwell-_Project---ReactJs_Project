import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";
import Comment from "./Comment";
import Users from "./Users";
import { BrowserRouter, Link } from 'react-router-dom';
let renderType = "posts";

class AxiosCall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
    }
  }

  handleDelete = (id) => {
    this.setState({
      item: this.state.item.filter(it => it.id !== id),
    })
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) =>
        this.setState({
          item: res.data,
        })
      )
  }

  changeState = (rendervalue) => {
    if (renderType !== rendervalue) {
      axios
        .get(`https://jsonplaceholder.typicode.com/${rendervalue}`)
        .then((res) =>
          this.setState({
            item: res.data,
          }))
      renderType = rendervalue
    }
  }

  //functions for sorting
  compareBy = (key) => {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    }
  }

  sortBy = (key) => {
    let arrayCopy = [...this.state.item];
    arrayCopy.sort(this.compareBy(key));
    this.setState({ item: arrayCopy });
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <Link to='/posts'><button
            className="btn"
            onClick={() => this.changeState("posts")}
          >
            Posts
          </button></Link>

          <Link to="/comments"><button
            className="btn"
            onClick={() => this.changeState("comments")}
          >
            Comments
          </button></Link>

          <Link to='/users'><button
            className="btn"
            onClick={() => this.changeState("users")}
          >
            Users
          </button></Link>
        </BrowserRouter>

        <div>
          <h1>{(renderType).toUpperCase()}</h1>

          {/* Showing data in table form */}
          {renderType === 'posts' && <Post handleDelete={this.handleDelete} posts={this.state.item} sorting={this.sortBy} />}
          {renderType === 'comments' && <Comment handleDelete={this.handleDelete} comments={this.state.item} sorting={this.sortBy} />}
          {renderType === 'users' && <Users handleDelete={this.handleDelete} user={this.state.item} sorting={this.sortBy} />}
        </div>
      </>
    );
  }
}

export default AxiosCall;