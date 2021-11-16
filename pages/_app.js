/* eslint-disable */
import '../styles/globals.css'
import Layout from '../components/Layout'
import Particles from "react-tsparticles";

function MyApp({ Component, pageProps }) {
  return( <Layout>
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
  )
}

export default MyApp
