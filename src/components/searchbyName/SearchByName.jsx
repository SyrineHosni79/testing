import { Button, TextField } from '@material-ui/core';
import React, { Component } from 'react'
import getAllAuthors from '../../xhr/getAllAuthors';
import MediaCard from '../card/Card';

export default class SearchById extends Component {
    state={
        searchedName:"",
        allAuthors:[],
        authorByName:[]
      } 
    
      async componentDidMount() {
        getAllAuthors().then( (response)=>{
          this.setState({allAuthors:response.data}); 
          console.log(this.state.allAuthors)
        })
            
      }
    
      onchangeName = (e) => {
            this.setState({searchedName:e.target.value})
            console.log("Id",this.state.searchedName);
          };
      searchName = () => {
            let authorByName = [];
            authorByName=this.state.allAuthors.map( (i) => {
          
              if (i.name == this.state.searchedName )
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
            this.setState({authorByName:authorByName});
          }
        
        render() {
            return (
                <div>
                   <h2>Find author by Name  :</h2>
          
          <form  noValidate autoComplete="off">
             <TextField id="standard-basic" label="Search by Name" onChange={this.onchangeName} />
             <br></br><br></br>
            <Button variant="contained" onClick={this.searchName}>Search</Button>
          </form>
          <br></br><br></br>
          
    { this.state.authorByName}
    <br></br><br></br>
             </div>
            )
        }
    }
    