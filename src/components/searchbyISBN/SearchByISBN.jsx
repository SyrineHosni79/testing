import { TextField } from '@material-ui/core';
import React from 'react'
import './SearchByISBN.css'

export default function SearchByISBN (props) {
  
  const onchangeAuthor = (e) => {
    props.onAuthorChange(e);
        }
    
   
        return (
            <div className={props.className}>
               <h2 >Find book by ISBN  :</h2>
              <form  noValidate autoComplete="off">
              <TextField id="standard-basic" label="Search by ISBN" onChange={onchangeAuthor} />
              </form>      
         </div>
        )
}
