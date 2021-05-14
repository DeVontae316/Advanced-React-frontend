import React from 'react';
import Props from 'prop-types';
import styled from 'styled-components';

const MyStyle = styled.ul`
 list-style-type:none;
`

const Render = ({person})=>{
    return(
        <div>
            <MyStyle>
                <li>{person.name}</li>
            </MyStyle>
           
        </div>
    )
}



export default Render;