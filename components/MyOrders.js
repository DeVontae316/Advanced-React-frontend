import React from 'react';
import PropTypes from 'prop-types';
import{Query} from 'react-apollo';
import gql from 'graphql-tag';
import Error from './ErrorMessage';
import styled from 'styled-components';
import OrderItemStyles from './styles/OrderItemStyles';
import Link from 'next/link';
import formatMoney from '../lib/formatMoney';
import { formatDistance } from 'date-fns';

const UL = styled.ul`

display:grid;
grid-gap:4rem;
grid-template-columns:repeat(auto-fit,minmax(40% 1fr));

`

const ALL_MY_ORDERS = gql`
query ALL_MY_ORDERS{
    orders(orderBy:createdAt_DESC){
        id
        total
        createdAt
        charge
        items{
            id
            title
            description
            quantity
            image
        }user{
            id
            name
            email
        }
       
    }
}
`

const MyOrders = (props)=>{
    return(
      <Query query={ALL_MY_ORDERS}>
          {({data,loading,error})=>{
           if(loading) return <p>loading...</p>
           if(error) return <Error error={error} />
           console.log(data);
          return <div>
              <p>{data.orders.length}</p>
              <UL>
                  {data.orders.map(items =><OrderItemStyles key={items.id}>
                   
                      <Link href={{pathname:"/order",query:{id:items.id}}}>
                      <a>
                        <div className="order-meta">
                            <h2>You purchased {items.items.reduce((acc,order)=>{
                                return acc + order.quantity;
                            },0)} Ite{items.items.quantity > 1  ? "m's" : 'm'}</h2>
                            
                            <h2>{items.items.length}Produc{items.items.length > 1  ?  "t's": "t"}</h2>
                            <h2>{formatDistance(items.createdAt, new Date())} ago</h2>
                            <h2>{formatMoney(items.total)}</h2>
                        </div>
                        <div className="images">
                          {items.items.map(item =>{
                              return <img width="100"key={item.id}src={item.image} />
                          })}
                        </div>
                        {data.orders[0].user.name}
                      </a>
                      </Link>
                  </OrderItemStyles>)}
              </UL>
         </div>
          }}
      </Query>
        
    )
}


export default MyOrders;