import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";
import Comment from "./Comment";
import Users from "./Users";
import {BrowserRouter, Link} from 'react-router-dom';

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

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("componentdidUpdate", this.state.renderType);
  //   console.log(this.state.item);
  //   if (prevState.renderType !== this.state.renderType) {
  //     axios
  //       .get(`https://jsonplaceholder.typicode.com/${rendervalue}`)
  //       .then((res) =>
  //         this.setState({
  //           renderType : rendervalue,
  //           item: res.data,
  //         })
  //       );
  //   }
  // }
  
  changeState =(rendervalue) =>{
    axios
        .get(`https://jsonplaceholder.typicode.com/${rendervalue}`)
        .then((res) =>
          this.setState({
            renderType : rendervalue,
            item: res.data,
          })
        );
  }

  //functions for sorting
  compareBy = (key) => {
    return function(a, b) {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
    };
  };
   
  sortBy = (key) => {
    let arrayCopy = [...this.state.item];
    arrayCopy.sort(this.compareBy(key));
    this.setState({item: arrayCopy});
  };

  render() {
    return (
      <div>
        <BrowserRouter>
        <Link to='/posts'><button
          className="btn"
          onClick={() => this.changeState( "posts" )}
        >
          Posts
        </button></Link>

        <Link to="/comments"><button
          className="btn"
          onClick={() => this.changeState( "comments" )}
        >
          Comments
        </button></Link>

        <Link to='/users'><button
          className="btn"
          onClick={() => this.changeState("users" )}
        >
          Users
        </button></Link>
        </BrowserRouter>
        
        <div>
          <h1>{(this.state.renderType).toUpperCase()}</h1>
          
          {/* Showing data in string form */}
          {/* {this.state.item.map((item) => {    
            return <pre key={item.id}>{JSON.stringify(item)}</pre>;   
          })} */}

          {/* Showing data in table form */}
          {this.state.renderType === 'posts' && <Post handleDelete ={this.handleDelete} posts={this.state.item} sorting = {this.sortBy}/>}  
          {this.state.renderType === 'comments' && <Comment handleDelete ={this.handleDelete} comments = {this.state.item} sorting = {this.sortBy}/>}
          {this.state.renderType === 'users' && <Users handleDelete ={this.handleDelete} user = {this.state.item} sorting = {this.sortBy}/>}
        </div>
      </div>
    );
  }
}

export default AxiosCall;
