import PropTypes from 'prop-types';
import {Query} from 'react-apollo';
import {format} from 'date-fns';
import gql from 'graphql-tag';
import Head from 'next/head';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';
import OrderStyles from './styles/OrderStyles';


const SHOW_MY_ORDER = gql`
query SHOW_MY_ORDER($id:ID!){
    order(id:$id){
        id 
        charge 
        total 
        createdAt
        items{
            description 
            title 
            image
            quantity
            price
        }user{
            id 
            name 
            email
            permissions
        }
    }
}`;

const Order = (props)=>{
    return(
        <Query query={SHOW_MY_ORDER} variables={{id:props.id}}>
          {({data,loading,error})=>{
              if(error)return <Error error={error} />
              if(loading)return <p>Loading...</p>
              console.log(data);
              const order = data.order;
              return(
                <OrderStyles>
                 <Head>
                  <title>Sick Fits order:{order.id}</title>
                 </Head>
                 <h2>
                    <span>Order ID: </span>
                    <span>{props.id}</span> 
                 </h2>
                 <h2>
                    <span>Date: </span>
                    <span>created at {format(order.createdAt ,'MMMM,d,YYYY h:mm a')}</span> 
                 </h2>
                 <h2>
                    <span>Order Total: </span>
                    <span>{formatMoney(order.total)}</span> 
                 </h2>
                 <h2>
                    <span>Item Count: </span>
                    <span>{order.items.length}</span> 
                 </h2>
                 <div className="items">
                     {order.items.map(item =>(
                    <div className="order-otem" key={item.id}>
                        <img width="250"src={item.image}  alt={item.title}/>
                      <div className="item-details">
                        <h2>Qty:{item.quantity}</h2>
                        <h2>Each:{formatMoney(item.price)}</h2>
                        <h2>Subtotal:{formatMoney(item.price * item.quantity)}</h2>
                        <h2>Item description:{item.description}</h2>
                       </div>
                    </div>
                         
                     ))}
                 </div>
                </OrderStyles>
              )
           
          }}
        </Query>
        
    )
}

export default Order;