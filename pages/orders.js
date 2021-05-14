import React from "react";
import Popup from "reactjs-popup";
import MyOrders from '../components/MyOrders';
 
 const Orders =  () => (
  <div>
    <MyOrders>
      <Popup trigger={<button> Place Order here</button>} position="right center">
        <div>Popup content here !!</div>
      </Popup>
    </MyOrders>
  </div>
  
);


export default Orders;