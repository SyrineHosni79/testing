import { Button, TextField } from '@material-ui/core';
import React, { Component } from 'react'
import getOrderById from '../../xhr/getOrderByid';
import getOrders  from '../../xhr/getOrders';

export default class Order extends Component {
    constructor(props){
        super(props);
        this.state={
          orders:[],
          orderbyid:[],
          numberbook:5
        }  
    }
    async componentDidMount() {

        getOrders().then( (response) => {
          this.setState({orders:response.data})
         /* console.log("orders",this.state.orders) */
        })
        getOrderById().then( (response)=>{
            this.setState({orderbyid:response.data})
            console.log("orders",this.state.orderbyid)  
        })
    }
    
    inputBooks = (num) => {
        
    for (let i = 0; i < num ; i++)
    {
        console.log(i)
        return (
            <div>
            <TextField label="add a book to order" ></TextField>
            </div>
        )
    }
    }

    render() {
        return (
            <div>
              <h1>Order history</h1>
              <a href="">log in</a> to see your order history.
              <div>
                  <h3>New book order:</h3>
                  <TextField id="standard-basic" label="add the new id" onChange={this.onchangeNewId}></TextField>
                  <br></br>
                  <TextField onChange={this.onchangeNumber} label="number book to order"></TextField>
                  {this.inputBooks(3)}
                  <br></br><br></br>
                  <Button variant="contained" onClick={this.createOrder}>new order</Button>
              </div>  
            </div>
        )
    }
}
