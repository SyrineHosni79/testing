import { TextField } from '@material-ui/core';
import React from 'react'

export default function SearchByAuthor(props){
  const onchangeAuthor = (e) => {
       props.onAuthorChange(e);
      };
  return (
            <div className={props.className}>
               <h2>Find book by Author  :</h2>
      <form  noValidate autoComplete="off">
      <TextField id="standard-basic" label="Search by Author" onChange={onchangeAuthor} />
         <br></br><br></br>
      </form>
         </div>
        )
}
