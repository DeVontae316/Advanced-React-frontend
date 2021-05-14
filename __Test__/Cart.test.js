import Router from 'next/router';
import Cart, { LOCAL_STATE_QUERY } from '../components/Cart';
import {mount} from 'enzyme';
import wait from 'waait';
import {MockedProvider} from 'react-apollo/test-utils';
import {fakeItem, fakeUser, fakeCartItem} from '../lib/testUtils';
import toJSON from 'enzyme-to-json';
import {CURRENT_USER_QUERY} from '../components/User';
//Stop @5:30 for break
//Simulating a user who looged in who added an item to his cart and opened his cart
//Where taking a snap shot of the opened cart
 
const mocks = [{
    request:{query:CURRENT_USER_QUERY},
    result:{data:{me:{...fakeUser(),cart:[fakeCartItem()]}}},
    
},
{
    request:{query:LOCAL_STATE_QUERY},
    result:{data:{cartOpen:true}}
}
]

describe("<Cart/>",()=>{
    it(".....",async()=>{
        const wrapper = mount(
            <MockedProvider mocks={mocks}>
                <Cart/>
            </MockedProvider>
        )

        await wait()
        wrapper.update();
        console.log(wrapper.debug());
        expect(toJSON(wrapper.find("header"))).toMatchSnapshot();
        expect(wrapper.find('CartItem')).toHaveLength(1);

    })
   
})
