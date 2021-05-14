import React from 'react';
import PropTypes from 'prop-types';
import SingleItem from '../components/SingleItem';
import Comments from "../components/Comments";

const Item = (props)=>{
  return(
   
     <SingleItem id={props.query.id}>
       <Comments /> 
     </SingleItem>
    

  )
}

export default Item;
