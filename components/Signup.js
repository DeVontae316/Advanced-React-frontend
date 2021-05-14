import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import ErrorMessage from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';


const SIGN_UP_MUTATION = gql`
mutation SIGN_UP_MUTATION($name:String! $password:String! $email:String!){
  signup(name:$name password:$password email:$email){
    id
    name
    email
  }
}
`


function Signup(props) {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  /*  state = {
     name: "",
     password: "",
     email: ""
   } */
  const onSubmit = async (e, signupMutation) => {
    e.preventDefault();
    await signupMutation({
      variables: {
        /*  ...this.state, */
        name,
        password,
        email
      }
    });
  }
  /* onChange = (e) => {
    const { name, value, type } = e.target;
    setName(value);
    this.setState({
      [name]: value
    });
  } */

  return (
    <Mutation refetchQueries={[{ query: CURRENT_USER_QUERY }]} mutation={SIGN_UP_MUTATION}>
      {(signup, { loading, error }) => {
        if (loading) <p>Loading...</p>

        return <Form method="post" onSubmit={
          async (e) => {
            e.preventDefault();

            await onSubmit(e, signup);
          }}
        >
          SIGN UP FOR AN ACCOUNT
         <fieldset disabled={loading} aria-busy={loading}>
            Name
          <label htmlFor="name">
              <ErrorMessage error={error} />
              <input type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required value={name}
                id="name"
                name="name"
              />
            </label>
        Email
          <label htmlFor="email">
              <input type="text"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required value={email}
                id="email"
                name="email"
              />
            </label>
        Password
            <label htmlFor="password">
              <input type="text"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required value={password}
                id="password"
                name="password"
              />
            </label>
            <button type="onSubmit">Submit</button>
          </fieldset>
        </Form>
      }}

    </Mutation>

  )
}


export default Signup;
export { SIGN_UP_MUTATION };