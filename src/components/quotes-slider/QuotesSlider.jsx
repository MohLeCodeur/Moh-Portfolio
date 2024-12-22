import './_quotes_slider.scss';
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


class QuotesSlider extends Component {
    render() {
        return (
            <section id='carousel'>
                <Carousel 
                    autoPlay= {true}
                    infiniteLoop
                    interval={5000}
                    showStatus={false}
                    showThumbs={false}
                    showArrows={true}
                    ><div className='quote-item'>
                    <p className='quote'>&laquo;&nbsp;L’éducation est l’arme la plus puissante pour changer le monde.&nbsp;&raquo;</p>
                    <p className='author'>Nelson Mandela</p>
                </div>
                <div className='quote-item'>
                    <p className='quote'>&laquo;&nbsp;Si tu veux aller vite, marche seul. Si tu veux aller loin, marchons ensemble.&nbsp;&raquo;</p>
                    <p className='author'>Proverbe africain</p>
                </div>
                <div className='quote-item'>
                    <p className='quote'>&laquo;&nbsp;Je ne perds jamais. Soit je gagne, soit j’apprends.&nbsp;&raquo;</p>
                    <p className='author'>Nelson Mandela</p>
                </div>
                
                </Carousel>
            </section>
        )
    }
}

export default QuotesSlider;