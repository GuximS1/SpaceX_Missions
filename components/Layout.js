/* eslint-disable */
import Menu from "./Menu"
import Copyright from "./Copyright"
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