import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () =>{
  return (

  <div className="uk-container"> 
 <nav className="uk-navbar">
<div className="uk-navbar-left">
<Link href="#" className="uk-navbar-item uklogo">My Todo</Link>
</div>
<div className="uk-navbar-right">
<ul className="uk-navbar-nav">
<li>
<a href="#">
<span uk-icon="icon: plus;ration:1.2"></span>

</a>
</li>

</ul>
</div>
 </nav>
  </div>

  );
}
export default NavBar;