import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import ErrorMessage from './ErrorMessage';
import {CURRENT_USER_QUERY} from './User';

const RESET_MUTATION = gql`
mutation REQUEST_MUTATION($password:String!
  $confirmPassword:String!
  $resetToken:String!){

  resetPassword(password:$password
  confirmPassword:$confirmPassword
  resetToken:$resetToken){
    id
    email
    name
  }
}
`

class Reset extends Component{
  static proptypes = {
    resetToken:PropTypes.string.isRequired,
  }

  state= {
    password:" ",
    confirmPassword:" ",

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
     <Mutation mutation={RESET_MUTATION}
     refetchQueries={[{query:CURRENT_USER_QUERY}]}
     variables={{
       password:this.state.password,
       confirmPassword:this.state.confirmPassword,
       resetToken:this.props.resetToken,
     }}>
      {(resetPassword,{loading,error,called})=>{
        if(loading)<p>Loading...</p>

        return <Form method="post" onSubmit={
          async (e)=>{
            e.preventDefault();
            const res = await resetPassword();
            res();

          }}
          >
          <span>RESET YOUR PASSWORD</span>

         <ErrorMessage error={error} />


          <fieldset disabled={loading} aria-busy={loading}>
           Password
          <label htmlFor="password">

           <input type="text"
           onChange={this.onChange}
           placeholder="password"
           required value ={this.state.email}
           id="password"
           name="password"/>

           </label>

           Confrim Password

           <label htmlFor="confirmPassword">


             <input type="text"
             placeholder="confirmPassword"
             required value = {this.state.confirmPassword}
             id="confirmPassword"
             name="confirmPassword"
             onChange={this.onChange}/>

           </label>

          <button type="onSubmit">Change Password</button>
          </fieldset>
        </Form>



      }}

     </Mutation>

   )
  }
}

export default Reset;
