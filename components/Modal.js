import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledModal = styled.div`
.modal{
    width:100%
    height:100%
    background-color:rgba(0,0,0,0.3);
    display:flex;
    justify-content:center;
    align-tiems:center;
    position:absolute;
    top:0;
}
.modal-content{
    width:500px;
    height:300px;
    background-color:white;
    border:red;
}
 
`;

const Modal = (props)=>{
    if(!props.show){
        return null;
    }
    return <StyledModal>
        <div className="modal">
            <div className="modal-content">
            <fieldset aria-busy>
         
          Title
           <label htmlFor="title">
            <input  placeholder="title"
             id="title" name="title"
            type="text" />
           </label>
           Price
            <label htmlFor="price">
             <input  placeholder="price"
              id="price" name="price"
             type="number" />
            </label>
            Description
             <label htmlFor="price">
              <textarea  placeholder="description"
             
              id="description" name="description"
              />
             </label>
             <button type="onSubmit">Submit</button>
          </fieldset>
            </div>
       </div>
    </StyledModal>
       
   
}


export default Modal;