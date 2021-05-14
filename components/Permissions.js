import {Query,Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import Error from './ErrorMessage';
import Table from '../components/styles/Table';
import SickButton from './styles/SickButton';
import React,{Component} from 'react';
import PropTypes from 'prop-types';

const permissions = [
  'ADMIN',
  'USER',
  'ITEMCREATE',
  'ITEMUPDATE',
  'ITEMDELETE',
  'PERMISSIONUPDATE'

];
const UPDATE_PERMISSIONS = gql`
 mutation UPDATE_PERMISSIONS($permissions:[permissions]
   $userId:ID!){
     updatePermissions(permissions:$permissions userId:$userId){
       id
       name
       permissions
       email
     }
   }
`
const QUERY_ALL_USERS = gql`
 query QUERY_ALL_USERS{
   users{
    id
    name
    email
    permissions
   }
 }
`

const Permissions = (props)=>(

  <Query query={QUERY_ALL_USERS}>
   {({data,loading,error})=>console.log(data) || (

      <div>
       <Error error={error} />
       <div>
        <p>HEY</p>
         <Table>
          <thead>
           <tr>
             <th>name</th>
             <th>email</th>
             {permissions.map(permissions =>(<th key={permissions}>{permissions}</th>))}
           </tr>
          </thead>
          <tbody>
          {data.users.map(user => <UserPermissions key={user.id}user={user}/>)}
          </tbody>
         </Table>
        </div>
      </div>
    )}
  </Query>

)

class UserPermissions extends Component{
  static propTypes = {
    user:PropTypes.shape({
      name:PropTypes.string,
      email:PropTypes.string,
      id:PropTypes.string,
      permissions:PropTypes.array
    }).isRequired
  };

  state={
    permissions:this.props.user.permissions,
  }
  onChange = (e)=>{
    const checkbox = e.target;
    //take copy of current permissions
    let updatedPermissions = [...this.state.permissions];
    //Figure out if we need to add or remove permission
    if(checkbox.checked){
      updatedPermissions.push(checkbox.value);
    }else{
      updatedPermissions = updatedPermissions.
      filter(permission => permission !== checkbox.value)
    }
    this.setState({
      permissions:updatedPermissions
    });
    console.log(updatedPermissions);
  }
  render(){
    const user = this.props.user;
     return (
       <Mutation
         mutation={UPDATE_PERMISSIONS}
         variables={{
           permissions: this.state.permissions,
           userId: this.props.user.id,
         }}
       >
         {(updatePermissions, { loading, error }) => (
           <>
             {error && <tr><td colspan="8"><Error error={error} /></td></tr>}
             < tr >
               <td>{user.name}</td>
               <td>{user.email}</td>
               {permissions.map(permission => (
                 <td key={permission}>
                   <label htmlFor={`${user.id}-permission-${permission}`}>
                     <input
                       id={`${user.id}-permission-${permission}`}
                       type="checkbox"
                       checked={this.state.permissions.includes(permission)}
                       value={permission}
                       onChange={this.Onchange}
                     />
                   </label>
                 </td>
               ))}
               <td>
                 <SickButton type="button" disabled={loading} onClick={updatePermissions}>
                   Updat{loading ? 'ingjabroni' : 'e'}
                 </SickButton>
               </td>
             </tr>
           </>
         )
         }
       </Mutation>
     );
   }
}

export default Permissions;
