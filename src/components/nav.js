import {
  BrowserRouter as Router,
  Link
  } from 'react-router-dom';

  
function Nav(){
    return(
    <nav>
      <ul class = "dash_menu">
        <li><Link to="/dashboard">Home</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/user">User</Link></li>
        <li>Logout</li>
      </ul>
    </nav>   
    )
}
export default Nav;