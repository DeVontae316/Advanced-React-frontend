import React,{Component} from 'react';
import Form from './styles/Form';
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';
import ErrorMessage from './ErrorMessage';
//1.Create a form that will recieve an email to recieve an resetToken
/*2.Create an graphql mutation via apollo that will
recieve the users email*/
const REQUEST_TOKEN_MUTATION = gql`
 mutation REQUEST_TOKEN_MUTATION($email:String!){
   requestToken(email:$email){
     message
   }
 }
`
class RequestReset extends Component {
  state = {
    email:" ",
  }

  onChange = (e)=>{
    const{name,type,value} = e.target;

    this.setState({
      [name]:value
    });
  }
  render(){
    return(
      <Mutation mutation={REQUEST_TOKEN_MUTATION} variables={this.state}>
       {(requestToken,{loading,error,called})=>{
         if(loading)<p>loading...</p>
         return<Form method="post"
         data-test="form"
         onSubmit={async (e)=>{
           
           e.preventDefault();
           await requestToken();
           this.setState({
             email: " ",
           });
         }}>
          CHANGE PASSWORD
          <ErrorMessage error={error} />
          {!error && !loading && called && <p>Check email for reset link</p>}
          <fieldset>

           <span>EMAIL</span>
           <label htmlFor="email">
             <input type="text"
             onChange={this.onChange}
             placeholder="Email"
             required value = {this.state.email}
             id="email"
             name="email"/>
           </label>
           <button type="onSubmit">Change Password</button>
          </fieldset>
         </Form>
       }}
      </Mutation>

    )
  }
}
export{REQUEST_TOKEN_MUTATION };
export default RequestReset;
