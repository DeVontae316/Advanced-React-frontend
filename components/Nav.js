import Link from 'next/link';
import NavStyles from '../components/styles/NavStyles';
import User from './User';
import SignOut from './SignOut';
import {Mutation} from 'react-apollo';
import {LOCAL_STATE_MUTATION} from '../components/Cart';
import CartCount from './CartCount';
import styled from 'styled-components';
import Hooks from './Hooks';

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

const Nav = (props)=>(


    <User>
     {({data:{me}})=>(
     
      <NavStyles data-test="nav">

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
          <Mutation mutation={LOCAL_STATE_MUTATION}>
            {(toggle,{loading,error})=>(
              

                <button onClick={toggle}><Cart>Cart</Cart>
                
                 <CartCount count={me.cart.reduce((reducer,item)=>{
                    const total = reducer + item.quantity;
                    return total;
                 },0)}/>
                 <p>items in cart</p>
                </button>
            )}
          </Mutation>
          
            
          
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

  )


export default Nav;
