import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import bannerImg from "../assets/img/banner-img.svg"
import TrackVisibility from "react-on-screen"
import 'animate.css'

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer", "estudante de Ciência da Computação", "apaixonado por games"];
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 1.6);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(100);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Bem vindo ao meu Portfólio
                        </span>

                        <h1> {`Olá, meu nome é Augusto e eu sou `}
                            <span className="wrap">
                                {text}
                            </span>
                        </h1>
                        <p>Sou apaixonado por jogos e adoro aprender a fazer as tarefas da maneira mais eficiente e divertida possivel! Estou aprendendo a programar faz alguns meses e estou sempre disposto a trocar ideia e trabalhar em projetos em conjunto, se possivel!</p>
                    </Col >
                    <Col xs={12} md={6} xl={5}>
                        <img src={bannerImg} alt="Banner Img" />
                    </Col>
                </Row>
            </Container>
        </section >
    )
}