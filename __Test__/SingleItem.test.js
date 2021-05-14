/*
What is the difference between shallowing rendering and mounting?

1.The code...
  a.Shallow rendering - const wrapper = shallow(<Component prop={foo} />);
   1.expect(wrapper).toMatchSnapshot();
  b.Mounting = const wrapper = mount(<component props={foo}/>);
   1.expect(toJSON(wrapper.find('h2))).toMatchSnapshot();

2.When you use one or the other
 a.Shallow rendering is good for basic component not using apollo store
 b. Mounting is good for components who rely on Apollo Provider

3.implementation
a.Mounting requires a 'mock provider' to simulate the Apollo provider
 const mocks = [{
     request:{query:YOUR_EXPORTED_QUERY,variables:{id:"123"}},
     result:{data:{
         item:fakeData()
     }}
 }]
 1. const wrapper = mount(
     <MockProvider>
      <Component props={mocks} />
     </MockProvider>
 )
 2. Also requires a timer(update wrapper after this) to simulate the loading phase of a page
  a. await wait
  b. wrapper.update()
*/
  


/*
Why do we only 'snap shot' peices of our wrapper variable?

Because we will uneccesarly snap shot the whole apollo store with the elements we are truly interested.

Why do we use mounting vs shallow rendering with our components that use Apollo?

We need to do a mount to get the full spectrum of our component

Why do we have a Mocked Provider?

Becasue our SingleItem component looks for it's parent to query against.
If this isn't found in your testing files, which it isn't,we will recieve an error once
we run the test.To remedy this situation, we must wrap a "Mock Provider" around our child component
to simulate what an actual query might look like.

What are  mocks?

An array with an object containing the following property names: 'request'  and 'result'.
The values for the the request title is an object with property name/value of: query:"YOUR_QUERY" and 
a property name/value of: variables:{id:"123"}
The values for the the result title is an object with a property name/value of: data:{item:fakeItem()} 

ie: const mock = [{
    request:{query:"YOUR_QUERY",variables:{id:"123"}},
    result:{
     data:{
        item:fakeItem()
    }
    }
}]
*/

import {mount} from 'enzyme';
import { EnzymeAdapter } from "enzyme";
import toJSON from 'enzyme-to-json';
import wait from 'waait';
import SingleItem,{SINGLE_CREATED_ITEM} from '../components/SingleItem';
import {MockedProvider} from 'react-apollo/test-utils';
import {fakeItem} from '../lib/testUtils';
import Item from "../components/styles/ItemStyles";
/* 
const mocks = [{
            request:{query:YOUR_EXPORTED_QUERY,variables:{id:123}},
            result:{
                errors:[{message:"ooops!!!"}]
            }
        }]
 const wrapper = mount(
     <MockProvider mocks={mocks}>
      <Item />
     </MockProvider>
     )
 
 
*/
/*
What does our first mock for SingleItem simulate?

1.A single item being displayed via Rotuer.push({
    pathname:"/item",
    query:{id:response.data.mutationName.id}
})

What does our cart mock simulate?

1.A user signed in with their cart open and item added
*We're taking a snap shot of their open cart

Code the mocks for our SingeItem(1) component vs our Cart Test(2)

1. const mocks = [{
    request:{query:MY_EXPORTED_QUERY/MUTATION,variables:{"123"}},
    result:{data:{item:fakeItem()}
}]

2. const mocks = [{
    request:{query:EXPORTED_LOCAL_QUERY},
    result:{data:{cartOpen:true}}
},
{
    request:{query:CURRENT_USER_QUERY},
    result:{data:{me:fakeUser()}}
}
]

Code the mock provider that will recieve our mocks

1. const wrapper = mount(
    <MockProvider mocks={mocks}>
     <SingleItem  id={123}/>
    </MockProvider>
)

Code the "snap shot" of one of our wrapper elements

await wait();
wrapper.update();

1. expect(toJSON(wrapper.find('h2'))).toMatchSnapShot();
   expect(toJSON(wrapper.find('img'))).toMatchSnapshot();
*/









describe("<SingleItem/>",()=>{
    it('renders with proper data',async ()=>{
     //Mocks - When someone makes a request with this query and variable combo, return mocked data

     
      const mocks = [
          {
              request:{query:SINGLE_CREATED_ITEM,variables:{id:"123"}},
              result:{
                  data:{
                      item:fakeItem()
             }}
          }
      ]

     
      const wrapper = mount(
      <MockedProvider mocks={mocks}>
          <SingleItem id="123" />
      </MockedProvider>  
      
      );
      
     
      
      expect(wrapper.text()).toContain("...loading");
      await wait();//This is simulating the loading state passing
      wrapper.update();
      console.log(wrapper.debug());
      expect(toJSON(wrapper.find('h2'))).toMatchSnapshot();
      expect(toJSON(wrapper.find('p'))).toMatchSnapshot();
      expect(toJSON(wrapper.find('img'))).toMatchSnapshot();
    });

    it("Errors with a not found item",async()=>{
        const mocks2 = [{
            request:{query:SINGLE_CREATED_ITEM,variables:{id:"123"}},
            result:{
                errors:[{message:"Items not found"}]
            }
        }]

        

        const wrapper = mount(
            <MockedProvider mocks={mocks2}>
                <SingleItem id="123" />
            </MockedProvider>  
            
            );
            await wait();
            wrapper.update();
            const item = wrapper.find('[data-test="graphql-error"]')
            expect(toJSON(item)).toMatchSnapshot();
            console.log(item.debug())
    })
})

