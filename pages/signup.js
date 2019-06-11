import PropTypes from 'prop-types';
import Link from 'next/link';
import Supreme from '../components/styles/Supreme';
import styled from 'styled-components';

const StyledDiv = styled.div`
 display:grid;
 grid-template-columns : auto auto auto;
 grid-template-rows: 100px 200px;
 border: solid black 10px;
 max-width:500px;
 @media(max-width:1300px){
   margin : 0 auto;

 }
 a{
   @media(max-width:1300px){
    color:${props => props.theme.softPurple};

   }

 }
`


const Test = ()=>{
  return(
    <StyledDiv>

     <Link href="http://www.google.com">
     <a>Hello World</a>
     </Link>

     <Link href="http://www.google.com">
     <a>Hello World</a>
     </Link>

     <Link href="http://www.google.com">
     <a>Hello World</a>
     </Link>
     <Link href="http://www.google.com">
     <a>Hello World</a>
     </Link>

     <Link href="http://www.google.com">
     <a>Hello World</a>
     </Link>

     <Link href="http://www.google.com">
     <a>Hello World</a>
     </Link>

    </StyledDiv>
  )
}

export default Test;
