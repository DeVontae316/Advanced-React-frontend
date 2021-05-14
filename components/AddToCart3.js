import React from 'react';''
import{Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import {CURRENT_USER_QUERY} from './User';

const ADD_ITEM_MUTATION = gql`
 mutation ADD_ITEM_MUTATION($id:ID!){
     addToCart(id:$id){
         id 
         quantity 
         user{
             id 
             email 
             name
         }
     }
 }
`;

const AddToCart3 = (props)=>{
    return(
       <Mutation refetchQueries={[{query:CURRENT_USER_QUERY}]} variables={{id:props.id}}mutation={ADD_ITEM_MUTATION}>
           {(addToCart,{loading,error})=>(
               <button onClick={addToCart}>ADD TO CART</button>
           )}
       </Mutation> 
        
    )
}


export  default AddToCart3;