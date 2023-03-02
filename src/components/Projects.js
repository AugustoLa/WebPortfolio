import { Container, Col, Row, Nav, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCards"
import financeiro from "../assets/img/financeiro-img.png"
import calculadora from "../assets/img/calculadora-img.png"
import TrackVisibility from "react-on-screen"
import 'animate.css'

export const Projects = () => {

    const projects = [
        {
            title: "Controle Financeiro",
            description: "Controle gastos e ganhos!",
            imgUrl: financeiro,
            projectUrl: "https://augustola.github.io/ProjetoFinanceiro/",
        },
        {
            title: "Calculadora Web",
            description: "Calcule a qualquer momento!",
            imgUrl: calculadora,
            projectUrl: "https://augustola.github.io/Calculadora-React/",
        },
    ];

    return (
        <section className="project" id="projetos">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                    <h2>Projetos</h2>
                                    <p>Projetos pessoais</p>
                                </div>
                            }
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Finalizados</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Em andamento</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <p>Nada por enquanto</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}