import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";
import Comment from "./Comment";
import Users from "./Users";

class AxiosCall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderType: 'posts',
            item: [],
        };
    }
    handleDelete =(id) =>{
        console.log(id);
      const newList = this.state.item.filter(it=> it.id !== id);
      this.setState({
         item: newList,
      })
    }
    
    componentDidMount() {
        console.log("componentDidMountCalled", this.state.renderType);

    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) =>
        this.setState({
          item: res.data,
        })
      );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentdidUpdate", this.state.renderType);
    console.log(this.state.item);
    if (prevState.renderType !== this.state.renderType) {
      axios
        .get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
        .then((res) =>
          this.setState({
            item: res.data,
          })
        );
    }
  }


  render() {
    return (
      <div>
        <button
          className="btn"
          onClick={() => this.setState({ renderType: "posts" })}
        >
          Posts
        </button>

        <button
          className="btn"
          onClick={() => this.setState({ renderType: "comments" })}
        >
          Comments
        </button>

        <button
          className="btn"
          onClick={() => this.setState({ renderType: "users" })}
        >
          Users
        </button>

        <div>
          <h1>{(this.state.renderType).toUpperCase()}</h1>
          
          {/* Showing data in string form */}
          {/* {this.state.item.map((item) => {    
            return <pre key={item.id}>{JSON.stringify(item)}</pre>;   
          })} */}

          {/* Showing data in table form */}
          {this.state.renderType === 'posts' && <Post handleDelete ={this.handleDelete} posts={this.state.item}/>}  
          {this.state.renderType === 'comments' && <Comment handleDelete ={this.handleDelete} comments = {this.state.item}/>}
          {this.state.renderType === 'users' && <Users handleDelete ={this.handleDelete} user = {this.state.item}/>}
        </div>
      </div>
    );
  }
}

export default AxiosCall;
