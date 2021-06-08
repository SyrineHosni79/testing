import React, { Component } from "react";
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
          searchedBook:"",
          foundBooks:[]
        }  
        /* this.handleSearchedBookChange = this.handleSearchedBookChange.bind(this) */ //in constructor binding
    }
       
    handleSearchedISBNChange = (e)=>{   //inline binding
      const foundedBooks = this.state.books.filter((book)=>{
        return book.ISBN.toString().startsWith(e.target.value)
      })
      this.setState({
        searchedBook:e.target.value,
        foundBooks : foundedBooks
      })
    }
    handleSearchedTitleChange = (e) => {
      const foundedBooks= this.state.books.filter( (book)=>{
        return book.title.toUpperCase().includes(e.target.value.toUpperCase())
      })
      this.setState({
        searchedBook:e.target.value,
        foundBooks:foundedBooks
      })
    }
    handleSearchedAuthorChange = (e) => {
      
        const foundedBooks= this.state.books.filter( (book)=>{
          return book.author.toUpperCase().includes(e.target.value.toUpperCase())
        })
        this.setState({
          searchedBook:e.target.value,
          foundBooks:foundedBooks
        })
      }
    

     componentDidMount() {

        getBooks().then( (response) => {
    
            this.setState({books:response.data,

            foundBooks:response.data
            })
        })
    }
    render() {
      return (
        
        <div className="book">
          <div>
        <Grid container spacing={3} >
                <Grid item xs={12} sm={4}>
                  <SearchByISBN className="book-components" onAuthorChange={this.handleSearchedISBNChange} searchString={this.state.searchedBook}/>
                 </Grid>
                 <Grid item xs={12} sm={4}>
                  <SearchByTitle className="book-components" onTitleChange={this.handleSearchedTitleChange} searchString={this.state.searchedBook}/>
                 </Grid>
                 <Grid item xs={12} sm={4}>
                  <SearchByAuthor className="book-components" onAuthorChange={this.handleSearchedAuthorChange} searchString={this.state.searchedBook}/>
                 </Grid>
        </Grid>
        </div>
        <div>
          <h1>List Books :</h1>
            <Grid container spacing={3} className="BookList">
             { this.state.searchedBook !== "" &&(this.state.foundBooks.map( (element,index)=>{
              return (
                <Grid item xs={12} sm={2} key={index}>
                < MediaCard className="MediaCard" title={element.title} summary={element.summary}
                 author={element.author} image={element.image}/>
              </Grid>
              )
             }))} 
             { this.state.searchedBook === "" &&(this.state.books.map( (element,index)=>{
              return (
                <Grid item xs={12} sm={2} key={index}>
                < MediaCard className="MediaCard" title={element.title} summary={element.summary}
                 author={element.author} image={element.image}/>
              </Grid>
              )
             }))} 
            </Grid>
            </div>
            
        </div>
        
      );  
    }
  }
   