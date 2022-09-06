import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {

    let path = useLocation();
    if (path.pathname !== '/login') {

        return (
            <nav className="colorlib-nav" role="navigation">
                <div className="top-menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-7 col-md-9">
                                <div id="colorlib-logo"><a href="index.html">Footwear</a></div>
                            </div>
                            <div className="col-sm-5 col-md-3">
                                <form action="#" className="search-wrap">
                                    <div className="form-group">
                                        <input type="search" className="form-control search" placeholder="Search" />
                                        <button className="btn btn-primary submit-search text-center" type="submit"><i className="icon-search"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 text-left menu-1">
                                <ul>
                                    <li className="active"><Link to="/">Home</Link></li>
                                    <li><Link to="/mens">Mens</Link></li>
                                    <li><Link to="/womens">Womens</Link></li>
                                    <li><Link to="/products">All Products</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="/admin">Administrator</Link></li>
                                    <li className="cart"><Link to="/cart"><i className="icon-shopping-cart"></i> Cart [0]</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sale">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 offset-sm-2 text-center">
                                <div className="row">
                                    <div className="owl-carousel2">
                                        <div className="item carousel-item active">
                                            <div className="col">
                                                <h3><a href="#">25% off (Almost) Everything! Use Code: Summer Sale</a></h3>
                                            </div>
                                        </div>
                                        <div className="item carousel-item">
                                            <div className="col">
                                                <h3><a href="#">Our biggest sale yet 50% off all summer shoes</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        )
    }
    else {
        return (
            <div></div>
        )
    }
}
