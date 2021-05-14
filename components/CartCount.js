import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import{TransitionGroup, CSSTransition} from 'react-transition-group';

const Dot = styled.div`
background:${props => props.theme.red};
border-radius:50%;
padding:0.5rem;
line-height:2rem;
min-width:3rem;
margin-left:1rem;
font-weight:100;
font-feature-setting:'tnum';
font-variant-numeric:tabular-numeric;
.count{
    color:white;
    text-align:center;
}
`
const AnimationStyles = styled.span`
 position:relative;
 .count{
     display:block;
     position:relative;
     transition:all 0.2s;
     backface-visibility:hidden;

 }
 .count-enter{
     transform: scale(1) rotateX(0.4turn);
 }
 .count-enter-active{
    transform: rotateX(0);
}
.count-exit{
 top:10;
 positon:relative;
 transform:rotateX(0);
}
.count-exit-active{
    transform: scale(1) rotateX(0.4turn);
}
`
const CartCount = ({count})=>{
    return(
    <AnimationStyles>
        <TransitionGroup>
            <CSSTransition 
            unmountOnExit
            className="count" 
            classNames="count" 
            key={count}
            timeout={{enter:200,exit:200}}
            >
            <Dot>
                <div className="count">
                    {count}
                </div>
            </Dot>
            </CSSTransition>
        </TransitionGroup>
    </AnimationStyles>

    
    )
}



export default CartCount;