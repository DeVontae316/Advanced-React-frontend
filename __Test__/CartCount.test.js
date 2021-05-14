import CartCount from '../components/CartCount';
import {shallow,mount} from 'enzyme';
import toJSON from 'enzyme-to-json';

describe('<CartCount/>',()=>{
    it('Cart Count',()=>{
      shallow(<CartCount count={10} />)
    });
    it('Matches snapshot',()=>{
        const wrapper = shallow(<CartCount count={10} />)
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
    it('Does it update',()=>{
        const wrapper = shallow(<CartCount count={11} />)
        
        expect(toJSON(wrapper)).toMatchSnapshot();
        
        wrapper.setProps({count:50});
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
    

})