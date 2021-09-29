import React, {Component} from 'react'
import OwlCarousel from 'react-owl-carousel'

export default class Main extends Component {
  render () {
    return (
        <div>
            <section className="ftco-section-no-padding bg-light">
                <div className="hero-wrap">
                    <div className="overlay" />
                    <div className="d-flex align-items-center js-fullheight">
                        <div className="author-image text img d-flex">
                            <OwlCarousel items={1}
                            className="home-slider js-fullheight owl-carousel"
                            loop={true}
                            autoplay={true}
                            animateOut="fadeOut"
                            animateIn="fadeIn"
                            dots={true}
                            autoplayHoverPause={false}
                            >
                                <div><img className="slider-item js-fullheight" src={`${process.env.PUBLIC_URL}/images/author.jpg`} /></div>
                                <div><img className="slider-item js-fullheight" src={`${process.env.PUBLIC_URL}/images/author-2.jpg`} /></div>
                            </OwlCarousel>
                            {/*<section className="home-slider js-fullheight owl-carousel">
                                <div className="slider-item js-fullheight" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/images/author.jpg')` }}></div>
                                <div className="slider-item js-fullheight" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/images/author-2.jpg')` }}></div>
                            </section>*/}
                        </div>
                        <div className="author-info text p-3 p-md-5">
                            <div className="desc">
                                <span className="subheading">Hello! I'm</span>
                                <h1 className="big-letter">James Van Cleaf</h1>
                                <h1 className="mb-4"><span>James Van Cleaf</span> A Photographer. <span>I Capture Life</span></h1>
                                <p className="mb-4">I am A Photographer from America Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <h3 className="signature h1">James Van Cleaf</h3>
                                <ul className="ftco-social mt-3">
                                    <li className="ftco-animate fadeInUp ftco-animated"><a href="#"><span className="icon-twitter" /></a></li>
                                    <li className="ftco-animate fadeInUp ftco-animated"><a href="#"><span className="icon-facebook" /></a></li>
                                    <li className="ftco-animate fadeInUp ftco-animated"><a href="https://www.instagram.com/jamesvancleafphoto/"><span className="icon-instagram" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section instagram">
                <div className="container">
                    <div className="row justify-content-center mb-2 pb-3">
                        <div className="col-md-7 heading-section heading-section-2 text-center">
                            <h2 className="mb-4">Follow me on Instagram</h2>
                        </div>
                    </div>  
                    <div className="row no-gutters">
                        <div className="col-sm-12 col-md">
                            <a href="images/image_1.jpg" className="insta-img image-popup" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/images/image_1.jpg')`}}>
                                <div className="icon d-flex justify-content-center">
                                    <span className="icon-instagram align-self-center" />
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md">
                            <a href="images/image_2.jpg" className="insta-img image-popup" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/images/image_2.jpg')`}}>
                                <div className="icon d-flex justify-content-center">
                                    <span className="icon-instagram align-self-center" />
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md">
                            <a href="images/image_3.jpg" className="insta-img image-popup" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/images/image_3.jpg')`}}>
                                <div className="icon d-flex justify-content-center">
                                    <span className="icon-instagram align-self-center" />
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md">
                            <a href="images/image_4.jpg" className="insta-img image-popup" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/images/image_4.jpg')`}}>
                                <div className="icon d-flex justify-content-center">
                                    <span className="icon-instagram align-self-center" />
                                </div>
                            </a>
                        </div>
                            <div className="col-sm-12 col-md">
                                <a href="images/image_5.jpg" className="insta-img image-popup" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/images/image_5.jpg')`}}>
                                    <div className="icon d-flex justify-content-center">
                                        <span className="icon-instagram align-self-center" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
        )
    }
}