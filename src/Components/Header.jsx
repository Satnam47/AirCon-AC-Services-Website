import React from 'react'
import { NavLink,Link } from 'react-router-dom'

function Header() {
    return (

        <>
            {/* Topbar Start */}
            <div className="container-fluid bg-dark text-white-50 py-2 px-0 d-none d-lg-block">
                <div className="row gx-0 align-items-center">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center me-4">
                            <small className="fa fa-phone-alt me-2" />
                            <small>+012 345 6789</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center me-4">
                            <small className="far fa-envelope-open me-2" />
                            <small>info@example.com</small>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <ol className="breadcrumb justify-content-end mb-0">
                            <li className="breadcrumb-item"><Link className="text-white-50 small" to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link className="text-white-50 small" to="/">Terms</Link></li>
                            <li className="breadcrumb-item"><Link className="text-white-50 small" to="/">Privacy</Link></li>
                            <li className="breadcrumb-item"><Link className="text-white-50 small" to="/">Support</Link></li>
                        </ol>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <h1 className="m-0"><img className="img-fluid me-3" src="/img/icon/icon-02-primary.png" alt="" />AirCon</h1>
                </Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mx-auto bg-light pe-4 py-3 py-lg-0">
                        <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                        <NavLink to="about/" className="nav-item nav-link">About Us</NavLink>
                        <NavLink to="OurServices/" className="nav-item nav-link">Our Services</NavLink>
                        <div className="nav-item dropdown">
                            <Link to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu bg-light border-0 m-0">
                                <Link to="Features/" className="dropdown-item">Features</Link>
                                <Link to="FreeQuote/" className="dropdown-item">Free Quote</Link>
                                <Link to="OurTeam/" className="dropdown-item">Our Team</Link>
                                <Link to="Testimonial/" className="dropdown-item">Testimonial</Link>
                                {/* <Link to="Page404" className="dropdown-item">404 Page</Link> */}
                            </div>
                        </div>
                        <NavLink to="contact/" className="nav-item nav-link">Contact Us</NavLink>
                        <NavLink to="Login/" className="nav-item nav-link">LogIn</NavLink>
                        <NavLink to="Register/" className="nav-item nav-link">Register</NavLink>
                    </div>
                    <div className="h-100 d-lg-inline-flex align-items-center d-none">
                        <Link className="btn btn-square rounded-circle bg-light text-primary me-2" to=""><i className="fab fa-facebook-f" /></Link>
                        <Link className="btn btn-square rounded-circle bg-light text-primary me-2" to=""><i className="fab fa-twitter" /></Link>
                        <Link className="btn btn-square rounded-circle bg-light text-primary me-2" to=""><i className="fab fa-linkedin-in" /></Link>
                        <Link className="btn btn-square rounded-circle bg-light text-primary me-0" to=""><i className="fab fa-instagram" /></Link>
                    </div>
                </div>
            </nav>
            {/* Navbar End */}
        </>
    )
}

export default Header