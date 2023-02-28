import React, { Component } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';

export class Post extends Component {
    
  render() {
    const posts = this.props.posts;
    return (
        
      <div>
        <table>
            <tr>
                <th>id</th>
                <th>title<button className='sort-btn'><SortByAlphaIcon onClick = {() => this.props.sorting('title')}/></button></th>
                <th>body<button className='sort-btn'><SortByAlphaIcon onClick = {() => this.props.sorting('body')}/></button></th>
                <th>Delete</th>
            </tr>
            {posts.map(i=>
                <tr>
                    <td>{i.id}</td>
                    <td>{i.title}</td>
                    <td>{i.body}</td>
                    <td><button className= 'delete-btn' onClick={()=> this.props.handleDelete(i.id)}><DeleteIcon/></button></td>
                    </tr>
            )}
        
        </table>
      </div>
    )
  }
}

export default Post
