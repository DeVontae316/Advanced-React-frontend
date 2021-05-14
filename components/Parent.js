import React,{Component} from 'react';
import Child from './Child';
import Hooks from './Hooks';

const candidates =[
    {id:1,name:"Cindy",age:17},
    {id:2,name:"Teresa",age:32},
    {id:3,name:"Kimberly",age:41},
    {id:4,name:"Ashlie",age:22},
    {id:5,name:"Sara",age:26}
];

class Parent extends Component{
    
    state = {
        isOn:false,
        dates: candidates,
    }

    toggle = (idRecievedFromChildComponent)=>{
        let randomDate = Math.floor((Math.random() * 5) + 1);
        
        let chosenGirl = this.state.dates.filter(person => person.id == randomDate).map(person => person);
        if(this.state.isOn === false){
            this.setState({
                isOn:!this.state.isOn,
                dates:chosenGirl,
            },console.log("What my dates look like:" + "\n" + chosenGirl[0].name));
        }else{
            this.setState({
                isOn:!this.state.isOn,
                dates:candidates,
            })
        }
        
         
    }
    render(){
        console.log(this.state.isOn);
        return(
            <div>
                <p>Hello</p>
               
            </div>
            
        )
    }
}


export default Parent;


