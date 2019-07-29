import React,{Component} from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import {QUERY_ALL_ITEMS} from './Items';
import PropTypes from 'prop-types';

const DELETE_ITEM_MUTATION = gql`
 mutation DELETE_ITEM_MUTATION($id:ID!){
   deleteItem(id:$id){
     id
     title
     description
   }
 }
`

class DeleteItem extends Component{
  update = (cache,payload)=>{
    const query = cache.readQuery({query:QUERY_ALL_ITEMS});
    query.items = query.items.filter(item => item.id !== payload.data.deleteItem.id)
    cache.writeQuery({query:QUERY_ALL_ITEMS , data:query});

  }

  render(){

    return(
     <Mutation update={this.update}mutation={DELETE_ITEM_MUTATION} variables={{id:this.props.id}}>
      {(deleteItem,{loading,error})=>(

         <button onClick={()=>{
           if(error)<p>{error.message}</p>
           if(confirm('Are you sure you want to delete this item?')){
              deleteItem();
           }

          ;
         }}>
          {this.props.children}
         </button>

      )}
     </Mutation>

    )
  }
}
export default DeleteItem;
