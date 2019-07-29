
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Items from '../components/Items';


const Home = (props)=>{
  return(
    <div>
    <Items page={parseFloat(props.query.page) || 1}/>
   </div>
  )
}


export default Home;
