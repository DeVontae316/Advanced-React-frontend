import Signup from '../components/Signup';
import Signin from '../components/Signin';
import Props from 'prop-types';
import RequestReset from '../components/RequestReset';
import RequestResetP from '../components/RequestResetP';
import styled  from 'styled-components';

const Div = styled.div`
 display:grid;
 grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
 grid-gap:20px;
`

const SignupUser = (props)=>{
  return(
   <Div>
    <Signup />
    <Signin/>
    <RequestResetP />
  </Div>
  )
}

export default SignupUser;
