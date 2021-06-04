import { Button, List, ListItemText, TextField, Typography } from '@material-ui/core';
import React, { Component } from 'react'
import getBooks from '../../xhr/getAllBooks';
import getBookByISBN from "../../xhr/getBookByISBN"
import MediaCard from '../card/Card';
import './SearchByISBN'

export default class SearchByISBN extends Component {
  state={
    bookDetails:{},
    searchedISBN:"",
    allBooks:[],
    bookByISBN:[]
  } 

  async componentDidMount() {
    getBooks().then( (response)=>{
      this.setState({allBooks:response.data}); 
    })
        
  }

  onchangeISBN = (e) => {
        this.setState({searchedISBN:e.target.value})
        console.log("ISBN",this.state.searchedISBN);
      };
  searchISBN = () => {
    /*
        getBookByISBN(this.state.searchedISBN).then( (response)=>{
          this.setState({bookDetails:response.data});
          console.log("book Details",this.state.bookDetails);
        })
    */  
        let bookByISBN = [];
        bookByISBN=this.state.allBooks.map( (i) => {
      
          if (i.ISBN == this.state.searchedISBN )
         {
          console.log(true)
          return(
            <div >
            < MediaCard className="MediaCard" title={i.title} summary={i.summary} author={i.author} image={i.image}/> 
             </div>
          );
          
         }
           else
          console.log(false)
        })
        this.setState({bookByISBN:bookByISBN});
      }
    
    render() {
        return (
            <div>
               <h2>Find book by ISBN  :</h2>
      
      <form  noValidate autoComplete="off">
         <TextField id="standard-basic" label="Search by ISBN" onChange={this.onchangeISBN} />
         <br></br><br></br>
        <Button variant="contained" onClick={this.searchISBN}>Search</Button>
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

{ this.state.bookByISBN}
<br></br><br></br>
         </div>
        )
    }
}
