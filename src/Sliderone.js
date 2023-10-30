import React from 'react'
import "./custom.css"
import { Link } from 'react-router-dom'

const Sliderone = () => {
    return (
        <>


            <div className="slideone">
                <div className="slidecontent">
                    <div className="slidetext">
                        <h1>CHOOSE THE <br /> DOCTOR</h1>
                        <p>Highly Qualified Specialists in different <br /> fields in medicine, ready to help you at any time.</p>
                    </div>
                    <Link to="/Signup">Get Started</Link>
                </div>
            </div>


        </>
    )
}

export default Sliderone
