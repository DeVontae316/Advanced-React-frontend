import React,{Component} from 'react';
import Downshift,{resetIdCounter} from 'downshift';
import Router from 'next/router';
import {ApolloConsumer} from 'react-apollo';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import {DropDown, DropDownItem, SearchStyles} from './styles/DropDown';

/*const SEARCH_ITEMS_QUERY = gql`
 query SEARCH_ITEMS_QUERY($searchTerm:String!){
     items(where:{OR:[{title_starts_with:$searchTerm}, {description_starts_with:$searchTerm}]}){
         id
         title
         image
         
     }
 }
`*/
const SEARCH_ITEMS_QUERY = gql`
 query SEARCH_ITEMS_QUERY($searchTerm:String!){
     items(where:{
         OR:[{title_starts_with:$searchTerm}, {description_starts_with:$searchTerm}]
     }){
         id 
         title 
         image
     }
 }
`

function routeToItem(item){
   Router.push({
       pathname:"/item",
       query:{
           id:item.id
       }
   })
}
/*How do we query data with Apollo Consumer vs. a render prop*/ //Wrap input with Apollo consumer vs Query/Mutation Component
/* What value does Apollo Consumer return */ //Client - this is the apollo state management system itself
/* What is e.persist() */
/*class AutoComplete extends Component{
    state = {
        items:[],
        loading:false,
    }
    onChange = debounce(async (event,client)=>{
        console.log("Searching...");
       
        this.setState({loading:true});
        const res= await client.query({
            query:SEARCH_ITEMS_QUERY,
            variables:{searchTerm:event.target.value}
        });
        console.log(res);
        console.log("event target value next");
        console.log(event.target.value);
        console.log("event target");
        console.log(event.target);
        console.log("event");
        console.log(event)
        this.setState({items:res.data.items,loading:false});
    },350)

   
    render(){
        resetIdCounter();
      return(
         <SearchStyles>
             <Downshift onChange={routeToItem}itemToString={item => item === null ? '': item.title}>
                 {({getInputProps,getItemProps,isOpen,inputValue,highlightedIndex})=>{
                  return<div>
                  <ApolloConsumer>
                      {(client)=>(
                         <input 
                          {...getInputProps({
                            type:"search" ,
                            id:"Search",
                            className:this.state.loading ? 'loading': '',
                            placeholder:"Search for an item",
                            onChange:(e)=>{
                                e.persist();
                                this.onChange(e,client);
                                console.log("My event without persist");
                                console.log(e);
                                
                            }

                          })}
                        />
                      )}
                    
                  </ApolloConsumer>
                  {isOpen && (
                     <DropDown>
                     
                     {this.state.items.map((item,index,array)=>(<DropDownItem key={item.id}
                      highlighted={index === highlightedIndex}
                      {...getItemProps({item})}
                     >
                       
                       <img width="100"src={item.image} />
                       {item.title}
                        
                     </DropDownItem>))}
                     {!this.state.items.length && !this.state.loading &&
                        <DropDownItem>Nothing found for {inputValue}</DropDownItem>
                     }
                   </DropDown>       
                  )}
                  
               </div> 
                 }}
             </Downshift>
             
         </SearchStyles>
      )
  }
}*/
function onChange(item){
 Router.push({
     pathname:"/item",
     query:{
         id:item.id
     }
 })
}
function Practice(foo){
    Router.push({
        pathname:"/item",
        query:{
            id:foo.id
        }
    })
}
const style = {
   border:" 10px solid pink"
}
class AutoComplete extends Component{
    state = {
        res:[],
        loading:false,
    }
    /*onChange = debounce(async (client,event)=>{
       
        this.setState({loading:true});
       
        if(event.target.value !==""){
            const res = await client.query({
                query:SEARCH_ITEMS_QUERY,
                variables:{
                    searchTerm:event.target.value,
                }
            }); 
            this.setState({ res:res.data.items,loading:false}); 
            console.log("Target");
            console.log(event.target.value);
       
            console.log(res);
        }else{
            this.setState({
                res:[],
                loading:false,
            })
        }
        
        
    },350);*/
    onChange = debounce(async (client,e)=>{
        this.setState({loading:true});
        if(e.target.value !== ""){
            const response = await client.query({
                query:SEARCH_ITEMS_QUERY,
                variables:{
                    searchTerm:e.target.value
                }
            })
            this.setState({res:response.data.items,loading:false});
            console.log("Response");
            console.log(response);
        }else{
            this.setState({res:[],loading:false});
        }
       
        
    },350)
   
    render(){
        resetIdCounter();
        return(
          <SearchStyles>               
              
              <Downshift onChange={Practice} itemToString={item => item === null ? "":item.title}>
                  {({getItemProps,getInputProps,isOpen,highlightedIndex})=>(
                     <div>
                     <ApolloConsumer>
                        {(client)=>(
                            <input 
                            {...getInputProps({
                                onChange:(e)=>{
                                    e.persist();
                                    this.onChange(client,e);
                                },
                                placeholder:"Search",
                                className: this.state.loading ? "loading" : "",
                            })}
                            
                            /*onChange={(e)=>{
                                e.persist();
                                this.onChange(client,e);
                            }} 

                            placeholder="Search for items here"*/
                            
                             />
                        )}
                        
                    </ApolloConsumer>
                    {isOpen &&(
                         <DropDown>
                         {this.state.res.map((item,index)=>(
                             <DropDownItem key={item.id} 
                              highlighted = {index === highlightedIndex ? "highlighted" : ""} 
                             
                           {...getItemProps({item})}>
                             <img src={item.image} width="100" />
                             {item.title}
                             </DropDownItem>
                         ))}
                     </DropDown>
                    )} 
                    
                  
                    
                   
                   </div>
                 
                    
                  )}
              
              </Downshift>
               
                  
            
        </SearchStyles>
            
        )
    }
}

/*
const res = cache.readQuery({
    query:MY_QUERY
});

const delete =
*/ 


export default AutoComplete;
