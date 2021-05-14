import React,{Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import calcTotalPrice from '../lib/calcTotalPrice';
import Error from './ErrorMessage';
import User, { CURRENT_USER_QUERY } from './User';
import { toDateWithOptions } from 'date-fns/fp';

const PAY_ME = gql`
 mutation PAY_ME($token:String!){
  createOrder(token:$token){
      id
      
      items{
          title 
          description 
          image 
          largeImage
      }
  }
 }
`
const TakeMyMoney = (props)=>{
    async function sendResponse(res,createOrder){
       
        const respond = await createOrder({
            variables:{
                token:res.id
            }
        }).catch(err => alert(err.message));

       
        Router.push({
            pathname:"/order",
            query:{
                id:respond.data.createOrder.id
            }
        })
       console.log("STRIPE RESPONSE")
       console.log(respond);
    }

    
    return(
        <User>
            {({data:{me},loading})=>{
                if(loading) return null;
                return (
                <Mutation refetchQueries={[{query:CURRENT_USER_QUERY}]}mutation={PAY_ME} >
                    {(createOrder,{loading,error})=>(
                    <StripeCheckout 
                    amount={calcTotalPrice(me.cart)}
                    name="SickFits"
                    email={me.email}
                    token={res => sendResponse(res,createOrder)}
                    currency="USD"
                    stripeKey="pk_test_9OYlXxkQDz9R8B1pQNL29G6E00XujuuzUM"
                    >
                        {props.children}
                    </StripeCheckout>
                    )}
                </Mutation>
    
            )}}
        </User>

    )
}

export default TakeMyMoney;
export{PAY_ME};