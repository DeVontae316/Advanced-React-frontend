import PleaseSignIn from "../components/PleaseSignIn";

import {mount} from 'enzyme';
import { EnzymeAdapter } from "enzyme";

import wait from 'waait';
import SingleItem,{SINGLE_CREATED_ITEM} from '../components/SingleItem';
import {MockedProvider} from 'react-apollo/test-utils';
import {fakeItem, fakeUser} from '../lib/testUtils';
import Item from "../components/styles/ItemStyles";
import {CURRENT_USER_QUERY} from "../components/User";
/*
How do I test if a component exists?

const wrapper = <MockProvider mocks={foo}>
 <Component />
</MockProvider>

expect(wrapper.find("....").exists()).toBe(true);
expect(wrapper.contains(<Component />)).toBe(true);

What was the difference between our PleaseSignIn mocks and our SingleItem mocks

SingleItem...
const mocks = [{
    request:{query:SINGLE_ITEM_QUERY,variables:{id:"123"}},
    result:{data:{
        item:fakeItem()
    }},
}]

PleaseSignIn...
const mock1 = [{
    request:{query:CURRENT_USER_QUERY},
    result:{
        data:{
        me:null
    }},
}]
const mock2 = [{
    request:{query:CURRENT_USER_QUERY},
    result:{
        data:{
        me:fakeUser()
    }},
}]
*/ 

const notSignedIn = [{
    request:{query:CURRENT_USER_QUERY},
    result:{data:{
        me:null
    }},
    
}]

const SignedIn = [{
    request:{query:CURRENT_USER_QUERY},
    result:{data:{
        me:fakeUser()
    }},
    
}]

describe('<PleaseSignIn/>',()=>{
    it("Renders sign in dialog to log in users",async()=>{
      const wrapper = mount(
          <MockedProvider mocks={notSignedIn}>
             <PleaseSignIn />
          </MockedProvider>
     
      )

      await wait();
      wrapper.update();
      expect(wrapper.text()).toContain('Please sign in');
      expect(wrapper.find("Signin").exists()).toBe(true);
      console.log(wrapper.debug());

    })
    fit("Renders child component when user is signed in.",async()=>{
        const FakeHey = ()=>{
           return <p>Hey!!!</p>
        }
        const wrapper = mount(
            <MockedProvider mocks={SignedIn}>
               <PleaseSignIn>
               <FakeHey />
               </PleaseSignIn>
            </MockedProvider>
       
        )
  
        await wait();
        wrapper.update();
        expect(wrapper.contains(<FakeHey />)).toBe(true);
        console.log(wrapper.debug());

    })
})