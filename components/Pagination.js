import React from 'react';
import PaginationStyles from './styles/PaginationStyles';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {perPage} from '../config';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';



const Center = styled.div`
 text-align:center;
 margin-top:8px;
 a:hover{
   cursor:alias;
 }
`

const PAGINATION_QUERY = gql`
query PAGINATION_QUERY{
  itemsConnection{
    aggregate{
      count
    }
  }
}
`;

const Pagination = props =>{
  return(
    <Query query={PAGINATION_QUERY}>
     {({data,loading,error})=>{
       const totalItems = data.itemsConnection.aggregate.count;
       const page = props.page;
       const pages = Math.ceil(totalItems / perPage);
       if(loading)<p>...loading</p>
       if(error)<p>{error.message}</p>
       return<PaginationStyles>

         <Link href={{pathname:"/items",query:{page:page - 1}}}>
          <a aria-disabled={page <= 1}>Prev</a>
         </Link>

          <p>Page {props.page} out of {pages}</p>

         <Link href={{pathname:"/items",query:{page:page + 1}}}>
           <a aria-disabled={page >= pages}>Next</a>
         </Link>

          <p>{totalItems} items total</p>
       </PaginationStyles>
     }}
    </Query>
  )
}

export{PAGINATION_QUERY};
export default Pagination;
