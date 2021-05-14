import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import ErrorMessage from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';

const SIGN_IN_MUTATION = gql`
mutation SIGN_IN_MUTATION( $password:String! $email:String!){
  signin(password:$password email:$email){
    id
    email
  }
}
`

class Signin extends Component {

  state = {

    password: "",
    email: ""
  }
  onSubmit = async (e, signupMutation) => {
    e.preventDefault();
    const val = await signupMutation({
      variables: {
        ...this.state,
      }
    });
  }
  onChange = (e) => {
    const { name, value, type } = e.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    return console.log("form still works...") || (
      <Mutation refetchQueries={[{ query: CURRENT_USER_QUERY }]} mutation={SIGN_IN_MUTATION}>
        {(signin, { loading, error }) => {
          if (loading) <p>Loading...</p>

          return <Form method="post" onSubmit={
            (e) => {
              return this.onSubmit(e, signin)
            }}
          >
            <span>SIGN IN FOR AN ACCOUNT</span>
            <fieldset disabled={loading} aria-busy={loading}>
              <ErrorMessage error={error} />

        Email
          <label htmlFor="email">
                <input type="text"
                  onChange={this.onChange}
                  placeholder="Email"
                  required value={this.state.email}
                  id="email"
                  name="email"
                />
              </label>
        Password
            <label htmlFor="password">
                <input type="text"
                  onChange={this.onChange}
                  placeholder="Password"
                  required value={this.state.password}
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
}

export default Signin;
