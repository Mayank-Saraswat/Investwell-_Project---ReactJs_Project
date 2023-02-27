import React, { Component } from 'react'

export class Users extends Component {
  render() {
    const user = this.props.user;
    return (
      <div>
        <table>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>username</th>
                <th>email</th>
                <th>Delete</th>
            </tr>
            {user.map(i=>
                <tr>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.username}</td>
                    <td>{i.email}</td>
                    <td><button className= 'delete-btn' onClick={()=> this.props.handleDelete(i.id)}>Delete</button></td>
                    </tr>
            )}
        
        </table>
      </div>
    )
  }
}

export default Users
