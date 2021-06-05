import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchedBook from "../../components/searchedBook/SearchedBook";
import getBooks from "../../xhr/getAllBooks";
import SearchByISBN from "../../components/searchbyISBN/SearchByISBN" ;
import MediaCard from "../../components/card/Card";
import Grid from '@material-ui/core/Grid';
import SearchByTitle from '../../components/searchbyTitle/SearchByTitle'
import './book.css';
import SearchByAuthor from "../../components/searchbyAuthor/SearchByAuthor";


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
          <div>
        <Grid container spacing={3} >
                <Grid item xs={12} sm={3}>
                  <SearchByISBN />
                 </Grid>
                 <Grid item xs={12} sm={3}>
                  <SearchByTitle />
                 </Grid>
                 <Grid item xs={12} sm={6}>
                  <SearchByAuthor />
                 </Grid>
        </Grid>
        </div>
        <div>
          <h1>List Books :</h1>
            <Grid container spacing={3} className="BookList">
            {this.state.books.map( (element)=>{
              console.log("element",element);
              return (
                <Grid item xs={12} sm={2}>
                < MediaCard className="MediaCard" title={element.title} summary={element.summary}
                 author={element.author} image={element.image}/>
              </Grid>
              )
            })} 
            </Grid>
            </div>
            
        </div>
        
      );  
    }
  }
   