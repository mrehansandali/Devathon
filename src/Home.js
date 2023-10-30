import React from 'react'
import doctor1 from "./assets/doctor1.png"
import doctor2 from "./assets/doctor2.png"
import doctor3 from "./assets/doctor3.png"
import homebg from "./assets/homebg.jpg"
import td1 from "./assets/docicon.png"
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
    const location = useLocation();
    const fullName = location?.state?.fullName;


    return (
        <>
            <Navbar />

            <div className="container">
                <h1 className='h1'>{"Hello " + fullName} <br /> Find Your Consultant</h1>

                <h2 className='text-center mt-5'>Categories</h2>
                <div className="MR-category">
                    <a href="#" className="MR-category-item">
                        <img src="https://images.healthshots.com/healthshots/en/uploads/2022/07/02195043/doctor-stress.jpg"
                            alt="" />
                        <div className="MR-category-item-content">
                            <h3>DOCTOR</h3>
                            <h2>Heart Disease</h2>
                        </div>
                    </a>
                    <a href="#" className="MR-category-item">
                        <img src="https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg"
                            alt="" />
                        <div className="MR-category-item-content">
                            <h3>DOCTOR</h3>
                            <h2>Lung Disease</h2>
                        </div>
                    </a>
                    <a href="#" className="MR-category-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQeM37N_ZG5L9ANpnuE45M5Lf96DfjjMRlKbPLhs6dZXkuKYB3NUVZSycRwmGGpWijh4&usqp=CAU"
                            alt="" />
                        <div className="MR-category-item-content">
                            <h3>DOCTOR</h3>
                            <h2>Cancer Disease</h2>
                        </div>
                    </a>
                </div>
                <div className="MR-category">
                    <a href="#" className="MR-category-item">
                        <img src="https://thumbs.dreamstime.com/b/doctor-portrait-hospital-42042245.jpg"
                            alt="" />
                        <div className="MR-category-item-content">
                            <h3>DOCTOR</h3>
                            <h2>Liver Disease</h2>
                        </div>
                    </a>
                    <a href="#" className="MR-category-item">
                        <img src="https://img.freepik.com/free-photo/portrait-successful-mid-adult-doctor-with-crossed-arms_1262-12865.jpg"
                            alt="" />
                        <div className="MR-category-item-content">
                            <h3>DOCTOR</h3>
                            <h2>Brain Disease</h2>
                        </div>
                    </a>
                    <a href="#" className="MR-category-item">
                        <img src="https://media.istockphoto.com/id/1327024466/nl/foto/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-clinic-hall.jpg?s=170667a&w=0&k=20&c=eDAUcWmZs-Qb14_E0lVmZ7mBH2UwFGDttNZAksEA_n4="
                            alt="" />
                        <div className="MR-category-item-content">
                            <h3>DOCTOR</h3>
                            <h2>Kidneys Disease</h2>
                        </div>
                    </a>
                </div>
            </div>
            <img className='homebg mt-5' src={homebg} alt="" />
            <div className="container">
                <h2 className='text-center mt-5'>Specialist</h2>
                <div className="consult-section">
                    <div className="theme-cards">
                        <div className="row mt-4 justify-content-center">
                            <div className="mc  my-3 col-md-6 col-lg-4 col-sm-8 col-10">
                                <div className="card mb-3 ">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-md-7">
                                            <div className="card-body">
                                                <h2>
                                                    Dr. Lucille <br /> Bastian
                                                </h2>
                                                <h4>M.S</h4>
                                                <p>Liposuction</p>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <img id='doctor1' src={doctor1} className="card-img" alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mc  my-3 col-md-6 col-lg-4 col-sm-8 col-10">
                                <div className="card mb-3">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-md-7">
                                            <div className="card-body">
                                                <h2>
                                                    Dr. Lucille <br /> Bastian
                                                </h2>
                                                <h4>M.S</h4>
                                                <p>Liposuction</p>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <img id='doctor2' src={doctor2} className="card-img" alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mc  my-3 col-md-6 col-lg-4 col-sm-8 col-10">
                                <div className="card mb-3">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-md-7">
                                            <div className="card-body">
                                                <h2>
                                                    Dr. Lucille <br /> Bastian
                                                </h2>
                                                <h4>M.S</h4>
                                                <p>Liposuction</p>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <img id='doctor3' src={doctor3} className="card-img" alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <h2 className='text-center mt-5'>Top Rated Doctors</h2>
                <div className="top-doctor">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-md-5 col-sm-8 col-10">
                                <div className="td">
                                    <img width="70" src={td1} alt="" />
                                    <div className="td-cont">
                                        <h4>Dr Zia Hussian</h4>
                                        <p>Lorem ipsum dolor sit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-5 col-sm-8 col-10">
                                <div className="td">
                                    <img width="70" src={td1} alt="" />
                                    <div className="td-cont">
                                        <h4>Dr Zia Hussian</h4>
                                        <p>Lorem ipsum dolor sit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-5 col-sm-8 col-10">
                                <div className="td">
                                    <img width="70" src={td1} alt="" />
                                    <div className="td-cont">
                                        <h4>Dr Zia Hussian</h4>
                                        <p>Lorem ipsum dolor sit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-5 col-sm-8 col-10">
                                <div className="td">
                                    <img width="70" src={td1} alt="" />
                                    <div className="td-cont">
                                        <h4>Dr Zia Hussian</h4>
                                        <p>Lorem ipsum dolor sit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4  col-md-5 col-sm-8 col-10">
                                <div className="td">
                                    <img width="70" src={td1} alt="" />
                                    <div className="td-cont">
                                        <h4>Dr Zia Hussian</h4>
                                        <p>Lorem ipsum dolor sit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-5 col-sm-8 col-10">
                                <div className="td">
                                    <img width="70" src={td1} alt="" />
                                    <div className="td-cont">
                                        <h4>Dr Zia Hussian</h4>
                                        <p>Lorem ipsum dolor sit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home
