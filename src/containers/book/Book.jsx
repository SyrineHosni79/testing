import React, { useState } from "react";
import getBooks from "../../xhr/getAllBooks";
import SearchByISBN from "../../components/searchbyISBN/SearchByISBN" ;
import MediaCard from "../../components/card/Card";
import Grid from '@material-ui/core/Grid';
import SearchByTitle from '../../components/searchbyTitle/SearchByTitle'
import './book.css';
import SearchByAuthor from "../../components/searchbyAuthor/SearchByAuthor";
import { useEffect } from "react";
import PaginationTool from '../../components/pagintion/pagination';

export default function Book ()  {
    const [books, setbooks] = useState([]);
    const [searchedBook, setsearchedBook] = useState("");
    const [foundBooks, setfoundBooks] = useState([]); 
    const [itemsPerPage, setitemsPerPage] = useState(5);
    const [currentPage, setcurrentPage] = useState(1);
        /* this.handleSearchedBookChange = this.handleSearchedBookChange.bind(this) */ //in constructor binding
    
        const handleSearchedISBNChange = (e)=>{   //inline binding
      const foundedBooks = books.filter((book)=>{
        return book.ISBN.toString().startsWith(e.target.value)
      })
        setcurrentPage(1);
        setsearchedBook(e.target.value);
        setfoundBooks(foundedBooks);
    }
    const handleSearchedTitleChange = (e) => {
      const foundedBooks= books.filter( (book)=>{
        return book.title.toUpperCase().includes(e.target.value.toUpperCase())
      })
        setcurrentPage(1);
        setsearchedBook(e.target.value);
        setfoundBooks(foundedBooks);
    }
    const handleSearchedAuthorChange = (e) => {
      const foundedBooks=books.filter( (book)=>{
          return book.author.toUpperCase().includes(e.target.value.toUpperCase())
        })
        setcurrentPage(1);
        setsearchedBook(e.target.value);
        setfoundBooks(foundedBooks);
      }
     useEffect(()=> {
        getBooks().then( (response) => {
            setbooks(response.data);
            setfoundBooks(response.data)
        })
    },[])
    const changePage = (value)=> {
      //take page number
       setcurrentPage(value);
      console.log("valueee",currentPage);
    }
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems=foundBooks.slice(indexOfFirstItem, indexOfLastItem);
    let totalPage=Math.ceil(foundBooks.length/itemsPerPage)
    console.log("indexfirst",indexOfFirstItem,"indexlast",indexOfLastItem)
      return (
      <div className="book">
        <div>
          <Grid container spacing={3} >
                <Grid className="book-components" item xs={12} sm={4}>
                  <SearchByISBN onAuthorChange={handleSearchedISBNChange} searchString={searchedBook}/>
                 </Grid>
                 <Grid className="book-components"  item xs={12} sm={4}>
                  <SearchByTitle onTitleChange={handleSearchedTitleChange} searchString={searchedBook}/>
                 </Grid>
                 <Grid className="book-components" item xs={12} sm={4}>
                  <SearchByAuthor onAuthorChange={handleSearchedAuthorChange} searchString={searchedBook}/>
                 </Grid>
          </Grid>
        </div>
        <div>
          <h1>List Books :</h1>
            <Grid container spacing={3} className="BookList">
             {currentItems?.map( (element,index)=>{
              return (
                <Grid className="book-element" item xs={12} sm={2} key={index}>
                < MediaCard className="MediaCard" isbn={element.ISBN}  title={element.title} summary={element.summary}
                 author={element.author} image={element.image} type="book"/>
              </Grid>
              )
             })}
            </Grid> 
         </div>
         <PaginationTool 
         count={totalPage} 
         onChange={changePage}
         currentPage={currentPage}
         />
      </div>
      );  
  }
   