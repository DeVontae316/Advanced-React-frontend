import React,{Component} from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import {QUERY_ALL_ITEMS} from './Items';
import PropTypes from 'prop-types';
import {CURRENT_USER_QUERY} from './User';

const DELETE_ITEM =  gql`
 mutation DELETE_ITEM($id:ID!){
   deleteItem(id:$id){
    id
    
   }
 }
`

class DeleteItem extends Component{
 update = (cache,payload)=>{
   const data = cache.readQuery({query:QUERY_ALL_ITEMS});
   data.items = data.items.filter(item => item.id !== payload.data.deleteItem.id);
   cache.writeQuery({query:QUERY_ALL_ITEMS,data});
 }

  render(){

    return(
     <Mutation refetchQueries={[{query:CURRENT_USER_QUERY}]}mutation={DELETE_ITEM}
      update={this.update}
      variables={{id:this.props.id}}>
        {(deleteItem,{loading,error})=>(

          <button onClick={()=>{

            if(confirm('Are you sure you want to delete this item')){
              deleteItem().catch(err=>{
                alert(err.message);
              });
            }
          }}>{this.props.children}</button>
        )}

    </Mutation>


    )
  }
}
export default DeleteItem;
