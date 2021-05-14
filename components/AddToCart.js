import React,{Component} from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';

const ADD_TO_CART = gql`
 mutation ADD_TO_CART($id:ID!){
     addToCart(id:$id){
         id
         quantity 
     }
 }
`

class AddToCart extends Component{
    render(){
        const{id} = this.props;
        return (<Mutation  mutation={ADD_TO_CART}variables={{id:id}}> 
              {(addToCart,{loading,error})=>(
                  <button onClick={addToCart}>Add Item To Cart</button>
              )}
            </Mutation>
        )
        
    }
}


export default AddToCart;
export{ADD_TO_CART};