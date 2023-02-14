import { Container, Col, Row, Nav, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCards"
import financeiro from "../assets/img/financeiro-img.png"
import calculadora from "../assets/img/calculadora-img.png"
import placeholder from "../assets/img/placeholder.png"

export const Projects = () => {

    const projects = [
        {
            title: "Controle Financeiro",
            description: "Controle gastos e ganhos!",
            imgUrl: financeiro,
        },
        {
            title: "Calculadora Web",
            description: "Calcule a qualquer momento!",
            imgUrl: calculadora,
        },
        {
            title: "Placeholder",
            description: "Placeholder",
            imgUrl: placeholder,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projetos</h2>
                        <p>Projetos pessoais</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
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
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}