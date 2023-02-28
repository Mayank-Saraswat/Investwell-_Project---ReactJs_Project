import React, { Component } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';

export class Users extends Component {
  render() {
    const user = this.props.user;
    return (
      <div>
        <table>
            <tr>
                <th>id</th>
                <th>name<button className='sort-btn'><SortByAlphaIcon onClick = {() => this.props.sorting('name')}/></button></th>
                <th>username<button className='sort-btn'><SortByAlphaIcon onClick = {() => this.props.sorting('username')}/></button></th>
                <th>email<button className='sort-btn'><SortByAlphaIcon onClick = {() => this.props.sorting('email')}/></button></th>
                <th>Delete</th>
            </tr>
            {user.map(i=>
                <tr>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.username}</td>
                    <td>{i.email}</td>
                    <td><button className= 'delete-btn' onClick={()=> this.props.handleDelete(i.id)}><DeleteIcon/></button></td>
                    </tr>
            )}
        
        </table>
      </div>
    )
  }
}

export default Users
