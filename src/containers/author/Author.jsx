import React, { Component } from 'react'
import MediaCard from '../../components/card/Card';
import Grid from '@material-ui/core/Grid';
import getAllAuthors from '../../xhr/getAllAuthors';
import SearchById from '../../components/searchbyId/SearchById';
import './Author.css';
import SearchByName from '../../components/searchbyName/SearchByName';

export default class Author extends Component {
    constructor(props){
        super(props);
        this.state={
          authors:[],
        }  
    }
    async componentDidMount() {

        getAllAuthors().then( (response) => {
    
            this.setState({authors:response.data})
          console.log("authors",this.state.authors)
        })
    }
    render() {
      return (
        
    <div className="Author">
        <div>
        <Grid container spacing={3} >
                <Grid item xs={12} sm={3}>
                  <SearchById />
                </Grid>
                <Grid item xs={12} sm={3}>
                <SearchByName />
                </Grid>
                 
        </Grid>
        </div>
        <div>
          <h1>List Authors :</h1>
            <Grid container spacing={3} className="BookList">
            {this.state.authors.map( (element)=>{
              console.log("element",element);
              return (
                <Grid item xs={12} sm={2}>
                < MediaCard className="MediaCard" title={element.name} summary={element.biography}
                  image={element.image}/>
                </Grid>
              )
            })} 
            </Grid>
        </div>
            
    </div>
        
      );  
    }
  }

