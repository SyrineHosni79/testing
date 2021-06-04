import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchedBook from "../../components/searchedBook/SearchedBook";
import getBooks from "../../xhr/getAllBooks";
import SearchByISBN from "../../components/searchbyISBN/SearchByISBN" ;
import MediaCard from "../../components/card/Card";
import Grid from '@material-ui/core/Grid';

import './book.css';
export default class Book extends Component {
     
    constructor(props){
        super(props);
        this.state={
          books:[],
        }  
    }
    async componentDidMount() {

        getBooks().then( (response) => {
    
            this.setState({books:response.data})
          console.log("books",this.state.books)
        })
    }
    render() {
      return (
        <div className="Book">
            <Grid container spacing={3} className="BookList">
            {this.state.books.map( (element)=>{
              console.log("element",element);
              return (
                <Grid item xs={12} sm={2}>
                < MediaCard className="MediaCard" title={element.title} summary={element.summary} author={element.author} image={element.image}/>
              </Grid>
              )
            })} 
            </Grid>
            <div >
            <SearchByISBN />

            </div>
            
        </div>
        
      );  
    }
  }
   