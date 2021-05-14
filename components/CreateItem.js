import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Mutation} from 'react-apollo';
import Router from 'next/router';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import gql from 'graphql-tag';
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';


const Test = styled.div`
max-width:500px;
margin: 0 auto;
color:${props =>props.theme.softPurple};
`;

const CREATE_ITEM_MUTATION = gql`
 mutation CREATE_ITEM_MUTATION(
   $title:String!
   $description:String!
   $image:String
   $largeImage:String
   $price:Int!
 ){
   createItem(
    title:$title
    description:$description
    image:$image
    largeImage:$largeImage
    price:$price
   ){
     id
   }
 }
`
/*class CreateItem extends Component{
  state = {
    title:'default',
    description: 'default',
    image: 'no.png',
    largeImage: 'nope.png',
    price:0
  };

  onChange = (e) =>{
    const{name,value,type} = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({[name]:val});
  };




  uploadFile = async (e)=>{
    /*
    Get files via FileList object
    and prepare files
    via FormData append
    method.
    */

    /*const files = e.target.files;
    const data = new FormData();
    data.append('file',files[0]);
    data.append('upload_preset','SickFiits');

    const res = await fetch('https://api.cloudinary.com/v1_1/dhnbtmpj6/image/upload',
      {
        method:'POST',
        body:data
      });
    const json = await res.json();

    console.log(json);

    this.setState({
      image:json.secure_url,
      largeImage:json.eager[0].secure_url
    })
  }
  render(){
    return(
      <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}
      >
      {(createItem,{loading,error})=>(
       <Test>
        <Form onSubmit={async (e)=>{
          e.preventDefault();
          const val = await createItem();
          console.log(val);
          Router.push({
            pathname:'/item',
            query:{id:val.data.createItem.id}
          });
        }}>
         <ErrorMessage error={error} />
          <fieldset disabled={loading} aria-busy={loading}>
          File
           <label htmlFor="file">
            <input onChange={this.uploadFile} placeholder="Upload a image"
            id="file" name="file"
            type="file" />
           </label>
          Title
           <label htmlFor="title">
            <input onChange={this.onChange} placeholder="title"
            required value={this.state.title} id="title" name="title"
            type="text" />
           </label>
           Price
            <label htmlFor="price">
             <input onChange={this.onChange} placeholder="price"
             required value={this.state.price} id="price" name="price"
             type="number" />
            </label>
            Description
             <label htmlFor="price">
              <textarea onChange={this.onChange} placeholder="description"
              required value={this.state.description}
              id="description" name="description"
              />
             </label>
             <button type="onSubmit">Submit</button>
          </fieldset>
         </Form>
        </Test>



      )}
      </Mutation>



    )
  }
}*/

const CREATE_ITEM_MUTATION2 = gql`
mutation CREATE_ITEM_MUTATION($title:String! $description:String! 
  $largeImage:String!$image:String!$price:Int!){
    createItem(title:$title description:$description image:$image largeImage:$largeImage){
      id
      
    }
  }
`

class CreateItem extends Component{
  state = {
    title:'',
    description: '',
    image: '',
    largeImage: '',
    price:0
  };

  onChange = (e)=>{
    const{name,value,type} = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({[name]:val});
  }

  uploadFile = async (e)=>{
    /*
    Get files via FileList object
    and prepare files
    via FormData append
    method.
    */
   /*
   1.Get files you uploaded
          a. const files = e.target.files;
         
        2.Create a FormData object so you can prepare your files to be sent to the cloudinary api via the append method
          a.const data = new FormData();
          b.data.append('file',files[0]);
          c.data.append('upload_preset','sick_fits');
        
        3.Send data to cloudinary api via the fetch api
          a.const res = await fetch(".../endpoint",{
              method:"POST",
              body:data
          })
        
        4.Retrieve promise from cloudinary api
         a. const json = res.json();

        5.Attach data from payload to state.

         a. setState({
             image:json.secure_url,
             largeImage:eager[0].secure_url  global.fetch = jest.fn({
                 json:()=>({
                     eager:[{secure_url:image}]
                 })
             })
         }) 
   */

    const files = e.target.files;
    const data = new FormData();
    data.append('file',files[0]);
    data.append('upload_preset','SickFiits');

    const res = await fetch('https://api.cloudinary.com/v1_1/dhnbtmpj6/image/upload',
      {
        method:'POST',
        body:data
      });
    const json = await res.json();

    console.log(json);

    this.setState({
      image:json.secure_url,
      largeImage:json.eager[0].secure_url
    })
  }
  
  render(){
    return<Mutation mutation={CREATE_ITEM_MUTATION2} variables={this.state}>
      {(createItem,{loading,error})=>(
         <Form data-test="form" onSubmit={async(e)=>{
           e.preventDefault();
            const res = await createItem();
           Router.push({
             pathname:"/item",
             query:res.data.createItem.id,
           })
           console.log(res);
         }}>
         <fieldset disabled={loading} aria-busy={loading}>
           File
           <label htmlFor="file">
             <input type="file" onChange={this.uploadFile}
             name="file" 
             id="file"/>
           </label>
           Title
           <label htmlFor="title">
             <input type="text" onChange={this.onChange}
              placeholder="title"
              required value ={this.state.title}
              id="title"
              name="title"
             />
           </label>
            Price
           <label htmlFor="price">
             <input onChange={this.onChange} placeholder="price"
             required value={this.state.price} id="price" name="price"
             type="number" />
            </label>
            Description
           <label htmlFor="description">
             <textarea onChange={this.onChange}
             placeholder="Description"
             required value={this.state.description}
             id="description"
             name="description"
             />
           </label>
           <button type="onSubmit">Submit</button>
         </fieldset>
       </Form>
      )}
    </Mutation>
    
  }
}








export default CreateItem;
export { CREATE_ITEM_MUTATION };
export {CREATE_ITEM_MUTATION2};
