import { Grid, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import getAuthorById from '../../xhr/getAuthorById'
import MediaCard from '../card/Card'
import './authorId.css'

export default class AuthorId extends Component {
    constructor(props){
        super(props)
    }
    state={
        authorDetails:[]
    }
    async componentDidMount(){
        let params=window.location.search.substring(1)
        getAuthorById(params).then((response)=>{
            console.log(response.data);
            this.setState({authorDetails:response.data})

        })
    }
    render() {
        return (
    <div className="authorDetails">    
        {this.state.authorDetails.author?
        (<div>
            <Grid container spacing={3} >
            <Grid item xs={12} sm={4}>
            < MediaCard className="MediaCard" title={this.state.authorDetails.author.name} summary={this.state.authorDetails.author.biography}
                  image={this.state.authorDetails.author.image}/>
            </Grid>
            </Grid>
            <h2>His books:</h2>
            <Grid container spacing={3} >
            {this.state.authorDetails.author.books.map( (element)=>{
              return (
                <Grid item xs={12} sm={4}>
                < MediaCard className="MediaCard" title={element.title} summary={element.summary}
                 author={element.author} image={element.image}/>
                </Grid>
              )
            })}
            </Grid>
            <h2>The available links to the next steps:</h2>
            <Grid container spacing={3}>
            { this.state.authorDetails.links.map( (x)=>{
             return(
             <Grid item xs={12} sm={3}>
             <a href={x.href}>{x.rel}</a>
             </Grid>
             )})
            }
            </Grid>
        </div>):null
        }
      </div>)
    
    }
}
