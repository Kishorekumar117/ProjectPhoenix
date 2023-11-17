import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import wall_c from '../Shared/Images/wallpaperflare.com_wallpaper.jpg';
import wall_d from '../Shared/Images/wallpaperflare.com_wallpaper (2).jpg';
import wall_e from '../Shared/Images/wallpaperflare.com_wallpaper (1).jpg';
import axios from 'axios';
import './Sb.css';
import {
  FaBars,
  FaUser,
  FaRing,
  FaGem,
  FaCubes,
  FaSignOutAlt,
} from 'react-icons/fa';

import logo from '../Shared/Images/Logo.png';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      activeSubMenu: null,
      students: [
        { name: 'gold', price: '$100', gender: wall_c, result: 'pass' },
        { name: 'silver', price: '$150', gender: wall_d, result: 'fail' },
        { name: 'platinum', price: '$120', gender: wall_e, result: 'pass' },
        { name: 'gold', price: '$130', gender: wall_c, result: 'pass' },
        { name: 'silver', price: '$100', gender: wall_d, result: 'fail' },
        { name: 'platinum', price: '$160', gender: wall_e, result: 'pass' },{ name: 'gold', age: '23', gender: wall_c, result: 'pass' },
        { name: 'silver', price: '$180', gender: wall_d, result: 'fail' },
        { name: 'platinum', price: '$190', gender: wall_e, result: 'pass' }
        // ... other student data
    ],

    };
  }

// ==================================

gold = () => {
  const goldStudents = [
      { name: 'gold', price: '$100', gender: wall_c, result: 'pass' },
      { name: 'gold', price: '$150', gender: wall_d, result: 'fail' },
      { name: 'gold', price: '$120', gender: wall_c, result: 'pass' },
      { name: 'gold', price: '$180', gender: wall_d, result: 'fail' },
      // ... other gold students
  ];

 // this.setState({ students: [] });
  this.setState({ students: goldStudents });
};

getLabel = (index) => {
  // ... existing getLabel code
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

  // =========================================
  toggle = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
      activeSubMenu: null,
    }));
  };

  handleItemClick = (index) => (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      activeSubMenu: prevState.activeSubMenu === index ? null : index,
    }));
  };

  handleSubItemClick = (event) => {
    event.preventDefault();
    window.alert("Hello");
  };

  menuItem = [
    {
      
      name: sessionStorage.getItem("username"),
      icon: <FaUser />,
    },
    {
      
      name: 'Gold',
      icon: <FaCubes />,
      submenu: [
        { name: 'Necklace', icon: <FaGem />, onClick: this.gold },
        { name: 'Bangles', icon: <FaGem />, onClick: this.gold  },
        { name: 'Rings', icon: <FaGem />, onClick: this.handleSubItemClick },
      ],
    },
    {
      href: '/SignIn3',
      name: 'Silver',
      icon: <FaRing />,
      submenu: [
        { name: 'Necklace', icon: <FaGem />, onClick: this.handleSubItemClick },
        {  name: 'Bangles', icon: <FaGem />, onClick: this.handleSubItemClick },
        { name: 'Rings', icon: <FaGem />, onClick: this.handleSubItemClick },
      ],
    },
    {
      href: '/SignIn4',
      name: 'Platinum',
      icon: <FaGem />,
      submenu: [
        {  name: 'Necklace', icon: <FaGem />, onClick: this.handleSubItemClick },
        { name: 'Bangles', icon: <FaGem />, onClick: this.handleSubItemClick },
        { name: 'Rings', icon: <FaGem />, onClick: this.handleSubItemClick },
      ],
    },
    {
      href: '/SignIn5',
      name: 'LogOut',
      icon: <FaSignOutAlt />,
    },
  ];

  render() {
    const { isOpen, activeSubMenu } = this.state;

    return (
      <div className='row'>
        <div className='col-sm-3'>
          <div className="container">
            <div style={{ width: isOpen ? '250px' : '50px' }} className="sidebar">
              <div className="top_section">
                <div style={{ display: isOpen ? 'block' : 'none' }} className="logo">
                  <img src={logo} alt="Your Logo" style={{ maxWidth: '100%' }} />
                </div>
                <div className="bars">
                  <FaBars onClick={this.toggle} />
                </div>
              </div>
              {this.menuItem.map((item, index) => (
                <div key={index}>
                  <a
                    href={item.href}
                    className="link"
                    onClick={this.handleItemClick(index)}
                  >
                    <div className="icon">{item.icon}</div>
                    {isOpen && <div className="link_text">{item.name}</div>}
                  </a>
                  {item.submenu && isOpen && activeSubMenu === index && (
                    <div className="submenu">
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          href={subItem.href}
                          key={subIndex}
                          className="sublink"
                          onClick={subItem.onClick}
                        >
                          <div className="subicon">{subItem.icon}</div>
                          <div className="sublink_text">{subItem.name}</div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <main>{this.props.children}</main>
          </div>
        </div>


  {/* ================================================== */}
        <div className='col-sm-6'>
        <div>
              
                <br />
               
                <div className='container mt-3 saleB' style={{ width: '800px' }}>
                    <div className='container mt-2 pb-4' style={{ width: '700px' }}>
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
        </div>
      </div>
    );
  }
}

export default Sidebar;