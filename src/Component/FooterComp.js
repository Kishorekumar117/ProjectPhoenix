import React, { Component } from 'react';
import { FaLocationArrow, FaPhone, FaUser, FaFacebook, FaTwitter, FaGoogle, FaInstagram } from 'react-icons/fa';
import AdVideo from '../Shared/Images/AdVideo.gif'
import logo from '../Shared/Images/Logo.png'

class Footer extends Component {
  render() {
    return (
    <>
      {/* GIF at the top */}
     
      {/* GIF at the top */}

      {/* Footer */}
      
      <footer className="text-center text-lg-start text-dark" style={{ backgroundColor: 'black', width: '100%' }}>

      <div align="center" class="ad">
            <a href="#"><img class='sho' src={AdVideo} width="100%" height="400px"/></a>
        </div>
        {/* Section: Social media */}
        <section className="d-flex justify-content-between p-4 text-white" style={{ backgroundColor: 'brown' }}>
          {/* Left */}
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}

          {/* Right */}
          <div>
            <a href="" className="text-white me-4">
              <FaFacebook />
            </a>
            <a href="" className="text-white me-4">
              <FaTwitter />
            </a>
            <a href="" className="text-white me-4">
              <FaGoogle />
            </a>
            <a href="" className="text-white me-4">
              <FaInstagram />
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}

        {/* Section: Links */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold">Company name</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>
                  MDBootstrap
                </p>
                <p>
                  MDWordPress
                </p>
                <p>
                  BrandFlow
                </p>
                <p>
                  Bootstrap Angular
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>
                  Your Account
                </p>
                <p>
                  Become an Affiliate
                </p>
                <p>
                  Shipping Rates
                </p>
                <p>
                  Help
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p><FaLocationArrow></FaLocationArrow> SIPCOT, TN 10012, TN</p>
                <p><FaUser></FaUser> PhoenixJewellery@gmail.com</p>
                <p><FaPhone></FaPhone> +91 6307859632 </p>
                <p><FaPhone></FaPhone> +91 7306305879</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links */}

        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © Designed and Developed by Phoenix Developers
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
    );
  }
}

export default Footer;