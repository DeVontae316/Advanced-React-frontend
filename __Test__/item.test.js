import ItemComponent from '../components/Item';
import{shallow,mount} from 'enzyme';
import toJSON from 'enzyme-to-json';
/*
How do we render a component in a test?
We use enzyme's shallow rendering!

How would we snap shot our shallow render Item component? 

1. const wrapper = shallow(<ItemComponent item={fakeItem} />);
   expect(toJSON(wrapper).toMatchSnapshot();
2. How would we test a value from one of the children components?
   const title = wrapper.find("Title a");
   expect(title.text()).toBe("....");

*/ 
const fakeItem = {
    id:"ABC123",
    title:"Cool item",
    price:50,
    description:"You know what it is",
    image:"bob.jpg",
    largeImage:"Billy.jpg",

}

describe("<Item/>",()=>{
    it("Oh snap",()=>{
        const wrapper = shallow(<ItemComponent item={fakeItem}/>);
        
        expect(toJSON(wrapper)).toMatchSnapshot();
        
    })
    fit('renders and displays image properly',()=>{
        const wrapper = shallow(<ItemComponent item={fakeItem}/>);
        const image = wrapper.find('img');
        console.log(wrapper.debug());
       
        expect(image.props().src).toBe(fakeItem.image);
        
        
    });
    fit('renders and displays Title anchor tag properly',()=>{
        const wrapper = shallow(<ItemComponent item={fakeItem}/>);
        const Title = wrapper.find('Title a');
        
        expect(Title.text()).toBe(fakeItem.title);
        
    });
    fit('renders and displays PriceTag properly',()=>{
        const wrapper = shallow(<ItemComponent item={fakeItem}/>);
        const PriceTag = wrapper.find('PriceTag');
        
        expect(PriceTag.children().text()).toBe('$0.50');
       
    });
    fit('renders and displays Button properly',()=>{
        const wrapper = shallow(<ItemComponent item={fakeItem}/>);
        const buttonList = wrapper.find('.buttonList');
        expect(buttonList.children()).toHaveLength(5);
        expect(buttonList.find('Link')).toHaveLength(1);
        expect(buttonList.find("AddCartPractice").exists()).toBe(true);
    });
})