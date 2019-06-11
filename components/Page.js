import React,{Component} from 'react';
import Header from './Header';
import Meta from './Meta';
import styled,{ThemeProvider,injectGlobal} from 'styled-components';

//A theme is just an object with css properties and values that must be stringed
// ThemeProvider uses context api to avoid pop drilling
const themmy = {
  red:"#AA0000"
}

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey:'#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  softPurple:'#9068be'
}
const StyledPage = styled.div`
  background:white;
  color:${props => props.theme.black};
`
const InnerComponent = styled.div`
 max-width:${props => props.theme.maxWidth};
 margin: 0 auto;
 padding: 2rem;
 background:${props => props.theme.white};
`
injectGlobal`
 @font-face{
   font-family:'radnika_next';
   src:url('/static1/radnikanext-medium-webfont.woff2');
   format('woff2');
   font-weight:normal;
   font-style:normal;
 }
 html{
   background-color:white;
   box-sizing:border-box;
   font-size:10px;
   *,*:before,*:after{
     inherit:box-sizing;
   }
   body{
     font-size:1.5 rem;
     margin:0;
     padding:0;
     font-family:'radnika_next';
     line-height:2;


   }
   a{
     text-decoration:none;
     color:${theme.black};
   }
 }


`


const myTheme = {
  red:'#FF0000'

}
const TestPage = styled.div`
 background:${props => props.theme.red};
 max-width:1000px;
 margin: 0 auto;
 padding : 0;
`
const StyledPage2 = styled.div`
 backgorund:${props => props.theme.offWhite};
 color:${props => props.theme.black}
`
class Page extends Component{
  render(){

    return(
     <ThemeProvider theme={theme}>
       <StyledPage>
        <Meta />
        <Header />
        <InnerComponent>{this.props.children}</InnerComponent>
      </StyledPage>
    </ThemeProvider>


    )
  }
}
export default Page;



/*import Nav from './Nav';
import Header from './Header';
import Meta from './Meta';
import React,{Component} from 'react';
import styled  ,{ThemeProvider,injectGlobal}from 'styled-components';
const StyledPage = styled.div`
  background:white;
  color:${props => props.theme.black};`

class Page extends Component{
  render(){
    return(
      <div>
       <Meta />
       <Header />

       {this.props.children}
      </div>
    )
  }
}
export default Page;*/
/*What is a styled component?*/
/* Can we pass props to styled components? Yes, just  add a string interpolation
to the attribute with a function argument 'prop' that returns a value using a ternary
operator*/
//A component that has its css style attached to it via a tagged template literal
//Can we nest elements such as an span?
//Can we give a className to styled components? Yes
/*Why do we use nested selectors with styled components? Keeps us from creating
 individual styled components. Individual styled components are great when you
 want to resuse them!
*/
