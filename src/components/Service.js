import {Container , Row ,Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import row2 from "../assets/img/row2-img.avif";
export const Services = () =>{
    return (
        <section className="services container-fluid mb-5" id="service" >
            
            
                <Row >
                    <div className="col-md-6 row1">
                        <h1>Transforme your brand</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dicta recusandae aut odio assumenda voluptates esse at ad tenetu</p>
                        <button onClick={() => console.log('connect')}>Learn More <ArrowRightCircle size={25}/></button>
                    </div>
                    <div className="col-md-6 row2">
                        
                    </div>
                </Row>
                <Row >
                   
                    <div className="col-md-6 row3">
                        
                    </div>
                    <div className="col-md-6 row1">
                        <h1>Transforme your brand</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dicta recusandae aut odio assumenda voluptates esse at ad tenetu</p>
                        <button onClick={() => console.log('connect')}>Learn More <ArrowRightCircle size={25}/></button>
                    </div>
                </Row>
                <Row >
                   
                    <div className="col-md-6 row4">
                        
                    </div>
                    <div className="col-md-6 row5">
                        
                        </div>
                    
                </Row>
        </section>
        
    )
}