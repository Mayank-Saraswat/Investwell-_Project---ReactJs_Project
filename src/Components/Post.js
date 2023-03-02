import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';

export function Post (props) {
    // const posts = this.props.posts;
    return (
      <>
        <table>
            <tr>
                <th>id</th>
                <th>title<button className='sort-btn'><SortByAlphaIcon onClick = {() => props.sorting('title')}/></button></th>
                <th>body<button className='sort-btn'><SortByAlphaIcon onClick = {() => props.sorting('body')}/></button></th>
                <th>Delete</th>
            </tr>
            {props.posts.map(i=>
                <tr>
                    <td>{i.id}</td>
                    <td>{i.title}</td>
                    <td>{i.body}</td>
                    <td><button className= 'delete-btn' onClick={()=> props.handleDelete(i.id)}><DeleteIcon/></button></td>
                    </tr>
            )}
        
        </table>
      </>
    )
  }

export default Post
