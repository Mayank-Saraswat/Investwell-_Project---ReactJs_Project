import React, { Component } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';

export class Comment extends Component {
  render() {
    const comments = this.props.comments;
    return (
      <div>
        <table>
            <tr>
                <th>id</th>
                <th>name<button className='sort-btn'><SortByAlphaIcon onClick = {() => this.props.sorting('name')}/></button></th>
                <th>email<button className='sort-btn'><SortByAlphaIcon onClick = {() => this.props.sorting('email')}/></button></th>
                <th>body<button className='sort-btn'><SortByAlphaIcon onClick = {() => this.props.sorting('body')}/></button></th>
                <th>Delete</th>
            </tr>
            {comments.map(i=>
                <tr>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                    <td>{i.body}</td>
                    <td><button className= 'delete-btn' onClick={()=> this.props.handleDelete(i.id)}><DeleteIcon/></button></td>
                    </tr>
            )}
        
        </table>
      </div>
    )
  }
}

export default Comment
