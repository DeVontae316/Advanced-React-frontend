import React from 'react';
import PropTypes from 'prop-types';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import ErrorMessage from './ErrorMessage';
import PaginationStyles from './styles/PaginationStyles';
import Link from 'next/link';
import {perPage} from '../config';
import styled from 'styled-components';

const TOTAL_ITEM_COUNT = gql`
 query TOTAL_ITEM_COUNT{
   itemsConnection{
     aggregate{
       count
     }
   }
 }
`
const AnchorStyles = styled.div`
 a:hover{
  cursor:alias;
 }
`

const Pagination = (props)=>{
  return(
    <Query query={TOTAL_ITEM_COUNT}>
     {({data,loading,error})=>{
       const totalItemCount = data.itemsConnection.aggregate.count;
       const currentPage = props.page;
       const totalPages = Math.ceil(totalItemCount/perPage);
       if(loading)return <p>loading...</p>
       if(error) return<ErrorMessage error={error} />
       return <AnchorStyles>
        <PaginationStyles>

        <Link href={{pathname:'/items',query:{page:currentPage -1}}}>
         <a aria-disabled={currentPage <= 1}>Prev</a>
        </Link>
        <p>Page:{props.page} out of {totalPages}</p>
        <Link href={{pathname:'/items',query:{page:currentPage + 1}}}>
         <a aria-disabled={currentPage >= totalPages}>Next</a>
        </Link>
        <p>{totalItemCount} total items</p>

        </PaginationStyles>
      </AnchorStyles>
     }}
    </Query>
  )
}

export default Pagination;
