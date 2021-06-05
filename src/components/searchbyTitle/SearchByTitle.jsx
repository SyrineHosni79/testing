import { Button, TextField } from '@material-ui/core';
import React, { Component } from 'react'
import getBooks from '../../xhr/getAllBooks';
import MediaCard from '../card/Card';

export default class SearchByTitle extends Component {

  state={
    allBooks:[],
    searchedtitle:"",
    Bookbytitle:[]
  }
  async componentDidMount() {
    getBooks().then( (response)=>{
      this.setState({allBooks:response.data}); 
    })
  }  
    onchangetitle = (e) => {
        this.setState({searchedtitle:e.target.value})
        console.log("title",this.state.searchedtitle);
      };
      searchtitle = () => {
        let Bookbytitle
      
        Bookbytitle=this.state.allBooks.map( (i) => {
          if ( i.title == this.state.searchedtitle )
          {
            console.log(true)
          return (
            <div >
                < MediaCard className="MediaCard" title={i.title} summary={i.summary} author={i.author} image={i.image}/>
            </div>
        )
          } else console.log(false)
        })
      
        this.setState({Bookbytitle:Bookbytitle});
      };
    
    render() {
        return (
            <div>
                 <h2>Find book by title   :</h2>
      
      <form  noValidate autoComplete="off">
         <TextField id="standard-basic" label="Search by title " onChange={this.onchangetitle } />
         <br></br><br></br>
        <Button variant="contained" onClick={this.searchtitle }>Search</Button>
      </form>
      <br></br><br></br>
       {this.state.Bookbytitle }

            </div>
        )
    }
}
