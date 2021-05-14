import React,{Component} from 'react';
import {Query} from 'react-apollo';
import{CURRENT_USER_QUERY} from './User';
import PropTypes from 'prop-types';
import Signin from './Signin';

const PleaseSignIn = (props)=>{
  return(
    <Query query={CURRENT_USER_QUERY}>
     {({data,loading,error})=>{
       console.log(data);
       if(loading)<p>loading...</p>
       if(!data.me){
         return<div>
          <p>Please sign in</p>
          <Signin/>
         </div>
       }
       return props.children;
     }}
    </Query>
  )
}


export default PleaseSignIn;
