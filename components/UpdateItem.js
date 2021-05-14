import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Mutation,Query} from 'react-apollo';
import Router from 'next/router';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import gql from 'graphql-tag';
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';
import Item from './Item';


const Center = styled.div`
 text-align:center;
`;

const QUERY_ITEM_UPDATE = gql`
 query QUERY_ITEM_UPDATE($id:ID!){
   item(where:{id:$id}){
     price
     description
     title
   }
 }
`
const ITEM_UPDATE_MUTATION = gql`
 mutation ITEM_UPDATE_MUTATION(
   $id:ID!
   $title:String!
   $description:String!
   $price:Int!
 ){
   updateItem(
     id:$id
     title:$title
     price:$price
     description:$description
   ){
     id
     title
     price
     description
   }
 }
`
class UpdateItem extends Component{
  state = {};

  onChange = (e)=>{
    e.preventDefault();
    const {type,name,value} = e.target;
    const val= type === "number" ? parseFloat(value) : value;

    this.setState({[name]:val});
  }
  onSubmit = async (e,updateMutation)=>{
    e.preventDefault();
    const res = await updateMutation({
      variables:{
        id:this.props.id,
        ...this.state
      }
    });
  }
  render(){
   return(
  <Query
    query={QUERY_ITEM_UPDATE}
    variables={{id:this.props.id}}
    >
    {({data,error,loading})=>{
       console.log(data)
     return <Mutation mutation={ITEM_UPDATE_MUTATION}>
      {(updateItem,{loading})=>(

        <Form onSubmit={(e)=>{this.onSubmit(e,updateItem)}}>
         <fieldset disabled={loading} aria-busy={loading}>
          <label htmlFor="title">
           Title
           <input
            onChange={this.onChange}
            placeholder="Title"
            id="title"
            name="title"
            type="text"
            defaultValue={data.item.title}
           />
          </label>
          <label htmlFor="description">
           Description
           <input
            onChange={this.onChange}
            placeholder="Title"
            id="description"
            name="description"
            type="text"
            defaultValue={data.item.description}
           />
          </label>
          <label htmlFor="price">
           Price
           <input type="number"
            defaultValue={data.item.price}
            name="price"
            id="price"
            onChange={this.onChange}
            placeholder="Price"
           />
          </label>
         </fieldset>
         <button type="onSubmit">Sav{loading ? "ing" : "e"} Changes</button>
        </Form>
      )}
     </Mutation>


   }}

  </Query>

    )
  }

}


export default UpdateItem;
export { QUERY_ITEM_UPDATE };
