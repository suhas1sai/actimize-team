import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function Profile() {
  return (
  	<div className="Profile">
        <Container>
        <h1>Profile</h1>

            <Row>
            <Col lg={6} sm={8} className='mt-2 align-right' >
                    <label>First Name :</label>
                    <input type="text" placehollder="enter the First Name"/>
                </Col>
            <Col lg={6} sm={8} className='mt-2 align-right' >
                
                    <label>Last Name :</label>
                    <input type="text" placehollder="enter the Last Name"/>
                </Col>
            </Row>
            <Row>
                <Col lg={6} sm={8} className='mt-2' >
                    <label className=' align-right'>Date of Birth :</label>
                    <input  type="date" placehollder="enter the date of birth"/>
                </Col>
                <Col lg={6} sm={8} className='mt-2 align-right'>
                    <label className='me-5'>Gender :</label>
                    <select className='me-5'>
                        <option value="none">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </Col>
            </Row>
            <Row>
                <Col lg={6} sm={8} className='mt-2' >
                <label>Nationality :</label>
                    <select>
                        <option value="none">Select</option>
                        <option value="Indian">Indian</option>
                        <option value="Non-Indian">Non-Indian</option>
                    </select>
                </Col>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Martial Status :</label>
                    <select>
                        <option value="none">Select</option>
                        <option value="Married">Married</option>
                        <option value="Unmarried">Unmarried</option>
                    </select>
                </Col>
            </Row>
            <Row>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Mobile Number :</label>
                    <input type="number" placehollder="enter the mobile number"/>
                </Col>
            </Row>
            <Row>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Company Email :</label>
                    <input type="email" placehollder="enter the company email"/>
                </Col>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Personal Email :</label>
                    <input type="email" placehollder="enter the personal email"/>
                </Col>
            </Row>
            <Row>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Current address :</label>
                    <input type="text" placehollder="enter the current address"/>
                </Col>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Permanent adddress :</label>
                    <input type="text" placehollder="enter the permanent address"/>
                </Col>
            </Row>
            <Row className='text-center mt-4'>
                <span><Button className='me-2 btn-success'>Create</Button>
                <Button>Update</Button></span>
            </Row>
            <Row>
                <fieldset>
                    <legend className='mt-4'>Person 1</legend>
                <Row>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Name :</label>
                    <input type="text" placehollder="enter the name"/>
                </Col>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Mobile Number :</label>
                    <input type="nummber" placehollder="enter the mobile number"/>
                </Col>
            </Row>
            <Row>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Relationship :</label>
                    <input type="text" placehollder="enter the relation"/>
                </Col>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Address :</label>
                    <input type="text" placehollder="enter the address"/>
                </Col>
            </Row>
            <Row className='text-center mt-4'>
                <span><Button className='me-2 btn-success'>Create</Button>
                <Button>Update</Button></span>
            </Row>
                </fieldset>
            </Row>
            <Row>
                <fieldset>
                    <legend className='mt-4'>Person 2</legend>
                <Row>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Name :</label>
                    <input type="text" placehollder="enter the name"/>
                </Col>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Mobile Number :</label>
                    <input type="nummber" placehollder="enter the mobile number"/>
                </Col>
            </Row>
            <Row>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Relationship :</label>
                    <input type="text" placehollder="enter the relation"/>
                </Col>
                <Col lg={6} sm={8} className='mt-2'>
                    <label>Address :</label>
                    <input type="text" placehollder="enter the address"/>
                </Col>
            </Row>
            <Row className='text-center mt-4'>
                <span><Button className='me-2 btn-success'>Create</Button>
                <Button>Update</Button></span>
            </Row>
                </fieldset>
            </Row>
        </Container>
    </div>


  );
}

export default Profile;