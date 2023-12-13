import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';

export function Comment(props) {
  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Name<button className='sort-btn'><SortByAlphaIcon onClick={() => props.sorting('name')} /></button></th>
          <th>Email<button className='sort-btn'><SortByAlphaIcon onClick={() => props.sorting('email')} /></button></th>
          <th>Body<button className='sort-btn'><SortByAlphaIcon onClick={() => props.sorting('body')} /></button></th>
          <th>Delete</th>
        </tr>
        {props.comments.map((i) => {
          return <tr key={i.id}>
            <td>{i.id}</td>
            <td>{i.name}</td>
            <td>{i.email}</td>
            <td>{i.body}</td>
            <td><button className='delete-btn' onClick={() => props.handleDelete(i.id)}><DeleteIcon /></button></td>
          </tr>
        })}

      </table>
    </div>
  )
}

export default Comment