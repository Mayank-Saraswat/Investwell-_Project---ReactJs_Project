import React, { Component } from 'react'

export class Post extends Component {
    
  render() {
    const posts = this.props.posts;
    return (
        
      <div>
        <table>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>body</th>
                <th>Delete</th>
            </tr>
            {posts.map(i=>
                <tr>
                    <td>{i.id}</td>
                    <td>{i.title}</td>
                    <td>{i.body}</td>
                    <td><button className= 'delete-btn' onClick={()=> this.props.handleDelete(i.id)}>Delete</button></td>
                    </tr>
            )}
        
        </table>
      </div>
    )
  }
}

export default Post
