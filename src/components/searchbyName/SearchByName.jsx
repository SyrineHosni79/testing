import { TextField } from '@material-ui/core';
import React from 'react'

export default function SearchByName (props) {
   
     const onchangeName = (e) => {
            props.onNameChange(e);
          };
            return (
                <div>
                   <h2>Find author by Name  :</h2>
              <form  noValidate autoComplete="off">
             <TextField id="standard-basic" label="Search by Name" onChange={onchangeName} />
             <br></br><br></br>
          </form>
          <br></br><br></br>
             </div>
            )
        
    }
    