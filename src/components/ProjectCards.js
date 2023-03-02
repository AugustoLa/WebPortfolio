import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
    return (

        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img className="img-img" src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
            <a className="buttonProj" href={projectUrl} target="_blank"><button size="lg"><span>Visitar</span></button></a>

        </Col>
    )
}