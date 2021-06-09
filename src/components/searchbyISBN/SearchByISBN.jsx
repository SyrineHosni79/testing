import { Button, List, ListItemText, TextField, Typography } from '@material-ui/core';
import React, { Component } from 'react'
import getBooks from '../../xhr/getAllBooks';
import getBookByISBN from "../../xhr/getBookByISBN"
import MediaCard from '../card/Card';
import './SearchByISBN.css'

export default function SearchByISBN (props) {
  
  const onchangeAuthor = (e) => {
    props.onAuthorChange(e);
        }
    
   
        return (
            <div className="search-byisbn-component">
               <h2 >Find book by ISBN  :</h2>
              <form  noValidate autoComplete="off">
              <TextField id="standard-basic" label="Search by ISBN" onChange={onchangeAuthor} />
              </form>
              <br></br><br></br>
      
         </div>
        )
}
