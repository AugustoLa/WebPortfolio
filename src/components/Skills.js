import { Container, Row, Col } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import financeiro from "../assets/img/financeiro-img.png"
import calculadora from "../assets/img/calculadora-img.png"
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
                                    <a href="https://augustola.github.io/ProjetoFinanceiro/" target="_blank"><img className="financeiro-img" src={financeiro}></img></a>
                                    <h5>Web Page designada para o controle financeiro</h5>
                                </div>
                                <div className="item">
                                    <a href="https://augustola.github.io/Calculadora-React" target="_blank"><img className="calculadora-img" src={calculadora}></img></a>
                                    <h5>Calculadora utilizando html/css e Javascript</h5>
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
