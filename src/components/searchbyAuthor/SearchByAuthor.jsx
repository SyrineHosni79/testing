import React, { Component } from 'react'

export default class SearchByAuthor extends Component {
    onchangeauthor = (e) => {
        this.setState({searchedauthor:e.target.value})
        console.log("author",this.state.searchedauthor);
      };
      searchauthor = () => {
        let ListBooksbyauthor
      
        ListBooksbyauthor=this.state.books.map( (i) => {
          console.log( i.author === this.state.searchedauthor )
          if (i.author === this.state.searchedauthor )
          return (
            <div >
                <p >{i.title}</p>    
            </div>
        )
        })
        this.setState({ListBooksbyauthor:ListBooksbyauthor});
      };
    
    render() {
        return (
            <div>
                <h2>Find books by author   :</h2>
      
      <form  noValidate autoComplete="off">
         <TextField id="standard-basic" label="Search by author " onChange={this.onchangeauthor } />
         <br></br><br></br>
        <Button variant="contained" onClick={this.searchauthor }>Search</Button>
      </form>
            </div>
        )
    }
}
