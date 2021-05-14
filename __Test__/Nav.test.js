import Nav from "../components/Nav";
import {mount} from 'enzyme';
import { EnzymeAdapter } from "enzyme";
import wait from 'waait';
import SingleItem,{SINGLE_CREATED_ITEM} from '../components/SingleItem';
import {MockedProvider} from 'react-apollo/test-utils';
import {fakeItem, fakeUser} from '../lib/testUtils';
import Item from "../components/styles/ItemStyles";
import toJSON from 'enzyme-to-json';
import {CURRENT_USER_QUERY} from "../components/User";

/*

What are the 3 steps behind creating creating mocks?

1.Retrieve query/mutation you desire.
2.Implement the query/mutation in your mock via the request property.
3.Set the response/data according to what you want to test.

After creating a MockProvider and providing it with mocks, what are 2 basic steps
you must implement if you're simulating a loading state?

1.await wait();
2.wrapper.update();

How would this apply to our SingleItem.test.js

1. Export the query from your SingleItem component
ie: export{Whatever name of query is}

2. const mock = [{
    request:{query:QUERY/MUTATION,variables:{id:"123"}
}]

3. In the example below, we are testing the query as if the id is valid and we expect a payload
const mock = [{
    request:{query:QUERY/MUTATION,variables:{id:"123"},
    result:{
        data:{
            item:fakeItem()
        }
    }
}]
3* The example below is as if we're expecting an error message:
 const mock = [{
    request:{query:QUERY/MUTATION,variables:{id:"123"},
    result:{
        erros:[{message:"Ooops!!!"}]
    }
}]

How would this apply to our Nav.test.js

1.Same as Single Item

2.const mocks = [
    {
        request:{query:YOUR_QUERY},
        
    }
]
3.The code below assumes the user "ISN'T" signed in
const notSignedIn = [
    {
        request:{query:YOUR_QUERY},
        result:{data:{me:null}}
        
    }
]
3. The code below assumes the user 'IS' signed in.
const SignedIn = [
    {
        request:{query:YOUR_QUERY},
        result:{data:{me:fakeUser()}}
        
    }
]
How do we implememt data-test attribute on a form?
1.Go to component and add data-test = "name"

How do we retrieve a element with the data-test attribute for snapshot testing?
1. const element = wrapper.find("[data-test]='nav'");
   expect(toJSON(element)).toMatchSnapshot();

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

describe("<Nav/>",()=>{
    it("It renders a min nav when signed out!",async()=>{
      const wrapper = mount(
          <MockedProvider mocks={notSignedIn}>
              <Nav/>
          </MockedProvider>
      )
      await wait();
      wrapper.update();
      
      const nav = wrapper.find("[data-test='nav']");
      console.log(nav.debug());
      expect(toJSON(nav)).toMatchSnapshot();
    });
    it("It renders max nav when signed in!",async()=>{
        const wrapper = mount(
            <MockedProvider mocks={SignedIn}>
                <Nav/>
            </MockedProvider>
        )
        await wait();
        wrapper.update();
        
        const nav = wrapper.find("[data-test='nav']");
        const count = nav.find("div.count");
        console.log(nav.debug());
        expect(toJSON(count)).toMatchSnapshot();
      })

   
   
});