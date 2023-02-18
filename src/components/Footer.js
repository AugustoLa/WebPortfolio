import { Col, Container, Row } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm"
import logo from "../assets/img/logo.svg"

export const Footer = () => {
    return (
        <footer className="footer">
            <Container className="footer-2">
                <Row className="align-items-center">
                    <MailchimpForm></MailchimpForm>
                    <Col sm={6}>
                        <img src={logo}></img>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <p>CopyRight 2023. All Rights Reserved by: Augusto Laursen</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}