import {Container , Row ,Col } from "react-bootstrap";
import { useEffect, useState } from "react";


export const Banner = () =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting , setIsDeleting] =useState(false);
    const toRotate = [ "WE ARE CREATIVES" , "WE ARE CREATIVES"];
    const [text , setText] =useState('');
    const [delta , setDelta]= useState (300 - Math.random() * 100);
    const period =2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
    
        return () =>{ clearInterval(ticker)};
    }, [text]);

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0 , text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1 );
            setDelta(500)
        }
    }
    return(
        <section className="banner" id="about">
        <Container>
            <h1 className="text-white bb">WE ARE CREATIVES</h1>
            <h1> <span className="wrap text-white bb">{text}</span></h1>
        </Container>
    </section>
    )
}