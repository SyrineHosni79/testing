import { Grid } from '@material-ui/core';
import React, { Component } from 'react'
import MediaCard from '../../components/card/Card';
import { getData } from '../../xhr/httprequest';

export default class Home extends Component {

    state={
        highlightedBooks:[],
        highlightedAuthors:[],
        linkss:[],
        allData:[]
      } 
    
      async componentDidMount() {
          const p="";
        getData(p).then( (response)=>{
          this.setState({allData:response.data});
          const data=response.data;
          console.log(this.state.allData) ;
          this.setState({highlightedAuthors:data.highlightedAuthors});
          console.log(this.state.highlightedAuthors)
          this.setState({highlightedBooks:data.highlightedBooks})
          console.log(this.state.highlightedBooks);
          this.setState({linkss:data.links})
          console.log(this.state.linkss);
        })
            
      }
    
    render() {
        return (
            <div>
          <h2>highlighted Books :</h2>
            <Grid container spacing={3} >
            {this.state.highlightedBooks.map( (element)=>{
              return (
                <Grid item xs={12} sm={3}>
                < MediaCard className="MediaCard" title={element.title} summary={element.summary}
                 author={element.author} image={element.image}/>
              </Grid>
              )
            })} 
            </Grid>
            <h2>highlighted Authors :</h2>
            <Grid container spacing={3} >
            {this.state.highlightedAuthors.map( (element)=>{
              return (
                <Grid item xs={12} sm={3}>
                < MediaCard className="MediaCard" title={element.name} summary={element.biography}
                  image={element.image}/>
              </Grid>
              )
            })} 
            </Grid>
            <h3> The available links to the next steps :</h3>
            <Grid container spacing={3} >
            {this.state.linkss.map( (element)=>{
              return (
                <Grid item xs={12} sm={3}>
                <a href={element.href}>{element.rel}</a>
              </Grid>
              )
            })} 
            </Grid>
          
            </div>
        
        )
    }
}
