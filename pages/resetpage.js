import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Reset from '../components/Reset';
import ResetP from '../components/ResetP';


const ResetPage = (props)=>{
  return(
   <div>
    <p>Reset your password{props.query.resetToken}</p>
    
    <ResetP resetToken={props.query.resetToken}/>
  </div>
  )
}
export default ResetPage;
