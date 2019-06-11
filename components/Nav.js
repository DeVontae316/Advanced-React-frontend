import Link from 'next/link';
import NavStyles from '../components/styles/NavStyles';

const Nav = (props)=>{
  return(
   <NavStyles>
     <Link href='/items'>
      <a>Shop</a>
     </Link>
     <Link href="/sell">
       <a>Sell</a>
     </Link>
     <Link href='/signup'>
      <a>SignUp</a>
     </Link>
     <Link href="/orders">
       <a>Orders</a>
     </Link>
     <Link href="test">
       <a>Account</a>
     </Link>

  </NavStyles>
  )
}

export default Nav;
