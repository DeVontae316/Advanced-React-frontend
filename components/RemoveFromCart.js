import React,{Component} from 'react';
import styled from 'styled-components';
import {Mutation} from 'react-apollo';
import {CURRENT_USER_QUERY} from './User';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

const DELETE_ITEM =  gql`
 mutation DELETE_ITEM($id:ID!){
     deleteCartItem(id:$id){
         id 
         
     }
 }
`

const BIGBUTTON = styled.button`
 background:0;
 font-size:3rem;
 background:none;
 &hover{
     cursor:pointer;
     color:${props => props.theme.red};

 }
`

class RemoveFromCart extends Component{
    static propTypes = {
        id:PropTypes.string.isRequired,
    }
    //Payload is data that comes back to us after server is done with mutation
    update = (cache,payload) =>{
        
        // Query cuurent User
        const currentUser = cache.readQuery({query:CURRENT_USER_QUERY});
        //const data = cache.readQuery({query:CURRENT_USER_QUERY});
        console.log(currentUser);
        console.log("Pay load after this");
        console.log(payload);
        //Remove item from cart manually
        //We get the data from the payload as soon as we get a  response back from the server
        const cartItemId = payload.data.deleteCartItem.id;
        console.log("cartitemid");
        console.log(cartItemId);
        //Filter currentUsers to not include cartItemId
        
        currentUser.me.cart = currentUser.me.cart.filter(item => item.id !== cartItemId);
        //currentUser.me.cart = currentUser.me.cart.filter(item => item.id !== cartItemId);
        cache.writeQuery({query:CURRENT_USER_QUERY, data:currentUser});
        
    }
    //const data = cache.readQuery({query:CURRENT_USER_QUERY});
    //const cartItemId = payload.data.deleteCartItem.id;
    // data.me.cart = data.me.cart.filter( item => item.id !== cartItemId);
    // cache.writeQuery({query:CURRENT_USER_QUERY, data})
    //const data = client.query({query:SEARCH_ITEMS_QUERY, searchTerm:e.target.value})

    render(){
        return<Mutation optimisticResponse={{
            __typename:"Mutation",
            deleteCartItem:{
                id:this.props.id,
                __typename:"CartItem"
            }
        }}
        update={this.update} mutation={DELETE_ITEM} variables={{id:this.props.id}}>
             {(deleteCartItem,{loading,error})=>(
                 <BIGBUTTON disabled={loading}onClick={(e)=>{
                     
                     e.preventDefault();
                    deleteCartItem().catch(err => alert(err.message));
                 }}title="Delete Item">
                     &times;</BIGBUTTON>
             )}
        </Mutation>
       
    }
}




export default RemoveFromCart;