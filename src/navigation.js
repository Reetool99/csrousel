import React from 'react'
import { FaBars } from 'react-icons/fa'
function Navigation() {
     function myFunction() {
          var x = document.getElementById("myTopnav");
          if (x.className === "topnav") {
               x.className += " responsive";
          } else {
               x.className = "topnav";
          }
     }
     return (
          <div>


               {/* <div className="navbar_shadow">
                    <div className='big_container '>
                         <div className='navbar_ '>
                              <div className='d-flex justify_spc_btwn'>
                                   <div className='navbar_logo'>
                                        <img src="./img/VCC-logo.svg" alt="" />
                                   </div>
                                   <ul className='d-flex justify_spc_btwn nav_list'>
                                        <li ><a href="#" className='nav_link_list'><img src="./img/magnifying-glass.png" alt="" /> Search</a></li>

                                        <li ><a href="#" className='nav_link_list'><img src="./img/crown.png" alt="" /> Subscribe</a> </li>

                                        <li><a href="#" className='nav_link_list' style={{ paddingRight: "0px" }}><img src="./img/admin.svg" alt="" /> Sign in</a></li>
                                   </ul>
                              </div>
                              <div className='d-flex justify_spc_btwn'>
                                   <ul className='d-flex justify_spc_btwn nav_list'>
                                        <li className='down_nav_list' style={{ paddingLeft: "0px" }}> <a href="" className='down_nav_list' style={{ paddingLeft: "0px" }} >Private Equity</a> </li>

                                        <li className='down_nav_' ><a href="" className='down_nav_list'>Venture Capital</a></li>

                                        <li className='down_nav_' ><a href="" className='down_nav_list'>M&A</a></li>

                                        <li className='down_nav_'><a href="" className='down_nav_list'>Industry <img src="./img/arrow_dropdown.svg" alt="" /></a> </li>

                                        <li className='down_nav_'><a href="" className='down_nav_list'>Private Equity</a> </li>

                                        <li className='down_nav_'><a href="" className='down_nav_list'>Limited Partner</a></li>

                                        <li className='down_nav_'><a href="" className='down_nav_list'> Founder</a></li>
                                   </ul>
                                   <div>
                                        <h4>
                                             <a href="" className='down_nav_list' style={{ paddingRight: "0px" }} >Customize <img src="./img/arrow_dropdown.svg" alt="" /></a>

                                        </h4>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div> */}






               <div className="topnav" id="myTopnav">
                    <div className="navbar_shadow">
                         <div className='navbar_  topnav' id='myTopnav'>
                              <div className='d-flex justify_spc_btwn'>
                                   <div className='navbar_logo'>
                                        {/* <img src="./img/VCC-logo.svg" alt="" /> */}
                                        <h1>hello</h1>
                                   </div>
                                   <ul className='d-flex justify_spc_btwn nav_list topnav' id='myTopnav'>
                                        <li ><a href="#" className='nav_link_list'><img src="./img/magnifying-glass.png" alt="" /> Search</a></li>

                                        <li ><a href="#" className='nav_link_list'><img src="./img/crown.png" alt="" /> Subscribe</a> </li>

                                        <li><a href="#" className='nav_link_list' style={{ paddingRight: "0px" }}><img src="./img/admin.svg" alt="" /> Sign in</a></li>
                                   </ul>
                                   <a href="javascript:void(0);" className="icon" onClick={myFunction}>
                                        <FaBars />
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>

               <div style={{ paddingLeft: "16px" }}>
                    <h2>Responsive Topnav Example</h2>
                    <p>Resize the browser window to see how it works.</p>
               </div>

          </div>
     )
}

export default Navigation

{/* <a href="#home" class="active">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                    <a href="javascript:void(0);" className="icon" onClick={myFunction}>
                         <FaBars />
                    </a> */}