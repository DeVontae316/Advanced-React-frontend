import React from 'react';
import gql from 'graphql-tag';
import{Mutation} from 'react-apollo';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart';
import {CURRENT_USER_QUERY} from './User';

const ADD_TO_CART = gql`
 mutation ADD_TO_CART($id:ID!){
     addToCart(id:$id){
         id 
         quantity
         user{
             id 
             name
         }
     }
 }
`

const AddToCart2 = (props)=>{
    return(
        <Mutation refetchQueries={[{query:CURRENT_USER_QUERY}]} mutation={ADD_TO_CART} variables={{id:props.id}}>
           {(addToCart,{loading,error})=>(
               <button disabled={loading} onClick={addToCart}>ADD{loading && 'ing'} ITEM</button>
           )}
        </Mutation>
    )
}


export default AddToCart2;