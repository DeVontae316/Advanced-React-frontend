import PropTypes from 'prop-types';
import Order from '../components/Order';

const OrderPage = ({query})=>{
    return(
        <div>
          <h1>Thank you for your purcahse!!!:)</h1>
          <Order id={query.id} />
        </div>
    )
}

export default OrderPage;