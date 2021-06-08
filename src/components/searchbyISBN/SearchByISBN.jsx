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
      {/*
       {this.state.bookDetails.book?
       (<div>
       <Typography >title:{this.state.bookDetails.book.title}</Typography>
       <Typography >author:{this.state.bookDetails.book.author.name}</Typography>
       <Typography>summary:{this.state.bookDetails.book.summary}</Typography>
       <Typography>image:{this.state.bookDetails.book.image}</Typography>
       <Typography>links:</Typography>
       { this.state.bookDetails.links.map( (x)=>{
         console.log(x);
         return(
         <div>
         <p>rel:{x.rel}</p>
         <p>href:{x.href}</p> 
          </div>
         )    
       }
       )}
       
      </div>):null}  */}
         </div>
        )
}
