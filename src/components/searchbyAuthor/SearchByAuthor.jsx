import { Button, Grid, TextField } from '@material-ui/core';
import React, { Component } from 'react'
import getBooks from '../../xhr/getAllBooks';
import MediaCard from '../card/Card';

export default class SearchByAuthor extends Component {
    
  state={
    allBooks:[],
    searchedauthor:"",
    Bookbyauthor:[]
  }
  async componentDidMount() {
    getBooks().then( (response)=>{
      this.setState({allBooks:response.data}); 
    })
  }  
  onchangeauthor = (e) => {
        this.setState({searchedauthor:e.target.value})
        console.log("author",this.state.searchedauthor);
      };
      searchauthor = () => {
        let Bookbyauthor
      
        Bookbyauthor=this.state.allBooks.map( (i) => {
          console.log( i.author === this.state.searchedauthor )
          if (i.author === this.state.searchedauthor )
          return (
            
              <Grid item xs={6} sm={3}>
                < MediaCard className="MediaCard" title={i.title} summary={i.summary} author={i.author} image={i.image}/>
              </Grid>
            
        )
        })
        this.setState({Bookbyauthor:Bookbyauthor});
      };
    
    render() {
        return (
            <div>
                <h2>Find books by author   :</h2>
      
                <form  noValidate autoComplete="off">
                 <TextField id="standard-basic" label="Search by author " onChange={this.onchangeauthor } />
                 <br></br><br></br>
                 <Button variant="contained" onClick={this.searchauthor }>Search</Button>
                 </form>
                 <br></br><br></br>
                 <Grid container spacing={3} >
                 {this.state.Bookbyauthor}
                 </Grid>
            </div>
        )
    }
}
