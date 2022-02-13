import React from 'react'
import { Zoom,Collapse } from '@mui/material';


export const Join = ({check2}) => {
    
    
    return (
        <div> <section className="colored-section" id="testimonials">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-interval="1000" data-pause="hover">
                <div className="carousel-inner testouter">
                <Collapse in={check2}
                  { ... (check2?{timeout:3000}:{})}
      >
                    <div className="carousel-item active container-fluid">
                        <h2 className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h2>
                        
                    </div>
                    <div className="carousel-item container-fluid">
                        <h2 className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h2>
                       

                    </div>
                    </Collapse>
                     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>

                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>

                    </button>
                </div>
            </div>


        </section></div>
    )
}
