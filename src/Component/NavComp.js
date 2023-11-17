import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import logo from '../Shared/Images/Logo.png'
import HomeLandComp from './HomeLandComp';
import OurCollectionComp from './OurCollectionComp';
import FooterComp from './FooterComp'
import { Link } from 'react-router-dom';



import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

// =========================sale page needed imports====================================


// import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import wall_c from '../Shared/Images/wallpaperflare.com_wallpaper.jpg';
import wall_d from '../Shared/Images/wallpaperflare.com_wallpaper (2).jpg';
import wall_e from '../Shared/Images/wallpaperflare.com_wallpaper (1).jpg';
import axios from 'axios';




//======================<<<sales   =======================


export class NavComp extends Component {

  constructor(props) {
    super(props);
    this.state = {
        students: [
            { name: 'gold', price: '$100', gender: wall_c, result: 'pass' },
            { name: 'silver', price: '$150', gender: wall_d, result: 'fail' },
            { name: 'platinum', price: '$120', gender: wall_e, result: 'pass' },
            { name: 'gold', price: '$130', gender: wall_c, result: 'pass' }
            // sales
        ],

      activeTab: 'home', // contact
      contact: {
        name: '',
        contact: '',
        email: '',
        message: '',
      },//contact
      

    };
}

gold = () => {//sales
  const goldStudents = [
      { name: 'gold', price: '$100', gender: wall_c, result: 'pass' },
      { name: 'gold', price: '$150', gender: wall_d, result: 'fail' },
      { name: 'gold', price: '$120', gender: wall_c, result: 'pass' },
      { name: 'gold', price: '$180', gender: wall_d, result: 'fail' },
      // ... other gold sales
  ];

 // this.setState({ students: [] });
  this.setState({ students: goldStudents });
};

silver = () => {//sales
  const silvers = [
      { name: 'silver', price: '$100', gender: wall_c, result: 'pass' },
      { name: 'silver', price: '$150', gender: wall_d, result: 'fail' },
      { name: 'silver', price: '$120', gender: wall_c, result: 'pass' },
      { name: 'silver', price: '$180', gender: wall_d, result: 'fail' },
      // ... other gold sales
  ];

 // this.setState({ students: [] });
  this.setState({ students: silvers });
};

platinum = () => {//sales
  const platinums = [
      { name: 'platinum', price: '$100', gender: wall_c, result: 'pass' },
      { name: 'platinum', price: '$150', gender: wall_d, result: 'fail' },
      { name: 'platinum', price: '$120', gender: wall_c, result: 'pass' },
      { name: 'platinum', price: '$180', gender: wall_d, result: 'fail' },
      // ... other gold sales
  ];

 // this.setState({ students: [] });
  this.setState({ students: platinums });
};

getLabel = (index) => {
  switch (index) {
    case 0:
        return 'name';
    case 1:
        return 'age';
    case 2:
        return 'gender';
    case 3:
        return 'result';
    default:
        return '';
}// ... existing getLabel code
};

fun = (name,price) => {
  let lastId = localStorage.getItem('lastId') || 0;
  lastId = parseInt(lastId) + 1;
  localStorage.setItem('lastId', lastId);
  const newPurchase = {
      id: lastId.toString(),
      productname: name,
      productprice: price,
     useremail: 'user@example.com', // Replace with actual email
      username: 'New User' // Replace with actual username
    };

    // Axios POST request to insert data
    axios.post('http://localhost:8888/purchase', newPurchase)
      .then(response => {
          window.alert("Produt Ordered Successfully!, Product Name: "+name+"Price: "+price)
        console.log('Data inserted:', response.data);
        // Handle the response or update state if needed
      })
      .catch(error => {
        console.error('Error inserting data:', error);
        // Handle errors if necessary
      });
};
//======================       sales  >>>> =======================



//======================<<<about us   =======================

handleTabChange = (tabKey) => {
  this.setState({
    activeTab: tabKey,
  });
};

addContactData = (event) => {
  event.preventDefault();
  const { contact } = this.state;
  axios
    .post('http://localhost:8888/contactus', contact)
    .then(() => {
      console.log(contact);
      window.alert('Your Response added Successfully');
    })
    .catch((err) => {
      window.alert("Can't Reach at that Moment");
      console.error(err);
    });
};

inputHandler = (event) => {
  const { contact } = this.state;
  this.setState({
    contact: {
      ...contact,
      [event.target.name]: event.target.value,
    },
  });
};

renderAboutContent = () => {
  return (
    <div>
<div style={{ display: 'flex', alignItems: 'center' }}>
  <h3>Discover the Elegance of Phoenix Jewelry</h3>
  <img
      src={logo}
      alt="Phoenix Jewelry Image"
      style={{ maxWidth: '250px', marginLeft: 'auto', marginRight: '10px' }}
  />
</div>
<br/>


      <p>
      Embrace the timeless allure of our Phoenix jewelry collection, where every piece tells a story of rebirth and grace. Inspired by the mythical phoenix, our designs capture the essence of transformation and resilience, creating a symphony of beauty that transcends time.
      </p>
      <p>
      Each handcrafted piece in our collection is a testament to the skilled artisans who meticulously bring the phoenix to life, infusing passion and precision into every detail. Our jewelry is more than an accessory; it's a statement of individuality, a symbol of strength, and a celebration of the extraordinary.
      </p>

      <p>
      Immerse yourself in the radiance of our Phoenix collection, where brilliant gemstones and exquisite metals converge to create a harmonious blend of sophistication and style. Whether you're seeking a dazzling centerpiece for a special occasion or an everyday piece that speaks to your unique spirit, our Phoenix jewelry is designed to accompany you on every journey.
      </p>

      <p>
      ndulge in the allure of our carefully curated selection, where each piece is a testament to the enduring spirit of the phoenix. Elevate your style, honor your journey, and embrace the transformative power of Phoenix jewelry.
      </p>

      <p>
      Welcome to a world where elegance meets resilience, and every piece is a testament to the eternal beauty within you. Explore the Phoenix collection and let your style soar to new heights.
      </p>
<br/> <br/>
      <p><strong>Introducing the Phoenix Collection</strong></p>

<p>Embark on a journey of self-expression and elegance with our exclusive Phoenix Collection. Each piece in this exquisite ensemble is a testament to the mythical creature's symbolism of renewal and strength. Our jewelry is not merely an accessory; it's a narrative woven with precious metals and gemstones, reflecting the resilience and grace inherent in the phoenix legend.</p>
<br/>
<p><strong>Exceptional Craftsmanship</strong></p>

<p>At the heart of our Phoenix Collection lies unparalleled craftsmanship. Our skilled artisans invest their passion and expertise into every creation, ensuring that each piece is not only a work of art but also a testament to the dedication and precision that goes into crafting timeless jewelry. The result is a stunning array of pieces that seamlessly blend traditional techniques with contemporary design.</p>
<br/>
<p><strong>Symbolism in Design</strong></p>

<p>Our Phoenix jewelry transcends mere adornment, embodying a deeper significance. The carefully chosen gemstones symbolize various facets of life - from the fiery reds representing passion to the cool blues embodying tranquility. Each design element, from the intricate feathers to the graceful curves, tells a story of transformation and rebirth. Wear a piece from our collection and carry with you the symbolism of the phoenix wherever you go.</p>
<br/>
<p><strong>Versatility for Every Occasion</strong></p>

<p>Whether you're attending a special event or looking to elevate your everyday style, the Phoenix Collection offers versatility without compromise. From striking statement pieces that demand attention to subtle, everyday elegance, our range caters to diverse tastes and occasions. Explore our selection to find the perfect complement to your unique personality and lifestyle.</p>
<br/>
<p><strong>A Personalized Experience</strong></p>

<p>We understand that jewelry is a deeply personal choice. That's why we offer a personalized experience, allowing you to choose the metals, gemstones, and designs that resonate most with you. Our commitment to individuality ensures that each piece becomes a reflection of your unique story and style.</p>
<br/>
<p><strong>Embrace Your Inner Phoenix</strong></p>

<p>Indulge in the radiance of the Phoenix Collection and embrace the transformative power of jewelry that not only adorns but empowers. Discover the magic of our designs, where each piece is a celebration of your journey, strength, and enduring beauty. Phoenix jewelry — because your style deserves to soar.</p>

    </div>
  );
};

renderContactForm = () => {
  const { contact } = this.state;
  return (
      <section className="mb-4" style={{ padding: '50px', height: '50%', margin:'20px',
      backgroundColor:'#800000',
      borderRadius: '20px 20px 20px 20px',
      boxShadow: '0px 0px 8px 3px rgb(0, 0, 0,0.2)',
     
      }}>
 
<h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
<p className="text-center w-responsive mx-auto mb-5">
  Do you have any questions? Please do not hesitate to contact us directly.
 <p>Our team will come back to you within a matter of hours to help you.</p>
</p>

<div className="row">
  <div className="col-md-9 mb-md-0 mb-5">
    <form id="contact-form" name="contact-form" action="/your-form-handler-endpoint" method="POST">
      <div className="row mb-3">
        <div className="col-md-6">
          <div className="form-floating">
            <input type="text" id="name" name="name"  onChange={this.inputHandler}
            value={contact.name} className="form-control" style={{ fontSize: '14px' }} />
            <label htmlFor="name">Your name</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating">
            <input type="text" id="contact" name="contact"  onChange={this.inputHandler}
            value={contact.contact} className="form-control" style={{ fontSize: '14px' }} />
            <label htmlFor="contact">Contact</label>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-12">
          <div className="form-floating">
            <input type="text" id="email" name="email"  onChange={this.inputHandler}
            value={contact.email} className="form-control" style={{ fontSize: '14px' }} />
            <label htmlFor="email">Your email</label>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-12">
          <div className="form-floating">
            <textarea
              type="text"
              id="message"
              name="message"
              rows="2"
              className="form-control md-textarea"
              style={{ fontSize: '14px' }}
              onChange={this.inputHandler}
              value={contact.message}
            ></textarea>
            <label htmlFor="message">Your message</label>
          </div>
        </div>
      </div>
    </form>
    <div className="text-center text-md-left">
<button
className="btn"
style={{
backgroundColor: 'gold',
color: 'maroon',
transition: 'background-color 0.3s, color 0.3s',
width:'50%'
}}
onClick={this.handleClick}
onMouseOver={(e) => {
e.target.style.backgroundColor = 'maroon';
e.target.style.color = 'gold';
}}
onMouseOut={(e) => {
e.target.style.backgroundColor = 'gold';
e.target.style.color = 'maroon';
}}
>
Send Us
</button>
</div>
    <div className="status"></div>
  </div>

  <div className="col-md-3 text-center">
<img src={logo} alt="Phoenix Logo" className="image-icon" width="300px" height="150px"/ >
<ul className="list-unstyled mb-0">
<li>
<i className="fas fa-map-marker-alt fa-2x"></i>
<p>SIPCOT IT Park, Seruseri TN 94126, India</p>
</li>
<li>
<i className="fas fa-phone mt-4 fa-2x"></i>
<p>+ 01 234 567 89</p>
</li>
<li>
<i className="fas fa-envelope mt-4 fa-2x"></i>
<p>contact@Phoenixjewellery.com</p>
</li>
</ul>
</div>

</div>

{/* Google Maps Section */}
<div className="mb-4" style={{ width: '100%', height: '400px', marginTop:'50px' }}>
<iframe
title="Google Map"
width="100%"
height="100%"
frameBorder="0"
style={{ border: '0' }}
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386142.2314065124!2d-74.25819367572475!3d40.70582403852697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20USA!5e0!3m2!1sen!2suk!4v1637604867794!5m2!1sen!2suk"
allowFullScreen=""
></iframe>
</div>
</section>
  );
};

handleClick = (event) => {
if (event) {
  event.preventDefault(); // Check if event is defined before calling preventDefault()
  this.addContactData(event);
}
};


//======================about us ......=======================



// ======================================









render() {
      const { activeTab } = this.state;
        return (
            <div>
                     <div>
             
             {[ 'sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 p-0 fixed-top">
          <Container fluid style={{backgroundColor:'rgba(17, 17, 16, 1.0)'}}>
            <Navbar.Brand href="#">
            <img src={logo} alt="Notebook" style={{width:"160px",height:"50px",borderRadius:'20px'}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton style={{backgroundColor:'rgba(17, 17, 16, 1.0)',color:'white'}}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
                    <img src={logo} alt="Notebook" style={{width:"160px",height:"50px",borderRadius:'20px'}}/>
                </Offcanvas.Title>
              </Offcanvas.Header >
              <Offcanvas.Body style={{backgroundColor:'rgba(17, 17, 16, 1.0)'}}>
                <Nav className="justify-content-end flex-grow-1 gap-3 pe-3">
                  <Nav.Link href="#action1"><font className="fontl">Home</font></Nav.Link>

                  <NavDropdown 
                    title=<font className="fontl">Collections</font>
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#go" onClick={this.gold}>
                        <a class="fontl" style={{textDecoration:'none'}}  href="#saleb">Gold</a>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#go" onClick={this.gold}>
                    <a class="fontl" style={{textDecoration:'none'}}  href="#saleb">Silver</a>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#go" onClick={this.gold}>
                    <a class="fontl" style={{textDecoration:'none'}}  href="#saleb">Platinum</a>
                    </NavDropdown.Item>
                    
                  </NavDropdown>

                  <NavDropdown
                    title=<font className="fontl">Rate</font>
                    id={`offcanvasNavbarDropdown-expand-${expand}`}>
    
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>


                  <Nav.Link href="#action2">
                  <a className="nav-link" href="#abt" onClick={() => this.handleTabChange('home')}><font className="fontl" >About</font></a>
                  </Nav.Link>

                  <Nav.Link href="#action2">
                  <a class="nav-link" href="#abt" onClick={() => this.handleTabChange('contact')}><font className="fontl" >Contact Us</font></a>
                  </Nav.Link>
                  
                <Nav.Link href="#action2">
                <Link to='register' className='nav-link'><font className="fontl" >SignUp</font></Link>
                </Nav.Link>
                <Nav.Link href="#action2">
                  <Link to='login' className='nav-link'><font className="fontl" >Login</font></Link>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))} 
            </div>


<nav class="navbar navbar-dark fixed-bottom "style={{display:'inline'}}>
  <div class="container-fluid " style={{align:'center'}}>

    <div className='d-flex'style={{align:'center'}}><a class="navbar-brand"  href="#">Go TOP</a></div>
  </div>
</nav>


{/**====================Home===================== */}

<HomeLandComp></HomeLandComp>

{/**==============our collection=========================== */}

<OurCollectionComp></OurCollectionComp>

{/**==================sale page======================= */}
<h1 id='saleb'> </h1>

<div>
                <br/>
                <div className='container mt-3 saleB'  style={{ width: 'auto' }}>
                    <div  className='container mt-2 pb-4' style={{ width: '700px' }}>
                        <Row xs={1} md={2} className='g-4'>
                            {this.state.students.map((student, idx) => (
                                <Col style={{ align: 'center' }} key={idx}>
                                    <Card
                                        style={{
                                            width: '300px',
                                            height: '400px',
                                            backgroundColor: 'black',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Card.Img
                                            variant='top'
                                            src={student.gender}
                                            style={{ width: '300px', height: '200px' }}
                                        />
                                        <Card.Body>
                                            <Card.Title>{student.name}</Card.Title>
                                            <Card.Text>
                                                This is a longer card with supporting text
                                                <Button
                                                    variant='secondary'
                                                    size='sm'
                                                    onClick={()=>this.fun(student.name,student.price)}
                                                    active
                                                    style={{
                                                        borderRadius: '0px',
                                                        width: '220px',
                                                    }}
                                                >
                                                    BUY
                                                </Button>
                                                {/* Rest of your code */}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
                
            </div>



{/**===================About us====================== */}

<h1 id='abt'></h1>
<div  style={{width:'85%',align:'center'}}>
<Tabs
  defaultActiveKey="home"
  activeKey={activeTab}
  transition={false}
  id="noanim-tab-example"
  className="mb-3"
  onSelect={this.handleTabChange}
>
  <Tab eventKey="home"  title={<strong>About</strong>}>
    {this.renderAboutContent()}
  </Tab>
  <Tab eventKey="contact"  title={<strong>Contact Us</strong>}>
    {this.renderContactForm()}
  </Tab>
</Tabs>
</div>


{/**================footer========================= */}

<FooterComp></FooterComp>


{/**================Links========================= */}




            </div>
        )
    }
}

export default NavComp
