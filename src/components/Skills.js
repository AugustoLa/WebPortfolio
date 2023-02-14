import { Container, Row, Col } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png"

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
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Habilidades</h2>
                            <p></p>
                            <Carousel responsive={responsive} infinite={true} className="skills-slider">
                                <div className="item">
                                    <h5>HTML/CSS</h5>
                                    <p>COLOCAR LINK DO PROJETO AQUI</p>
                                </div>
                                <div className="item">
                                    <h5>C#/ASP.NET</h5>
                                    <p>COLOCAR LINK DO PROJETO AQUI</p>
                                </div>
                                <div className="item">
                                    <h5>Javascript</h5>
                                    <p>COLOCAR LINK DO PROJETO AQUI</p>
                                </div>
                                <div className="item">
                                    <h5>Typescript</h5>
                                    <p>COLOCAR LINK DO PROJETO AQUI</p>
                                </div>
                            </Carousel>

                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="color-sharp"></img>
        </section>
    )
}
