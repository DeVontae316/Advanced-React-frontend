import Link from 'next/link';
import NavStyles from '../components/styles/NavStyles';
import User from './User';
import SignOut from './SignOut';
import {Mutation} from 'react-apollo';

import CartCount from './CartCount';
import styled from 'styled-components';
import Hooks from './Hooks';
import {useCart} from  './LocalState';

const Cart = styled.p`
background:${props => props.theme.red};
color:white;
text-align:center;
padding:1.3rem;
line-height:2rem;
min-width:3rem;
margin-right:3rem;
font-weight:100;
font-feature-setting:'tnum';
font-variant-numeric:tabular-numeric;

`

const Nav = (props)=>{
 const {toggleCart} = useCart();

    return <User>
     {({data:{me}})=>(
     
      <NavStyles>

       <Link href='/items'>
        <a>Shop</a>

       </Link>
       {me &&(
        <>

         <Link href="/sell">
           <a>Sell</a>
         </Link>

         <Link href="/orders">
           <a>Orders</a>
         </Link>
         <Link href="test">
           <a>Account</a>
         </Link>
         
          <SignOut />
           {me.name}
          <button  onClick={toggleCart}type="button">Cart</button>
            
          
        </>

       )}
       {!me &&(
         <>
         <Link href='/signup'>
          <a>SignIn</a>
         </Link>
         </>
       )}


    </NavStyles>
     )}

    </User>

  }


export default Nav;
