import React, { Component, useEffect, useState } from 'react'
import MediaCard from '../../components/card/Card';
import Grid from '@material-ui/core/Grid';
import getAllAuthors from '../../xhr/getAllAuthors';
import './Author.css';
import SearchByName from '../../components/searchbyName/SearchByName';
import PaginationTool from '../../components/pagintion/PaginationTool';

export default function Author () {

   const [searchedAuthor,setSearchedAuthor]=useState("");
   const [foundAuthors,setFoundAuthors]=useState([]);
   const [authors,setAuthors]=useState([]);
   const [itemsPerPage, setitemsPerPage] = useState(5);
   const [currentPage, setcurrentPage] = useState(1);
        
      useEffect(   ()  => {
          getAllAuthors().then( (response) => {
          setAuthors(response.data);
          setFoundAuthors(response.data)
          console.log("authors",authors);
          
        })
    },[]);

    const onHandleAuthorChange = (e) => {
      const foundedAuthors =authors.filter( (author)=>{
        return author.name.toUpperCase().includes(e.target.value.toUpperCase())
      })
      setcurrentPage(1);
      setSearchedAuthor(e.target.value)
      setFoundAuthors(foundedAuthors);
    }
  
    const changePage = (value)=> {
      //take page number
       setcurrentPage(value);
      console.log("valueee",currentPage);
    }
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems=foundAuthors.slice(indexOfFirstItem, indexOfLastItem);
    let totalPage=Math.ceil(foundAuthors.length/itemsPerPage)
    console.log("indexfirst",indexOfFirstItem,"indexlast",indexOfLastItem)
  return (
      <div className="author-container">
        <div>
        <Grid container spacing={3} >
              <Grid className="author-elements" item xs={12} sm={3} >
                <SearchByName onNameChange={onHandleAuthorChange} searchString={searchedAuthor}/>
              </Grid>
                 
        </Grid>
        </div>
        <div>
          <h2>List Authors :</h2>
            <Grid container spacing={3} className="author-list">
            {currentItems.map( (element)=>{
              return (
                <Grid className="author-components" item xs={12} sm={2} key={element.id}>
                < MediaCard className="MediaCard" title={element.name} summary={element.biography}
                  image={element.image} id={element.id} type="author"/>
                </Grid>
              )
            })}
            </Grid>
            <PaginationTool 
            count={totalPage}
             onChange={changePage}
             currentPage={currentPage}
            />
        </div>
    </div>
      );  
  }

