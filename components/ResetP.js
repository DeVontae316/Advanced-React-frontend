import React,{Component} from 'react';
import Form from './styles/Form';
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';
import ErrorMessage from './ErrorMessage';
import {CURRENT_USER_QUERY} from './User';
import PropTypes from 'prop-types';
import Router from 'next/router';

const RESET_PASSWORD_MUTATION =  gql`
 mutation RESET_PASSWORD_MUTATION($password:String! $resetToken:String!$confirmPassword:String!){
 resetPassword(password:$password resetToken:$resetToken confirmPassword:$confirmPassword){
         id
         email
         name
    }
  }
`


class ResetP extends Component{
  static proptypes = {
    resetToken:PropTypes.string.isRequired,
  }
  state = {
    password:" ",
    confirmPassword:" ",
    resetToken: " ",
  }

  onChange = (e)=>{
    const{name,value,type} = e.target;
    this.setState({
      [name]:value
    });
  }
  render(){
    return(
      <Mutation mutation={RESET_PASSWORD_MUTATION}
       refetchQueries={[{query:CURRENT_USER_QUERY}]}
       variables={
        {
          password:this.state,
          confirmPassword:this.state,
          resetToken:this.props.resetToken,
        }

      }>
           {(resetPassword,{loading,error,called})=>{
             if(loading)<p>loading...</p>
             return<Form method="post" onSubmit={(e)=>{
               e.preventDefault();
                resetPassword();

               this.setState({
                 password: " ",
                 confirmPassword:" ",
               });

             }}>
               <span>RESET PASSWORD</span>
              <fieldset>
                <ErrorMessage error={error} />
                <label htmlFor="password">
                  <span>Password</span>
                  <input
                  type="text"
                  onChange={this.onChange}
                  placeholder="Password"
                  required value={this.state.password}
                  id="password"
                  name="password"/>
               </label>
               <label htmlFor="confirmPassword">
                 <span>confirmPassword</span>
                 <input
                 type="text"
                 onChange={this.onChange}
                 placeholder="ConfirmPassword"
                 required value={this.state.confirmPassword}
                 id="confirmPassword"
                 name="confirmPassword"/>
              </label>
                 <button type="onSubmit">Change Password</button>
              </fieldset>
             </Form>
           }}
      </Mutation>

    )
  }
}

export default ResetP;
