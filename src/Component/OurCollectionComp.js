import React, { Component } from 'react'
import { Button, ThemeProvider } from 'react-bootstrap';


import wall_a from '../Shared/Images/wallpaperflare-cropped.jpg';
import wall_b from '../Shared/Images/wallpaperflare-cropped (1).jpg';
import theam from '../Shared/Images/theams.jpg'
import line from '../Shared/Images/line.png';
import Modal from 'react-modal'
import logo from '../Shared/Images/Logo.png'

import { Link } from 'react-router-dom';

export class OurCollectionComp extends Component {


  constructor(props) {
    super(props);
  
    this.state = {
      showModal: false
    };
  }


  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
   
  handleOkayButton = () => {
    
    // // Add custom logic for the "Okay" button
    console.log('Okay button clicked!');
     window.alert("ok")
    

     

  };
    render() {
        return (
            <div>
                <h3 class="stip">{" "}OUR COLLECTIONS{" "}</h3>
  
<div class="container mt-2 ">
 
  
  <div class="row">
    <div class="col-md-4 ">
    
  <div class="shows">
  <img src={wall_a} alt="Notebook"/>
  <div class="content">
    <h1 style={{textAlign:'left'}}>Heading</h1>
    <p style={{textAlign:'left'}}>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
  </div>
</div>





      
      </div>
    <div class="col-md-4"> 

  <div class="shows">
  <img src={wall_b} alt="Notebook"/>
  <div class="content">
    <h1 style={{textAlign:'left'}}>Heading</h1>
    <p style={{textAlign:'left'}}>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
  </div>
</div>
  
    
    </div>
    <div class="col-md-4"> 

    <div class="shows">
    <img src={theam} alt="Notebook"/>
    <div class="content">
      <h1 style={{textAlign:'left'}}>Heading</h1>
      <p style={{textAlign:'left'}}>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
    </div>
    </div>

    </div>

 </div>
 </div>

<div class="container mt-3">
 <Button variant="secondary" size="lg" onClick={this.handleShowModal} active style={{borderRadius:'0px',width:'420px'}}>
        MORE COLLECTIONS
      </Button>
      </div>

   
      <h3 class="stip">  {" "}MORE PRODUCT{" "}  </h3>

  <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          className="custom-modal"
          overlayClassName="custom-modal-overlay"
        >
          <div className="modal-content">
            <button className="close-modal-button btn btn-danger" onClick={this.handleCloseModal}>
              X
            </button>
            <h2 className="modal-title"><img src={logo} alt='image'style={{width:"160px",height:"200px",borderRadius:'20px'}}/></h2>
            <p>
            Thank you for expressing interest in our product Please log in to make purchases
            </p>
            <Link to='login' className='okay-button btn btn-primary'><font className="fontl" >Login</font></Link>

            <button className="close-button btn btn-danger" onClick={this.handleCloseModal}>
              Close
            </button>
          </div>
        </Modal>

            </div>
        )
    }
}

export default OurCollectionComp
