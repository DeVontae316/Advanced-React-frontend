import React,{Component}from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import{Query} from 'react-apollo';
import ItemStyles from './styles/ItemStyles';
import ErrorMessage from './ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';
import PaginationStyles from './styles/PaginationStyles';

const Item = styled.div`
 max-width:1200px;
 margin: 2rem auto;
 box-shadow:${props => props.theme.bs};
 display:grid;
 grid-auto-colums: 1fr;
 grid-auto-flow:column;
 min-height:800px;
 img{
   width:100%;
   height:100%
   object-fit:contain;
 }
 .details{
   margin: 3rem;
   font-size: 2rem;

 }

`

const Center = styled.div`
 text-align:center;
`;

const QUERY_CREATED_ITEM = gql`
 query QUERY_CREATED_ITEM($id:ID!){
   item(where:{id:$id}){
     title
     description
     price
     id
     largeImage
   }
 }
`

class SingleItem extends Component{

  render(){
    return(


    <Query query={QUERY_CREATED_ITEM} variables={{id:this.props.id}}>
     {({data,loading,error})=>{
       if(loading) return <p>...loading</p>
       if(error) return <ErrorMessage error={error} />
       if(!data.item)<p>No item found for {this.props.id}</p>
       console.log(data);
       return <Item>

        <img src={data.item.largeImage} alt= " " />
        <div className="details">
          <h2>{data.item.title}</h2>
          <p>{data.item.description}</p>
        </div>
       </Item>
     }}
    </Query>


    )
  }
}


export default SingleItem;
