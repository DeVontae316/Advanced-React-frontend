import {Query} from 'react-apollo';
import gql from 'graphql-tag';
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


const ALL_ITEMS_QUERY = gql`
 query ALL_ITEMS_QUERY{
   items{
     id
     title
     description
     image
     largeImage
     price
   }
 }
`;
class Items extends Component{
  render(){
    return(
      <Center>
       <Query query={ALL_ITEMS_QUERY}>
        {({data,error,loading})=>{
          if(loading) return <p>...loading</p>
          if(error) return <p>{error}</p>
          console.log(data.items);
          console.log(error);
          return <ItemsList>
           {data.items.map((element,index)=>(
             <Item key={element.id}item={element}/>
           ))}
          </ItemsList>
        }}
       </Query>
      </Center>
    )
  }
}

export default Items;
export {ALL_ITEMS_QUERY};
