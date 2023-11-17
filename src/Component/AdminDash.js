import React, { Component } from 'react';
import { FaBars, FaUser,FaMoneyBill } from 'react-icons/fa';
import logo from '../Shared/Images/Logo.png';
import NeedContTbl from './NeedContTbl';
import UserPurchaseTbl from './UserPurchaseTbl';


class AdminDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      activeMenuItem: null,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
      activeMenuItem: null,
    }));
  };

  handleMenuItemClick = (index) => (event) => {
    event.preventDefault();
    this.setState({
      activeMenuItem: index,
    });
  };

  menuItem = [
    {
      name: 'Admin Name',
      icon: <FaUser />,
    },
    {
      name: 'Contact',
      icon: <FaUser />,
      component: <NeedContTbl />,
    },
    {
      name: 'Purchases',
      icon: <FaMoneyBill />,
      component: <UserPurchaseTbl />,
    },
  ];

  render() {
    const { isOpen, activeMenuItem } = this.state;

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
                    href="/"
                    className="link"
                    onClick={this.handleMenuItemClick(index)}
                  >
                    <div className="icon">{item.icon}</div>
                    {isOpen && <div className="link_text">{item.name}</div>}
                  </a>
                </div>
              ))}
            </div></div></div>
            <div className='col-sm-8'>
            <main>
              {activeMenuItem !== null && (
                <div className="content">{this.menuItem[activeMenuItem].component}</div>
              )}
            </main>
            </div>
        
        
        </div>
    );
  }
}

export default AdminDash;