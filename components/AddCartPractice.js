import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';
import Error from './ErrorMessage';
import {CURRENT_USER_QUERY} from './User';

const ADD_TO_CART =  gql`
mutation ADD_TO_CART($id:ID!){
    addToCart(id:$id){
        id 
        quantity
       
        
    }
}
`


const AddCartPractice = ({item})=>{
    return(
        <Mutation 
       
       refetchQueries={[{query:CURRENT_USER_QUERY}]}
        mutation={ADD_TO_CART} 
        variables={{id:item}}>
            {(addToCart,{loading,error})=>{
            
            if(error) return <Error error={error} />
             return <button disabled={loading} onClick={addToCart}>
                 Add To Cart Practice
             </button>

             }}
        </Mutation>
       
    )
}


export default AddCartPractice;
export{ADD_TO_CART}

