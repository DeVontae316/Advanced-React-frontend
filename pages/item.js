import React from 'react';
import PropTypes from 'prop-types';
import SingleItem from '../components/SingleItem';

const Item = (props)=>{
  return(
    <SingleItem id={props.query.id}/>
  )
}

export default Item;
