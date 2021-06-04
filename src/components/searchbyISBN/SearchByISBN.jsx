import { Button, List, ListItemText, TextField, Typography } from '@material-ui/core';
import React, { Component } from 'react'
import getBookByISBN from "../../xhr/getBookByISBN"

export default class SearchByISBN extends Component {
  state={
    bookDetails:{},
    searchedISBN:""
  } 

  async componentDidMount() {
    
  }

  onchangeISBN = (e) => {
        this.setState({searchedISBN:e.target.value})
        console.log("ISBN",this.state.searchedISBN);
      };
  searchISBN = () => {
        getBookByISBN(this.state.searchedISBN).then( (response)=>{
          this.setState({bookDetails:response.data});
          console.log("book Details",this.state.bookDetails);
        })

        };
    
    render() {
        return (
            <div>
               <h2>Find book by ISBN  :</h2>
      
      <form  noValidate autoComplete="off">
         <TextField id="standard-basic" label="Search by ISBN" onChange={this.onchangeISBN} />
         <br></br><br></br>
        <Button variant="contained" onClick={this.searchISBN}>Search</Button>
      </form>
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
       
       </div>):null}
            </div>
        )
    }
}
