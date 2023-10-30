import React from 'react'
import { Link } from 'react-router-dom';
import weblogo from "./assets/weblogo.png"

const Navbar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link to="/home" className="navbar-brand"><img className='weblogo' src={weblogo} alt="Store Logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link to="/" className="nav-link active dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Doctors</Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <h5 className="dropdown-item">Find Doctor By Speciality</h5>
                                    <li><Link to="" className="dropdown-item">Dermatologist</Link></li>
                                    <li><Link to="" className="dropdown-item">Gynecologist</Link></li>
                                    <li><Link to="" className="dropdown-item">Child Specialist</Link></li>
                                    <li><Link to="" className="dropdown-item">Psychiatrist</Link></li>
                                    <li><Link to="" className="dropdown-item">Nuerologist</Link></li>
                                    <li><Link to="" className="dropdown-item">General Physician</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/" className="nav-link active dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Consult Online</Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <h5 className="dropdown-item">Online Services</h5>
                                    <li><Link to="" className="dropdown-item">All Online Doctors</Link></li>
                                    <li><Link to="" className="dropdown-item">Ask Doctor - Q/A</Link></li>
                                    <li><Link to="" className="dropdown-item">Help me Dr Rehan</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/" className="nav-link active dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Hospitals</Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <h5 className="dropdown-item">Hospitals in Pakistan</h5>
                                    <li><Link to="" className="dropdown-item">Karachi</Link></li>
                                    <li><Link to="" className="dropdown-item">Islamabad</Link></li>
                                    <li><Link to="" className="dropdown-item">Lahore</Link></li>
                                    <li><Link to="" className="dropdown-item">Multan</Link></li>
                                    <li><Link to="" className="dropdown-item">Sukkur</Link></li>
                                    <li><Link to="" className="dropdown-item">Peshawar</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active"><i className="fa-solid fa-phone"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active">+1 2546 6521 548</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar
