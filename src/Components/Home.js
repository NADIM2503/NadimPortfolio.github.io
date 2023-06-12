import React, { useState, useEffect } from 'react'

const Home = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 80) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
    
   
  return (
    <>
    <div  data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="75">
    <header className="header_wrapper">
        <nav className={`navbar navbar-expand-lg fixed-top  ${isScrolled ? 'header-scrolled' : ''}`} >
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="./images/port-logo.png" className="img-fluid" alt="logo"/>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <!-- <span className="navbar-toggler-icon"></span> --> */}
                    <i className="fas fa-stream navbar-toggler-icon"></i>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav menu-navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item mt-3 mt-lg-0">
                            <a className="main-btn" href="#contact">Hire Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    {/* Navbar section exit */}

    {/* Banner section */}
    <section id="home" className="banner_wrapper" style={{
        backgroundImage: 'url(./images/main-image.jpg)'}}>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-center text-md-start">
                    <h6>WELCOME TO MY WORLD</h6>
                    <h1>I'm Nadeem Sayed<br/><span>Frontend Developer.</span><br/>based in Pune.</h1>
                    <div className="mt-4">
                        <a className="main-btn"  target="_blank" href="https://drive.google.com/file/d/10_-AGAm9QxmxEpbBnl2QU7-kmS8wNJik/view?usp=sharing">Download CV</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Banner section exit  */}

     {/* About section */}

     <section id="about" className="about_wrapper">
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-5 mb-4 mb-lg-0">
                    <img src="./images/image.jpg" className="img-fluid rounded-3" alt="About Us"/>
                </div>
                <div className="col-lg-7 ps-lg-5 text-center text-lg-start">
                    <div className="my-3 my-lg-0">
                        <span className="subtitle">My About Details</span>
                        <h2>About Me</h2>
                        <p>Passionate and dependable candidate successful at managing multiple priorities with a positive attitude.</p>
                    </div>
                    <div className="pt-4">
                        <ul className="nav nav-pills justify-content-center justify-content-lg-between mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-skill-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-skill" type="button" role="tab" aria-controls="pills-skill"
                                    aria-selected="true">Main Skills</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-Award-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-Award" type="button" role="tab" aria-controls="pills-Award"
                                    aria-selected="false">Certifications</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-experiance-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-experiance" type="button" role="tab"
                                    aria-controls="pills-experiance" aria-selected="false">Projects</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-education-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-education" type="button" role="tab"
                                    aria-controls="pills-education" aria-selected="false">Education</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-skill" role="tabpanel"
                                aria-labelledby="pills-skill-tab">
                                <div className="single-progress">
                                    <h6>Designing</h6>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: "95%"}}
                                            aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                    <span className="label">95%</span>
                                </div>
                                <div className="single-progress">
                                    <h6>Javascript</h6>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: "80%"}}
                                            aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
                                        </div>
                                    </div>
                                    <span className="label">80%</span>
                                </div>
                                <div className="single-progress">
                                    <h6>React</h6>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: "85%"}}
                                            aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
                                        </div>
                                    </div>
                                    <span className="label">85%</span>
                                </div>
                                <div className="single-progress">
                                    <h6>Backend</h6>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: "80%"}}
                                            aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
                                        </div>
                                    </div>
                                    <span className="label">80%</span>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-Award" role="tabpanel"
                                aria-labelledby="pills-Award-tab">
                                <ul className="text-start ps-0">
                                    <li><a href="#">Full-stack Development with React JS 
                                            <span>- Felix ITs, Pune</span></a> 2022 - 2023
                                    </li>
                                    <li><a href="#">Sololearn Online Platform : 
                                            <span>HTML, CSS, Responsive Design, Javascript.</span></a>2023
                                    </li>
                                    <li><a href="#">Github
                                            <span>- 15 projects</span></a> 2022 - 2023
                                    </li>
                                    <li><a href="#">
                                            <span>Wordress</span></a> Dec - 2022
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="pills-experiance" role="tabpanel"
                                aria-labelledby="pills-experiance-tab">
                                <ul className="text-start ps-0">
                                    <li><a href="#">IZZY Wheels Clone Website<span> -
                                                Ecommerce Website</span></a> React
                                    </li>
                                    <li><a href="#">Food Planet<span> -
                                                Landing Page</span></a> HTML, CSS, JS
                                    </li>
                                    <li><a href="#"><span>Todo- List
                                            </span></a> React App</li>
                                    <li><a href="#"><span>Tic-Tac-Toe Game
                                            </span></a> React App</li>
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="pills-education" role="tabpanel"
                                aria-labelledby="pills-education-tab">
                                <ul className="text-start ps-0">
                                    <li><a href="#">Full-Stack Development<span>
                                                - Felix-Its , Pune
                                               </span></a> 2023
                                    </li>
                                    <li><a href="#">60%<span>
                                        Bachelor of Arts - SitaBai
                                                College of Arts and Commerce
                                                </span></a> 2019-2023
                                    </li>
                                    <li><a href="#">65%<span> - Central Board of 
                                                Secondary Education, 12th</span></a> 2017
                                    </li>
                                    <li><a href="#">72%<span> - Central Board of 
                                        Secondary Education, 10th</span></a> 2015
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
   

     {/* About section exit */}

     {/* Services section  */}
    <section id="services" className="services_wrapper">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-center mb-4">
                    <span className="subtitle">What I can do for you</span>
                    <h2>My Awesome Service</h2>
                    <p>Web Design and Development Services in India- End-to-End Website Design Services for All Brands</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body text-md-start text-center">
                            <img src="../images/ecommerce.png" alt="service" className="img-fluid mb-4"/>
                            <h3>Ecommerce Website</h3>
                            <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body text-md-start text-center">
                            <img src="../images/marketing.png" alt="service" className="img-fluid mb-4"/>
                            <h3>Marketing & Bussiness Website</h3>
                            <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body text-md-start text-center">
                            <img src="../images/port2.png" alt="service" className="img-fluid mb-4"/>
                            <h3>Portfolio Website</h3>
                            <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body text-md-start text-center">
                            <img src="../images/education.jpg" alt="service" className="img-fluid mb-4"/>
                            <h3>Educational Websites</h3>
                            <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body text-md-start text-center">
                            <img src="../images/blog.png" alt="service" className="img-fluid mb-4"/>
                            <h3>Blogging Websites</h3>
                            <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body text-md-start text-center">
                            <img src="../images/main-wp.webp" alt="service" className="img-fluid mb-4"/>
                            <h3>WordPress Websites</h3>
                            <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
     {/* Services section exit */}

    {/*  Portfolio Sectrion  */}
    <section id="portfolio" className="portfolio_wrapper">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-center mb-4">
                    <span className="subtitle">My Complete project</span>
                    <h2>My Latest Project</h2>
                    <p>There are many variations of passages of Lorem Ipsum available,<br className="d-none d-md-block"/>
                        but the majority have suffered alteration.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card p-0">
                        <span style={{backgroundImage: "url('../images/calender-src.png')"}}></span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card p-0">
                        <span style={{backgroundImage: "url('../images/Todo2- list.png')"}}></span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card p-0">
                        <span
                            style={{backgroundImage: " url('images/calculator.png')"}}></span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card p-0">
                        <span style={{backgroundImage: `url('images/svg.png')`}}></span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card p-0">
                        <span style={{backgroundImage: "url('images/izzy.png')"}}></span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card p-0">
                        <span style={{backgroundImage: " url('images/store.png')"}}></span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card p-0">
                        <span
                            style={{backgroundImage: "url('images/contact.png')"}}></span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card p-0">
                        <span style={{backgroundImage: " url('images/food.png')"}}></span>
                    </div>
                </div>

            </div>
        </div>
    </section>
     {/* Portfolio Section exit  */}

    {/* Contact section */}
    <section id="contact" className="contact_wrapper">
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-6 order-2 order-lg-1 pe-lg-5 text-lg-start text-center">
                    <span className="subtitle">Let's Say Hi</span>
                    <h2>Hire Me.</h2>
                    <div className="row call_details mb-4">
                        <label className="col-sm-3">Call Us:</label>
                        <div className="col-sm-9 mb-3 mb-lg-2">
                            <a href="tel:+918180865028">+91 8180865028</a>
                        </div>
                        <label className="col-sm-3">Email Us:</label>
                        <div className="col-sm-9 mb-3 mb-lg-2">
                            <a href="mailto:example@gmail.com">nadeemsayed2503@gmail.com</a>
                        </div>
                    </div> 
                    <form>
                        <div className="mb-4">
                            <input type="text" className="form-control" placeholder="Your Name..." autoComplete="off"/>
                        </div>
                        <div className="mb-4">
                            <input type="number" className="form-control" placeholder="Your Phone..." autoComplete="off"/>
                        </div>
                        <div className="mb-4">
                            <input type="email" className="form-control" placeholder="Your Email..." autoComplete="off"/>
                        </div>
                        <div className="mb-4">
                            <input cols="40" rows="4" className="form-control" id="message"
                                placeholder="Write a Message..." autoComplete="off"/>
                        </div>
                        <button type="submit" className="main-btn">Submit</button>
                    </form>
                </div>
                <div className="col-lg-6 order-1 mb-4 order-lg-1 mb-lg-0">
                    <img src="../images/myImg1.jpg" className="img-fluid"/>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- contact section exit --> */}

    {/* <!-- Footer section --> */}
    <section id="contact" className="footer_wrapper mt-3 mt-md-0">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 text-center text-md-start">
                    <div className="footer-logo mb-3 mb-md-0">
                        <img src="./images/port-logo.png"/>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <ul className="list-unstyled d-flex justify-content-center justify-content-md-end justify-content-lg-center jus social-icon mb-3 mb-md-0">
                        <li>
                            <a href="https://instagram.com/nadeemsayed2503?igshid=ZDdkNTZiNTM="><i className="fab fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/nadim.sayyed.148?mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i> </a>
                        </li>
                        <li>
                            <a href="https://github.com/NADIM2503"><i className="fab fa-github"></i></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/nadeem-sayed-803840223"><i className="fab fa-linkedin-in"></i> </a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="copyright-text text-lg-start text-center mb-3 mb-lg-0">
                        <p className="mb-0">Copyright © 2023 <a href="#">NadeemSayed2503</a>. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    </>
  )
}

export default Home;