import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import ErrorMessage from './ErrorMessage';
import {CURRENT_USER_QUERY} from './User';

const REQUEST_TOKEN_MUTATION = gql`
mutation REQUEST_TOKEN_MUTATION($email:String!){
  requestToken(email:$email){
  message

  }
}
`

class RequestReset extends Component{

  state= {
    email:" "
  }
  /*onSubmit =  async (e,signupMutation)=>{
    e.preventDefault();
    const val =  await signupMutation({
      variables:{
        ...this.state,
      }
    });
  }*/
  onChange = (e)=>{
    const{name,value,type} = e.target;
    this.setState({
      [name]:value
    });
  }
  render(){
    return(
     <Mutation mutation={REQUEST_TOKEN_MUTATION} variables={this.state}>
      {(requestToken,{loading,error,called})=>{
        if(loading)<p>Loading...</p>

        return <Form method="post" onSubmit={
          async (e)=>{
            e.preventDefault();
            const res = await requestToken();

          }}
          >
          <span>REQUEST PASSWORD RESET</span>

         <ErrorMessage error={error} />
          {!error && !loading && called && <p>Check email for reset link</p>}

          <fieldset disabled={loading} aria-busy={loading}>
           Email
          <label htmlFor="email">
           <input type="text"
           onChange={this.onChange}
           placeholder="Email"
           required value ={this.state.email}
           id="email"
           name="email"/>
          <button type="onSubmit">Change Password</button>
           </label>
          </fieldset>
        </Form>



      }}

     </Mutation>

   )
  }
}

export default RequestReset;
