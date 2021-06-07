import { Button, Grid, TextField } from '@material-ui/core';
import React, { Component } from 'react'
import getAllAuthors from '../../xhr/getAllAuthors';
import MediaCard from '../card/Card';

export default class SearchByAuthor extends Component {
    
  state={
    searchedId:"",
    allAuthors:[],
    authorById:[]
  } 

  async componentDidMount() {
    getAllAuthors().then( (response)=>{
      this.setState({allAuthors:response.data}); 
    })
        
  }

  onchangeId = (e) => {
        this.setState({searchedId:e.target.value})
        console.log("ISBN",this.state.searchedId);
      };
  searchId = () => {
        let authorById = [];
        authorById=this.state.allAuthors.map( (i) => {
      
          if (<i className="Id"></i> == this.state.searchedId )
         {
          console.log(true)
          return(
            <div >
            < MediaCard className="MediaCard" title={i.name} summary={i.biography}  image={i.image}/> 
             </div>
          );
          
         }
           else
          console.log(false)
        })
        this.setState({authorById:authorById});
      }
    
    render() {
        return (
            <div>
               <h2>Find author by Id  :</h2>
      
      <form  noValidate autoComplete="off">
         <TextField id="standard-basic" label="Search by Id" onChange={this.onchangeId} />
         <br></br><br></br>
        <Button variant="contained" onClick={this.searchId}>Search</Button>
      </form>
      <br></br><br></br>

{ this.state.authorById}
<br></br><br></br>
         </div>
        )
    }
}
