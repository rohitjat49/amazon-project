
import React ,{useState} from 'react'
import {  useNavigate } from 'react-router-dom';

const Navbarcomponent = () => {
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(true);
  return (
   <>
   <div className="navBar bg-dark navBarInput py-2 px-2 d-flex justify-content-between align-items-center">
  <div class="p-2 bd-highlight">
    <a className="" style={{ width: "85px" }}>
      <img
        src="img/logo main.png"
        className=""
        style={{ width: "85px" }}
      />
    </a>
  </div>

  <div class="input-group searchBox">
    <input
      className="form-control searchText border-0 mt-1"
      type="text"
      placeholder="Search"
    ></input>
    <a href='' className='searchBtn search-icon text-center input-group-text'>
      <i class="fa-solid fa-magnifying-glass fa-2x "></i>
    </a>
  </div>

  <div class="ms-auto  bd-highlight">
    <a href="/" class="ps-3">
   
    <i class="fa-solid fa-cart-shopping fa-2x"></i>
     
    </a>
  </div>
</div>



<div className='hearder  navBarInput py-2 px-3 d-flex justify-content-between align-items-center text-white'>
    <p>Top Deals</p>
    <p>Electronics</p>
    <p>Mobile</p>
    <p>Sell</p>
    <p>Best sell</p>
</div>



   </>
  )
}

export default Navbarcomponent