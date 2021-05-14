 import React from 'react';
 import CartStyles  from './styles/CartStyles';
 import Supreme  from './styles/Supreme';
 import CloseButton  from './styles/CloseButton';
 import SickButton from './styles/SickButton';
 import User from './User';
 import {Query,Mutation} from 'react-apollo';
 import gql from 'graphql-tag';
 import CartItem from './CartItem';
 import calcTotalPrice from '../lib/calcTotalPrice';
 import formatMoney from '../lib/formatMoney';
 import TakeMyMoney from './TakeMyMoney';

 const LOCAL_STATE_QUERY = gql`
  query{
      cartOpen @client
  }
 `
 const LOCAL_STATE_MUTATION = gql`
  mutation{
      toggleCart @client
  }
 `

const Cart = ()=>(
    /*<div>
        <p>Test</p>
    </div>*/
   <User>
      {({data:{me}})=>{
          if(!me) return null;
          
          
         return <Mutation mutation={LOCAL_STATE_MUTATION}>
         {(toggleCart,{loading,error})=>(
            <Query query={LOCAL_STATE_QUERY}>
        
            {({data,error,loading})=> console.log(me) || (
                <CartStyles open ={data.cartOpen}>
                <header>
                    <CloseButton onClick={toggleCart} title="close">&times;</CloseButton>
                    <Supreme>Name</Supreme>
                  <p>You have {me.cart.length} item in your cart</p>
                    
                </header>
                 <ul>
                 {me.cart.map((cartItem,index,array)=>
                 <CartItem key={cartItem.id}cartItem={cartItem} />)}
                
          
                  </ul>
                <footer><p>Total:{formatMoney(me.cart.reduce((reducer,cartItem)=>{
                        
                        return reducer  + cartItem.quantity * cartItem.item.price;
                },0))}</p>
                 <TakeMyMoney>
                   {me.cart.length ? <SickButton>Checkout</SickButton> : <h3>Please buy something:)</h3>}
                 </TakeMyMoney>
                 
                </footer>
        
            </CartStyles>
            )} 
         </Query>
         )}
     </Mutation>
      }}
   </User>
    
       
    )

    


export default Cart;
export {LOCAL_STATE_QUERY,LOCAL_STATE_MUTATION};

/*
Skills:
Find total items in the User component me.cart array

Code a coditional that 
will change the word item to items if the length 
from me.cart is > 1

Know how to use the array method reduce to add a total value
*/