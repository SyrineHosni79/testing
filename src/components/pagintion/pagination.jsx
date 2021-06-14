import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import './pagination.css';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationTool(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
      //call parent function
      props.onChange(value);
       setPage(value);
  };

  return (
    <div className={classes.root} className="page" >
      <Pagination  count={props.count} size="large"  page={page} onChange={handleChange} /> 
    </div>
  );
}
