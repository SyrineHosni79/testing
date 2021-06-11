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
    }
    state={searchedAuthor:"",
          foundAuthors:[],
          authors:[]
        }
    async componentDidMount() {

        getAllAuthors().then( (response) => {
          this.setState({authors:response.data})
          console.log("authors",this.state.authors)
        })
    }
    onHandleAuthorChange = (e) => {
      const foundedAuthors =this.state.authors.filter( (author)=>{
        return author.name.toUpperCase().includes(e.target.value.toUpperCase())
      })
      this.setState({searchedAuthor:e.target.value,
                     foundAuthors:foundedAuthors});
    }
    render() {
      return (
        
    <div className="author-container">
        <div>
        <Grid container spacing={3} >
              <Grid className="author-components"item xs={12} sm={3} >
                <SearchByName onNameChange={this.onHandleAuthorChange} searchString={this.state.searchedAuthor}/>
              </Grid>
                 
        </Grid>
        </div>
        <div>
          <h2>List Authors :</h2>
            <Grid container spacing={3} className="author-list">
            {this.state.searchedAuthor ==="" &&(this.state.authors.map( (element)=>{
              return (
                <Grid className="author-components" item xs={12} sm={2} key={element.id}>
                < MediaCard className="MediaCard" title={element.name} summary={element.biography}
                  image={element.image} id={element.id} type="author"/>
                </Grid>
              )
            }))}
            {this.state.searchedAuthor !== ""&&(this.state.foundAuthors.map( (element)=>{
               return (
                <Grid item xs={12} sm={2} key={element.id}>
                < MediaCard className="MediaCard" title={element.name} summary={element.biography}
                  image={element.image} type="author"/>
                </Grid>
               )
            }))} 
            </Grid>
        </div>
    </div>
      );  
    }
  }

