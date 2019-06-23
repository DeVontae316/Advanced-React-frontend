
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import React,{Component} from 'react';
import styled from 'styled-components';
import Item from './Item';

const Center = styled.div`
  text-align:center;
 `
const ItemsList = styled.div`
 display:grid;
 grid-template-columns: 1fr 1fr;
 max-width:${props => props.theme.maxWidth};
 grid-gap:60px;
 margin:0 auto;

`
const QUERY_ALL_ITEMS = gql`
 query QUERY_ALL_ITEMS{
   items{
     id
     title
     description
     image
     largeImage
     price
   }

 }
`


class Items extends Component{
  render(){
    return(
     <div>
      <Query query={QUERY_ALL_ITEMS}>
       {({data,loading,error}) =>{
         if(loading)<p>....loading</p>
         if(error)<p>{error.message}</p>
         console.log(data);
         return <ItemsList>{data.items.map(item =>(
           <Item item={item} key={item.id} />
         ))}</ItemsList>
       }}
      </Query>
     </div>
    )
  }
}

export default Items;
export {ALL_ITEMS_QUERY};
