import { Grid } from '@material-ui/core';
import React, { Component } from 'react'
import MediaCard from '../../components/card/Card';
import PaginationSize from '../../components/pagintion/pagination';
import { getData } from '../../xhr/httprequest';
import './Home.css';

export default class Home extends Component {

    state={
        highlightedBooks:[],
        highlightedAuthors:[],
        linkss:[],
        allData:[],
        totalPage:3
      } 
    
      async componentDidMount() {
          const p="";
        getData(p).then( (response)=>{
          this.setState({allData:response.data});
          const data=response.data;
          this.setState({highlightedAuthors:data.highlightedAuthors});
          this.setState({highlightedBooks:data.highlightedBooks})
          this.setState({linkss:data.links})
        })
            
      }
      setContentPages=()=>{

      };

      changePage = (value)=>{
        //take page number
        console.log(value);

        //set page

      }
    
    render() {
        return (
            <div className="home-container">
          <h2>highlighted Books :</h2>
            <Grid container spacing={3} >
            {this.state.highlightedBooks.map( (element)=>{
              return (
                <Grid className="element" item xs={12} sm={3} key={element.isbn}>
                < MediaCard className="MediaCard" title={element.title} summary={element.summary}
                 author={element.author} image={element.image} type="book"/>
              </Grid>
              )
            })} 
            </Grid>
            <h2>highlighted Authors :</h2>
            <Grid container spacing={3} >
             {this.state.highlightedAuthors.map( (element)=>{
              return (
                <Grid className="element" item xs={12} sm={3} key={element.id}>
                < MediaCard className="MediaCard" title={element.name} summary={element.biography}
                  image={element.image} type="author"/>
                </Grid>
              )
             })} 
            </Grid>
            <h3> The available links to the next steps :</h3>
            <Grid container spacing={3} >
             {this.state.linkss.map( (element)=>{
              return (
                <Grid item xs={12} sm={3} key={element.rel}>
                <a href={element.href}>{element.rel}</a>
              </Grid>
              )
             })} 
            </Grid>
            <PaginationSize count={this.state.totalPage} onChange={this.changePage}/>
            </div>
        
        )
    }
}
