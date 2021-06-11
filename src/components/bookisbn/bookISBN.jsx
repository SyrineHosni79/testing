import { Grid } from '@material-ui/core'
import React, { Component } from 'react'
import getBookById from '../../xhr/getBookById'
import MediaCard from '../card/Card'
import './bookISBN.css';

export default class BookISBN extends Component {
    constructor(props){
        super(props)
    
    this.state={
        bookDetails:[]
    }
}
    async componentDidMount(){
        let params=this.props.history.location.pathname.substring(8)
        console.log("parametre",this.props.history)
        getBookById(params).then( ( response) => {
            console.log(response.data);
            this.setState({bookDetails:response.data})

        })
    }
    render() {
        return(
        <div className="book-details">    
        {this.state.bookDetails.book?
        (<div>
            <Grid container spacing={3} >
            <Grid item xs={12} sm={3}>
            < MediaCard className="MediaCard" title={this.state.bookDetails.book.title} summary={this.state.bookDetails.book.summary}
                  image={this.state.bookDetails.book.image}/>
            </Grid>
            </Grid>
            <h2>His author:</h2>
            <Grid container spacing={3} >
                <Grid item xs={12} sm={3} >
                < MediaCard className="MediaCard" title={this.state.bookDetails.book.author.name} summary={this.state.bookDetails.book.author.biography}
                  image={this.state.bookDetails.book.author.image}/>
                </Grid>
            </Grid>
            <h2>The available links to the next steps:</h2>
            <Grid container spacing={3}>
            { this.state.bookDetails.links.map( (x)=>{
             return(
             <Grid item xs={12} sm={3} key={x.rel}>
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
