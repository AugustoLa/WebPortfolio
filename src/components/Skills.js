import { Container, Row, Col } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import css from "../assets/img/css.svg"
import html from "../assets/img/html.svg"
import csharp from "../assets/img/csharp.svg"
import react from "../assets/img/react.svg"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="skill" id="habilidades">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Habilidades</h2>
                            <p></p>
                            <Carousel responsive={responsive} infinite={true} className="skills-slider">
                                <div className="item">
                                    <img src={csharp}></img>
                                    <h5>C#/ASP.NET</h5>
                                </div>
                                <div className="item">
                                    <img src={html}></img>
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={css}></img>
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={react}></img>
                                    <h5>React</h5>
                                </div>
                            </Carousel>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
