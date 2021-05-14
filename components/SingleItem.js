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

const SINGLE_CREATED_ITEM = gql`
 query SINGLE_CREATED_ITEM($id:ID!){
   item(where:{id:$id}){
     description
     title
     largeImage
     price
   }
 }
`

class SingleItem extends Component{

  render(){
    return(
    <Query query={SINGLE_CREATED_ITEM} variables={{id:this.props.id}}>
     {({data,loading,error})=>{
       if(loading) return <p>...loading</p>
       if(error) return <ErrorMessage error={error} />
       return<Item>
        <Head>
         <title>Sick Fits | {data.item.title}</title>
        </Head>
        <img src={data.item.largeImage} alt=" " />
        <div className="details">
         <h2>{data.item.title}</h2>
         <p>{data.item.description}</p>
        </div>
        {this.props.children}
       </Item>
       
     }}
    </Query>

    )
  }
}

export{SINGLE_CREATED_ITEM};
export default SingleItem;
