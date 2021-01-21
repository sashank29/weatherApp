import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Icon from '../utils/Icon';

const Footer = () => {
    return ( <div className="footer mt-10">
    <div className="container">
        <Row>
            <Col>
                <h4>About Us</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo maxime excepturi deleniti vitae temporibus beatae voluptate tenetur soluta aperiam, incidunt libero iusto iure cumque quis enim velit doloribus odit aut.</p>
            </Col>
            <Col>
                <h4>Links</h4>
                <NavLink to="/dashboard" className="nav-link text-white">Dashboard</NavLink>
                <NavLink to="/customer-care" className="nav-link text-white">Help</NavLink>
            </Col>
            <Col>
            </Col>
            <Col>
                <h5 className="text-white mb-3">&nbsp;</h5>
                12356 Weather ave, <br/>
                STE 345 - 350,<br/>
                Newark,<br/>
                CA, 94560<br/><br/>
                <p className="text-bold mr-5">
                    <Icon icon="phone" className="mb-1" />
                    123-123-1234
                </p>
                <p className="text-bold mr-5">
                    <Icon icon="fax" className="mb-1"  />
                    123-123-1234
                </p>
                <p className="text-bold mr-5">
                    <Icon icon="envelope" className="mb-1"  />
                    <a href={`mailto: info@cloudwick.com`}>
                        info@weather.com
                    </a>
                </p>
            </Col>
        </Row>
        <hr className="bg-gray mt-5" />
    </div>
  </div> );
}

export default Footer;