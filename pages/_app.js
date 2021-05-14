/*import App,{Container} from 'next/app';
import Page from '../components/Page';

class MyApp extends App{
  render(){
    const {Component} = this.props;
    const data = [{
      titles:['Get it krunk','Tick for Tat','Queen'],
      names:['Hip-Hop','Pop','R&B'],
      price:['$9.99','$24.99','$54.00']
    }];
    const track = data.map((element,index,array)=>{
      return(
        <Component
         key={index}
         title={element.titles[0]}
         style={element.names[0]}
         price={element.price[0]}
        >
        </Component>
      )
    })
    return(
      <Container>
       <Page>
       {track}
       </Page>
      </Container>
    )
  }
}

export default MyApp;*/
import App, { Container } from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';
import { StateProvider } from '../components/LocalState';

class MyApp extends App {
  //This is a Next.js lifecycle method that will run first
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    //this exposes query to user
    pageProps.query = ctx.query;
    return { pageProps };//Have to return single object
  }
  render() {
    const { Component, apollo, pageProps } = this.props;
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>


        </ApolloProvider >
      </Container>


    )
  }
}
export default withData(MyApp);
//This is a custom App from Next.js that holds my state for my page components
