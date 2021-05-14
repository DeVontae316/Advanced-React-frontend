import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';
import {Query} from 'react-apollo';
import React,{Component} from 'react';
import Form from './styles/Form';

const QUERY_ITEM_UPDATE = gql`
 query QUERY_ITEM_UPDATE($id:ID!){
   item(where:{id:$id}){
     id
     description
     title
     price
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
class UpdateItem2 extends Component{
  state = {};
  onSubmit = async(e,updateMutation)=>{
    e.preventDefault();
    const res = await updateMutation({
      variables:{
        id:this.props.id,
        ...this.state
      }
    });
  }

  onChange = (e)=>{
    const {value,name,type} = e.target;
    console.log(name);
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({[name]:val})
  }

  render(){
    const tempRequiredValueforForm = "Bob";




    return(
    <Query query={QUERY_ITEM_UPDATE}   variables={{id:this.props.id}}>
      {({data,loading,error})=>{
        return<Mutation mutation={ITEM_UPDATE_MUTATION} >
              {(updateItem,{loading,error})=>{
                if(loading)<p>...loading</p>
                if(error)<p>{error.message}</p>
                return<Form onSubmit={(e)=>{this.onSubmit(e,updateItem)}}>
                      <fieldset disabled={loading} aria-busy={loading}>
                      Title
                       <label htmlFor="title">
                        <input type="text" onChange={this.onChange}
                        placeholder="Title"

                        defaultValue={data.item.title}
                        id="title"
                        name="title"/>
                       </label>
                       Price
                       <label htmlFor="price">
                        <input type="number"
                        defaultValue={data.item.price}
                        onChange={this.onChange}
                        id="price"
                        name="price"
                        placeholder="Price"/>
                       </label>
                       Description
                       <label htmlFor="description">
                        <textarea
                         id="description"
                         name="description"
                         onChange={this.onChange}
                         defaultValue={data.item.description}
                        />
                       </label>
                       <button type="onSubmit">Submit</button>
                      </fieldset>
                  </Form>
              }}
        </Mutation>


      }}
    </Query>




    )
  }
}

export default UpdateItem2;
