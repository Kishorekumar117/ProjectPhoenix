import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import silvera from '../Shared/Images/silver.jpg';

export class HomeLandComp extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid mt-5" style={{ height: '20px' }}></div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Carousel className="carousel" style={{ width: '100%' }}>
                <Carousel.Item interval={3000}>
                  <img
                    src={silvera}
                    alt="First slide"
                    style={{
                      width: '100%',
                      height: '300px',
                      borderRadius: '20px 0px 0px 20px',
                    }}
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    src={silvera}
                    alt="Second slide"
                    style={{
                      width: '100%',
                      height: '300px',
                      borderRadius: '20px 0px 0px 20px',
                    }}
                  />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={silvera}
                    alt="Third slide"
                    style={{
                      width: '100%',
                      height: '300px',
                      borderRadius: '20px 0px 0px 20px',
                    }}
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeLandComp;