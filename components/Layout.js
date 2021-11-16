/* eslint-disable */
import Menu from "./Menu"
import Copyright from "./Copyright"
import Particles from "react-tsparticles";
import particleBackground from "../components/particles/particleBackground"
import styles from '../styles/Home.module.css'
const Layout = ({ children }) => {
  return (
    <div className="content">
      <Menu/>
      { children }
      <Copyright/>
    </div>
  );
}
 
export default Layout;