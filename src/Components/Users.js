import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';

export function Users (props) {
    return (
      <>
        <table>
            <tr>
                <th>id</th>
                <th>name<button className='sort-btn'><SortByAlphaIcon onClick = {() => props.sorting('name')}/></button></th>
                <th>username<button className='sort-btn'><SortByAlphaIcon onClick = {() => props.sorting('username')}/></button></th>
                <th>email<button className='sort-btn'><SortByAlphaIcon onClick = {() => props.sorting('email')}/></button></th>
                <th>Delete</th>
            </tr>
            {props.user.map(i=>
                <tr>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.username}</td>
                    <td>{i.email}</td>
                    <td><button className= 'delete-btn' onClick={()=> props.handleDelete(i.id)}><DeleteIcon/></button></td>
                    </tr>
            )}
        
        </table>
      </>
    )
  }

export default Users
