import React, { Component } from 'react'


import logo from '../Shared/Images/Logo.png'

import NavComp from './NavComp'
import SaleComp from './SaleComp'
import FooterComp from './FooterComp'

export class UserComp extends Component {
    render() {
        return (
            <div>
                {/* <NavComp></NavComp> */}
                <div className='container-fluid' style={{}}>
                    <div class='row'>
                        <div className='col-xs-4' id="sticky-side">
                            {/* ======== */}
                            <div class='row'>
                                <div className='col-xs-12'>
                                <a class="navbar-brand " href="#">
      
                                        <img src={logo} alt="Notebook" style={{width:"260px",height:"110px",borderRadius:'20px'}}/>
                                    </a>
                                </div>
                            </div>
                            {/* ============= */}

                            {/* ======== */}
                            <div class='row'>
                                <div className='col-xs-12'>

  <div class="navbar navbar-inverse navbar-fixed-left ">
  <ul class="nav navbar-nav">
   <li><a href="#" className='fontl' style={{textDecoration:'none',margin:'50%',padding:'20px'}}>Link2</a></li>
   <li><a href="#" className='fontl' style={{textDecoration:'none',margin:'50%',padding:'20px'}}>Link3</a></li>
   <li><a href="#" className='fontl' style={{textDecoration:'none',margin:'50%',padding:'20px'}}>Link4</a></li>
   <li><a href="#" className='fontl' style={{textDecoration:'none',margin:'50%',padding:'20px'}}>Link5</a></li>
  </ul>
</div>




                                </div>
                            </div>
                            {/* ============= */}




                        </div>
                        <div className='col-xs-8' id="main">
                            <SaleComp></SaleComp>
                        </div>
                    </div>
                </div>

                
            </div>
        )
    }
}


export default UserComp
