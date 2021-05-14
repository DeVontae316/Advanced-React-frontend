import Pagination,{PAGINATION_QUERY} from "../components/Pagination";
import {mount} from 'enzyme';
import wait from 'waait';
import {MockedProvider} from 'react-apollo/test-utils';
import {fakeItem, fakeUser} from '../lib/testUtils';
import toJSON from 'enzyme-to-json';
import{REQUEST_TOKEN_MUTATION } from '../components/RequestResetP';
import RequestResetP from '../components/RequestResetP';
//Stop @ 5:15
const mocks = [{
    request:{
        query:REQUEST_TOKEN_MUTATION,
        variables:{
            email:"Test2@gmail.com"
        },
        result:{
            data:{
                requestToken:{
                    message:"Success",
                    __typename:"Message"
                }
            }
        }
    }
}]

describe("<Request/>",()=>{
    fit("Renders and matches snap shot",async()=>{
        const wrapper = mount(
            <MockedProvider >
             <RequestResetP />
            </MockedProvider>
        )
        const form = wrapper.find("form[data-test='form']");
       
        expect(toJSON(form)).toMatchSnapshot();
    });
   
})