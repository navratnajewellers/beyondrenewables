import { Col, Container, Row } from "rsuite";
import { BiSolidPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const WbFooter = () => {
  return (
    <Container>
      <Row className="footer-section1">
        <Col
          xs={24}
          sm={24}
          md={8}
          lg={8}
          className=" flex  sec1-content-container "
        >
          <div className="footer-row1-icon-container">
            <BiSolidPhoneCall />
          </div>
          <div>
            <h5>Customer Support</h5>
            <Link to="tel:8340325075">8340-325075</Link>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8}></Col>
        <Col xs={24} sm={24} md={8} lg={8}></Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={6} lg={6}></Col>
        <Col xs={24} sm={24} md={6} lg={6}></Col>
        <Col xs={24} sm={24} md={6} lg={6}></Col>
        <Col xs={24} sm={24} md={6} lg={6}></Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12}></Col>
        <Col xs={24} sm={24} md={12} lg={12}></Col>
      </Row>
    </Container>
  );
};

export default WbFooter;
