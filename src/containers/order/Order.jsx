import { Button, TextField } from '@material-ui/core';
import React, { Component } from 'react'
import getOrderById from '../../xhr/getOrderByid';
import getOrders  from '../../xhr/getOrders';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';


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
                  
                  <br></br><br></br>
                  <Button variant="contained" onClick={this.createOrder}>new order</Button>
              </div>  
            </div>
        )
    }
}
