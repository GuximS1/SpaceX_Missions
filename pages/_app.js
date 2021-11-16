/* eslint-disable */
import '../styles/globals.css'
import Layout from '../components/Layout'
import Particles from "react-tsparticles";
import { tsParticles } from "tsparticles";
function MyApp({ Component, pageProps }) {
  return( <Layout>
    <Particles
        params={{
          fpsLimit: 60,
          particles: {
            color: {
              value: "black"
            },
            links: {
              enable: true,
              color: "#000",
              distance: 150
            },
            move: {
              enable: true
            }
          }
        }}
      />
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
