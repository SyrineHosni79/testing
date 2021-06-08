import { Button, Grid, TextField } from '@material-ui/core';
import React, { Component } from 'react'
import getAllAuthors from '../../xhr/getAllAuthors';
import MediaCard from '../card/Card';

export default function SearchByAuthor(props){
    
 

  const onchangeAuthor = (e) => {
       props.onAuthorChange(e);
      };
  
   
        return (
            <div>
               <h2>Find book by Author  :</h2>
      
      <form  noValidate autoComplete="off">
      <TextField id="standard-basic" label="Search by Author" onChange={onchangeAuthor} />
         <br></br><br></br>
      </form>
         </div>
        )
    
}
