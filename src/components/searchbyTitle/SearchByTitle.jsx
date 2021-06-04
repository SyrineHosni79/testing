import React, { Component } from 'react'

export default class SearchByTitle extends Component {
    onchangetitle = (e) => {
        this.setState({searchedtitle:e.target.value})
        console.log("title",this.state.searchedtitle);
      };
      searchtitle = () => {
        let ListBooksbytitle
      
        ListBooksbytitle=this.state.books.map( (i) => {
          if ( i.title == this.state.searchedtitle )
          {
            console.log(true)
          return (
            <div >
                <p >title:{i.title}</p>
                <p >author:{i.auhtor}</p>
                <p >summary:{i.summary}</p>
            </div>
        )
          } else console.log(false)
        })
      
        this.setState({ListBooksbytitle:ListBooksbytitle});
      };
    
    render() {
        return (
            <div>
                 <h2>Find book by title   :</h2>
      
      <form  noValidate autoComplete="off">
         <TextField id="standard-basic" label="Search by title " onChange={this.onchangetitle } />
         <br></br><br></br>
        <Button variant="contained" onClick={this.searchtitle }>Search</Button>
      </form>
       {this.state.ListBooksbytitle }

            </div>
        )
    }
}
