import React, { Component } from 'react'


import { Button } from 'react-bootstrap';

import wall_c from '../Shared/Images/wallpaperflare.com_wallpaper.jpg'
import wall_d from '../Shared/Images/wallpaperflare.com_wallpaper (2).jpg'
import wall_e from '../Shared/Images/wallpaperflare.com_wallpaper (1).jpg'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export class SaleComp extends Component {

    students = [
        { name: 'son', age: '23', gender: wall_c, result: 'pass' },
        { name: 'ragu', age: '21', gender: wall_d, result: 'fail' },
        { name: 'kumar', age: '22', gender: wall_e, result: 'pass' },
        { name: 'son', age: '23', gender: wall_c, result: 'pass' },
        { name: 'ragu', age: '21', gender: wall_d, result: 'fail' },
        { name: 'pavi', age: '21', gender: wall_c, result: 'pass' }
    ];
    
    
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
        }
    };

    fun=()=>{
        alert("Thank you")
    }
    
    render() {
        return (
            <div>
                <br/>
                

                <div className='container mt-3 saleB'style={{width:'800px'}}>
                <div className='container mt-2 pb-4' style={{width:'700px'}}>
                <Row xs={1} md={2} className="g-4" >
                {this.students.map((student, idx) => (
                <Col style={{align:'center'}} key={idx}>
            <Card style={{width:'300px',height:'400px',backgroundColor:'black',textAlign:'center' }}>
                <Card.Img variant="top" src={student.gender} style={{width:'300px',height:'200px'}}/>
                <Card.Body>
                <Card.Title>{student.name}</Card.Title>
                <Card.Text>
                This is a longer card with supporting text
                    <Button variant="secondary" size="sm" onClick={this.fun} active style={{borderRadius:'0px',width:'220px'}}>
                        BUY
                    </Button>
                <button class="btn btn-" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                    MORE DETIAL
                 </button>

                    {/* ============================== */}

                    <div class="offcanvas offcanvas-end" id="demo">
  <div class="offcanvas-header">
    <h1 class="offcanvas-title">{student.name}</h1>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    <p>Some text lorem ipsum.</p>
    <p>Some text lorem ipsum.</p>
    <p>Some text lorem ipsum.</p>
    <button class="btn btn-secondary" type="button">A Button</button>
  </div>
</div>

                    {/* ================================== */}

                </Card.Text>
              
                </Card.Body>
            </Card>
        </Col>
      ))}
    </Row>
</div>
</div>

     
            </div>
        )
    }
}

export default SaleComp
