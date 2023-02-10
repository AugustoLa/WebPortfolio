import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer", "estudante de Ciência da Computação", "apaixonado por games"];
    const period = 2000;

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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in rhoncus neque. Phasellus tristique ex eget placerat porta. Nulla in velit in libero facilisis rutrum. Duis sollicitudin ligula lorem, vitae dictum felis sollicitudin a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed feugiat lorem id lacinia vestibulum. Duis egestas id felis in efficitur. Nunc aliquam ante in libero varius ullamcorper. In posuere, sem nec imperdiet aliquet, ante tortor sodales urna, condimentum posuere nibh arcu id mi. Vestibulum et velit lorem. Fusce dui urna, vulputate lacinia mi id, auctor mattis leo. Nulla facilisi. Nulla mi nisi, malesuada et rhoncus ut, tristique at urna. Nunc ut auctor sapien.</p>
                        <button onClick={() => console.log('connect')}>
                            Vamos nos conectar
                            <ArrowRightCircle size={25} />
                        </button>
                    </Col >
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}