import React, { Component } from 'react'

export default class NavBar extends Component {
    render () {
        return (
            <div>
                <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i /></a>
                <aside id="colorlib-aside" className="js-fullheight text-center">
                    <h1 id="colorlib-logo"><a href="index.html"><span className="img" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/images/author.jpg')` }} />JVC Photo</a></h1>
                    <nav id="colorlib-main-menu" role="navigation">
                        <ul>
                            <li className="colorlib-active"><a href="index.html">Home</a></li>
                            <li><a href="collection.html">Collection</a></li>
                            <li><a href="about.html">About Me</a></li>
                            <li><a href="services.html">My Services</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>

                    <div className="colorlib-footer">
                        <h3>Newsletter</h3>
                        <div className="d-flex justify-content-center">
                            <form action="#" className="colorlib-subscribe-form">
                                <div className="form-group d-flex">
                                    <div className="icon"><span className="icon-paper-plane" /></div>
                                    <input type="text" className="form-control" placeholder="Enter Email Address" />
                                </div>
                            </form>
                        </div>
                    </div>
                </aside>
            </div>
        )
    }
}