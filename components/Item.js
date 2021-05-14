import React,{Component} from 'react';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import Title from './styles/Title';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import formatMoney from '../lib/formatMoney';
import DeleteItem from './DeleteItem';
import AddToCart from './AddToCart';
import AddToCart2 from './AddToCart2';
import AddToCart3 from './AddToCart3';
import Modal from './Modal';
import AddCartPractice from './AddCartPractice';


class Item extends Component{
   static propTypes = {
     item:PropTypes.object.isRequired
   }
   state = {
     show:false
   }
   showModal = ()=>{
     this.setState({
       show:true,
     })
   }
  render(){
    const {item} = this.props;
    return(
      <ItemStyles>
       {item.image ? <img src={this.props.item.image}/> : null}
       <Title>
        <Link href={{pathname:"/item",query:{id:this.props.item.id}}}>
         <a>{this.props.item.title}</a>
        </Link>
       </Title>
       <PriceTag>{formatMoney(this.props.item.price)}</PriceTag>
       <p>{this.props.item.description}</p>
       <div className="buttonList">
       <Link href={{pathname:"/update",query:{id:item.id}}}>
        <a>update</a>
        </Link>
        
        <AddCartPractice item={item.id}/>
       <DeleteItem id={item.id}>Delete this item</DeleteItem>
        <button onClick={(e)=>{
          this.showModal();
        }}>Place Order</button>
        <Modal show={this.state.show}/>
       </div>
      </ItemStyles>
    )
  }
}


export default Item;
