import {Link, useNavigate} from 'react-router-dom'
import {useState, forwardRef, useImperativeHandle} from 'react'
import axios from 'axios';
import "./navbar.css"
const Navbar = forwardRef((props, ref) => {

  const navigate = useNavigate();

  useImperativeHandle(ref, () => ({
    refresh() {
      console.log("refresh Navbar");
    }
  }));

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div class="container">
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <span class='nav-link active'>Sales Management</span>
            </li>
        </ul>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/">Home</Link>
        </li>
      </ul>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/products">Products</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/orders">Orders</Link>
            </li>
        </ul>
      </div>
  </div>
</nav>
  )
});

export default Navbar
