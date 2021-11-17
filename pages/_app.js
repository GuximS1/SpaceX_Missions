/* eslint-disable */
import '../styles/globals.css'
import Layout from '../components/Layout'
import Particles from "react-tsparticles";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
    uri:"https://api.spacex.land/graphql/"
})

function MyApp({ Component, pageProps }) {
  return( 
    <ApolloProvider client={client}>
      <Layout>
       <Particles
         params={{
          fpsLimit: 60,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#FFFFFF",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            }
          }
        }}
      />
        <Component {...pageProps} />
    </Layout>
  </ApolloProvider>
  )
}

export default MyApp
