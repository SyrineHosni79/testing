import { Button, TextField } from '@material-ui/core';
import React, { Component } from 'react'
import getAllAuthors from '../../xhr/getAllAuthors';
import MediaCard from '../card/Card';
import log from '../../utils/logger'

export default class SearchById extends Component {
    state={
        searchedId:"",
        allAuthors:[],
        authorById:[]
      } 
      async componentDidMount() {
        getAllAuthors().then( (response)=>{
          this.setState({allAuthors:response.data}); 
          log(this.state.allAuthors)
        })
      }
      onchangeId = (e) => {
            this.setState({searchedId:e.target.value})
            log("Id",this.state.searchedId);
          };
      searchId = () => {
            let authorById = [];
            authorById=this.state.allAuthors.map( (i) => {
              if (i.id == this.state.searchedId )
             {
               return(
                <div >
                < MediaCard className="MediaCard" title={i.name} summary={i.biography}  image={i.image}/> 
                 </div>
               );
             }
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
        </div>
            )
        }
    }
    