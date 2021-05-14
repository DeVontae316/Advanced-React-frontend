import Router from 'next/router';
import CreateItem,{CREATE_ITEM_MUTATION2} from "../components/CreateItem";
import {mount} from 'enzyme';
import wait from 'waait';
import {MockedProvider} from 'react-apollo/test-utils';
import {fakeItem, fakeUser} from '../lib/testUtils';
import toJSON from 'enzyme-to-json';

//stop @6:30
const Image =  "https://dog.com/dog.jpg";
global.fetch = jest.fn().mockResolvedValue({
    json:()=>({
        secure_url:Image,
        eager:[{secure_url:Image}]
    })
});
/*
How do we mock our fetch method?
1.Mock it as a global api and not an import

global.fetch = jest.fn().mockedResolvedValue({
    json:()=>({
        secure_url:image,
        eager:[{secure_url:image}]
    })
})
*/
/*
What are the 4 main parts of a fetch request
1.await(fetch is a promise)
2.Request URL(Where do you want to go)
3.method(What do you want to do when you get there)
4.body(What data are you bringing with you)

fetch is a vacation:
Where do you want to go? Request URL
What do you want to do? method
What do you want to bring? body

*3-4 are object property names 
and they're the second parameter to the fetch method. 
The first is the request url
const file = e.target.files
const data = new FormData();
data.append('file',file[0]);
data.append('upload_preset','sickfits');

const res = await fetch("https://somewhere.com/ccc/",{
    method:"POST",
    body:data
})

res above returns a json function with data you want

const hold = await res.json();

setState({
    image:hold.secure_url,
    largeImage:hold.eager[0].secure_url,
})
*/

const mocks = [{
    request:{query:CREATE_ITEM_MUTATION2,variables:{}},
    result:{data:{CreateItem:fakeItem()}}
}]
describe("<CreateItem />",()=>{
    /*it("renders and matches snapshot",async()=>{
        const wrapper = mount(
            <MockedProvider >
                <CreateItem />
            </MockedProvider>
        )
        const form = wrapper.find('[data-test="form"] ');
        expect(toJSON(form)).toMatchSnapshot();

    });*/
    it("uploads a file when changed",async()=>{
        const wrapper = mount(
            <MockedProvider >
                <CreateItem />
            </MockedProvider>
        )
        //1.Find file input
        const input = wrapper.find("input[type='file']");
        //Simulate on change event
        input.simulate("change",{target:{files:["dog.jpg"]}})
        //Simulates promise from cloudinary api
        await wait();
        //Gets instance of component to see what's happening
        const component = wrapper.find("CreateItem").instance();
        console.log(component);
        expect(component.state.image).toEqual(Image);
        expect(component.state.largeImage).toEqual(Image);
        expect(global.fetch).toHaveBeenCalled();
        //Setting global.fetch.mockReset() removes any mocked return values from global.fetch so other test can be implememnted with global.fetch
        global.fetch.mockReset();
        /*
        global.fetch = jest.fn({
            json:()=>({
                secure_url:image,
                eager:[{secure_url:image}]
            })
        })
        1.Find file input
        const file = wrapper.find("input[type="file"]");
        
        2.Simulate on change event
        file.simulate("change",{target:{files:["....jpg"]}});
        
        3.Simulate promise by cloudinary api
        await wait
        
        4.Get instance of component
        const component = wrapper.find("CreateItem").instance()
        
        5.Expect components image to match global fetch api response
        expect(component.state.image).toEqual(image)
        
        6.Code gloabl fetch api
        7.Code "upload" from CreateItem component
        8.Write a mock for a single item component
        
        1. const file = wrapper.find('input[type=file]');
        2. file.stimulate('change',{target:{files:["blah.jpg"]}});
        3. await wait()
        4. const component = wrapper.find("CreateItem").instance()
        5. expect(component.state.image).toEqual(Image)
        6. global.fetch = jest.fn({
            json:()=>({
                secure_url:image,
                eager:[{secure_url:image}]
            })
        })
        7...
         
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
        8. const mocks = [{
            request:{query:YOUR_EXPORTED_QUERY,variables:{id:123}},
            result:{data:{
                item:fakeItem()
            }}
        }]
           

         */
    })
    it("handles state updating",async()=>{
        const wrapper = mount(
            <MockedProvider >
                <CreateItem />
            </MockedProvider>
        )
         wrapper.find('#title').simulate('change',{target:{value:"Testing",name:"title"}});
         wrapper.find("#price").simulate('change',{target:{value:70000,name:"price",type:"number"}});
         wrapper.find("#description").simulate('change',{target:{value:"Blah Blah Blah",name:"description"}});
         expect(wrapper.find("CreateItem").instance().state).toMatchObject({
             title:"Testing",
             price:70000,
             description:"Blah Blah Blah"
 
         })
        


        
    })
    /*
    Practice mocking the state updating part of our createItem component
    1. create mock provider to access our component's elements
     a. const wrapper = mount(
         <MockProvider>
          <CreateItem />
         </MockProvider>
     )
    2.Find element based on id and simulate an onChange event
      a. wrapper.find("#description").simulate("change",{target:{name:"description",value:"Should be in matchObject function"}});
    
    3. See if component state will match our object
      a.expect(wrapper.find("CreateItem").instance().state).toMatchObject({
          description:"Should be the s..."
      })
     What's the difference between mocking our updated state event and testing wether our component submits data
     1.We create a mock with our mutation
      let item = fakeItem();
      a. const mocks = [{
          request:{query:YOUR_MUTATION,variables:{
              description:item.description,
              title:"....",
              image:'',
              largeImage:'',
              price:"..."
          }}
          result:{
              data:{
                  createItem:{
                      ...fakeItem()
                  }
              }
          }
      }]
      2.We hard coded our values to our react elements

      a. wrapper.find("#description").simulate("change",{target:{value:item.description}})
      
      3. We simulate Router.push()

      a. Router.router = {push:jest.fn()}
      4.We simulate form submit

      a.Wrapper.find("form").simulate("submit");
      await wait();
      expect(Router.router.push).toHaveBeenCalled();
    */ 

    it("creates an item when form is submitted",async()=>{
        
        const item = fakeItem();
        const mocks = [{
            request:{query:CREATE_ITEM_MUTATION2,variables:{
                title:item.title,
                description:item.description,
                image:'',
                largeImage:'',
                price:item.price
            }},
            result:{
                data:{
                createItem:{
                    ...item,
                    
                }
            }}
        }]
        const wrapper = mount(
            <MockedProvider mocks={mocks}>
                <CreateItem />
            </MockedProvider>
        )

         wrapper.find('#title').simulate('change',{target:{value:item.title,name:"title"}});
         wrapper.find("#price").simulate('change',{target:{value:item.price,name:"price",type:"number"}});
         wrapper.find("#description").simulate('change',{target:{value:item.description,name:"description"}});

         Router.router = {push:jest.fn()}
         console.log(wrapper.debug())
         wrapper.find("form").simulate("submit");
         await wait(50);
         
         expect(Router.router.push).toHaveBeenCalled();
         
    })
    /*
    How do we mock our Router.push() function?
    wrapper.find("price").simulate("change",{target:{name:price,type:number,value:item.price}})
    Router.router = {push:jest.fn()};
    Router.router = {push:jest.fn()};
    wrapper.find("form").simulate("submit");
    await wait();
    expect(Router.router.push).toHaveBeenCalled();
    */

    
})