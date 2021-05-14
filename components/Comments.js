import React,{Component} from 'react';
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';

const SEND_MESSAGE = gql`
mutation SEND_MESSAGE($message:String!){
    createMessage(message:$message){
        id 
        message
        user{
            id
            name 
            messages{
                message
            }
        }
    }
}
`


class Comments extends Component{
    state = {
       message:""
    }

    onChange = (e)=>{
        const{name,value,type} = e.target;
        this.setState({
            [name]:value,
        });
    }

    onSubmit = async (e,mutation)=>{
        e.preventDefault();
        const res = await mutation().catch(err => alert(err.message));
        console.log(res);
       
       
    }
    render(){
        return(
         <Mutation mutation={SEND_MESSAGE} variables={{message:this.state.message}}>
            {(createMessage,{loading,error})=>(
                <div>
                    <form onSubmit={(e)=>this.onSubmit(e,createMessage)}>
                        <fieldset>
                            Description
                            <label htmlFor="description">
                                <textarea name="message"onChange={this.onChange} />
                            </label>
                            <button type="onSubmit">Click</button>
                        </fieldset>
                    </form>
                </div>
            )}
         </Mutation>
           
        )
    }
}


export default Comments;