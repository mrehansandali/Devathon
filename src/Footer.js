import React from 'react'
import weblogo from "./assets/weblogo.png"

const Footer = () => {
  return (
    <>


<footer className="footer mt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src={weblogo} alt=""/>
                </div>
                <div className="col-md-2">
                    <h3>About</h3>
                    <ul>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <h3>Products</h3>
                    <ul>
                        <li><a href="#">Netlify Build</a></li>
                        <li><a href="#">Netlify Edge</a></li>
                        <li><a href="#">Netlify Analytics</a></li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#">Docs</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Events</a></li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <p>&copy; 2023 Coffee Store. All rights reserved.</p>
                </div>
                <div className="col-md-6">
                    <ul className="social_icons">
                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>


      
    </>
  )
}

export default Footer
