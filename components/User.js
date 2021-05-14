import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import PropTypes from 'prop-types';

const CURRENT_USER_QUERY = gql`
 query CURRENT_USER_QUERY{
   me{
     id
     email
     name
     permissions
    
     cart{
       id 
       quantity
       item{
         id
         image
         price 
         description
         title
       }
     }
   }
 }
`

const User = (props)=>(
  <Query {...props}query={CURRENT_USER_QUERY}>
   {payload => props.children(payload) }
  </Query>
)

User.propTypes = {
  children:PropTypes.func.isRequired,
}

export default User;
export {CURRENT_USER_QUERY};
