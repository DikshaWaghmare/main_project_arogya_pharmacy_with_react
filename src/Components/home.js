import {img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23}  from '../assest/Images/index';
import {aboutbg,aboutus,teamM1,teamM2,teamM3,teamM4,contactusbg,footerlogo}  from '../assest/Images/index';
import {Link, Route, Routes} from 'react-router-dom';
import SignIn from './signin';
import '../CSS Files/home.css';
function Home() {
    
  return (
    <div className="">
      {/* Nav bar part----------------------------------------------- */}
      <nav className="navbar navbar-expand-lg bg-info d-flex row border">
      <div className="container-fluid ps-4">
            <div className="">
            <a class="navbar-brand ms-3" href="#"><img src={img1} style={{height: "50px", width: "50px", borderRadius: "50%"}}/><b className="fs-4 ">आपली</b>Pharmacy❤️
                </a>
               
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav  mb-2 mb-lg-0 fw-normal fs-5">
              <li className="nav-item" style={{marginRight:"30px", marginLeft:"400px"}}>
              <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item" style={{marginRight:"30px"}}>
              <a class="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item" style={{marginRight:"30px"}}>
              <a class="nav-link" href="#contactus">Contact</a>
              </li>
              <li className="nav-item" style={{marginRight:"30px", marginLeft: "270px"}}>
              <Link to="/signup" style={{textDecoration:"none"}} className="text-dark"> <i className="bi bi-person"></i> Sign Up</Link></li>
              {/* <a href="#" target="_blank" class="nav-link"><i className="bi bi-person"></i> Sign up</a></li> */}
              <li className="nav-item" >
              <Link to="/signin" style={{textDecoration:"none"}} className="text-dark"> <i className="bi bi-box-arrow-in-right"></i> Sign in</Link>
              {/* <a href="#" target="_blank" class="nav-link"><i className="bi bi-box-arrow-in-right"></i> Sign in</a> */}
              </li>
            </ul>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>
      </div>
      </nav>
      {/* ----------------------------------------------------------------- */}
      {/* Home page part */}
      <section style={{backgroundColor:" rgb(239, 251, 252);"}}>

        {/* Opening Part Section */}
        <section>
          <div className='container pt-5 d-flex' style={{height:"420px"}}>
            <div className='text-center ms-5' style={{width:"50%", padding:"70px 30px"}}>
            <h4 style={{fontStyle:"oblique"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                        nulla.</h4>
            <p className=" text-start" style={{fontSize:"large"}}>Lorem ipsum dolor sit amet consectetur adipisicing
                elit.amet placeat quia assumenda, ea omnis? Minima esse numquam dolore voluptas quasi. Nobis,
                dolorum dolore, voluptatum, eveniet quisquam nostrum modi illo quibusdam cupiditate repellendus
                necessitatibus numquam sequi excepturi commodi a nam distinctio laudantium provident.</p>
            </div>
            <div className="p-3" style={{height:"370px", width:"50%"}}>
                    <img src={img2} style={{height: "100%", width: "100%" }}/>
            </div>
          </div>
        </section>

        {/* Crousal part */}
        <section>
        <div id="carouselExampleControls" className="carousel slide container mt-5 mb-4" style={{width:"70%"}}
            data-bs-ride="carousel">
              <div className="carousel-inner">
              <div className="carousel-item active">
                    <img src={img3} style={{height: "400px", borderRadius: "10px"}} className="d-block w-100"
                        alt="carousel Images"/>
                </div>
                <div className="carousel-item active">
                    <img src={img4} style={{height: "400px", borderRadius: "10px"}} className="d-block w-100"
                        alt="carousel Images"/>
                </div>
                <div className="carousel-item active">
                    <img src={img5} style={{height: "400px", borderRadius: "10px"}} className="d-block w-100"
                        alt="carousel Images"/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </section>

        {/* Categories part */}
        <section>
        <div className="container">
        <h4>Category Available!</h4>
        <div className="d-flex flex-wrap">
                <div className=" my-3 mx-2 border CategoryProductCard">
                    <img src={img6} className="card-img-top category-Product-img" alt="..."/>
                    <div className="card-body">
                      <h5 className="text-center mt-3 text-dark categoryProductCardHeading" >Cold and Cough</h5>
                    </div>
                </div>
                <div className=" my-3 mx-2 border CategoryProductCard">
                    <img src={img7} className="card-img-top category-Product-img" alt="..."/>
                    <div className="card-body">
                      <h5 className="text-center mt-3 text-dark categoryProductCardHeading" >Eye Care</h5>
                    </div>
                </div>
                <div className=" my-3 mx-2 border CategoryProductCard">
                    <img src={img8} className="card-img-top category-Product-img" alt="..."/>
                    <div className="card-body">
                      <h5 className="text-center mt-3 text-dark categoryProductCardHeading" >Baby Care</h5>
                    </div>
                </div>
                <div className=" my-3 mx-2 border CategoryProductCard">
                    <img src={img9} className="card-img-top category-Product-img" alt="..."/>
                    <div className="card-body">
                      <h5 className="text-center mt-3 text-dark categoryProductCardHeading" >Healthy Drinks</h5>
                    </div>
                </div>
                <div className=" my-3 mx-2 border CategoryProductCard">
                    <img src={img10} className="card-img-top category-Product-img" alt="..."/>
                    <div className="card-body">
                      <h5 className="text-center mt-3 text-dark categoryProductCardHeading" >Skin Care</h5>
                    </div>
                </div>
                <div className=" my-3 mx-2 border CategoryProductCard">
                    <img src={img11} className="card-img-top category-Product-img" alt="..."/>
                    <div className="card-body">
                      <h5 className="text-center mt-3 text-dark categoryProductCardHeading">HealthCare Devices</h5>
                    </div>
                </div>
        </div>
        
        </div>
        </section>

        {/* Product part */}
        <section>
        <div className="container">
        <h4>Products Available!</h4>
        <div className="d-flex flex-wrap">
                <div className=" my-3 mx-2 border CategoryProductCard">
                    <img src={img12} className="card-img-top category-Product-img" alt="..."/>
                    <div className="card-body">
                      <h5 className="text-center mt-3 text-dark categoryProductCardHeading" >Cold and Cough</h5>
                    </div>
                </div>
                <div className=" my-3 mx-2 border CategoryProductCard">
                    <img src={img13} className="card-img-top category-Product-img" alt="..."/>
                    <div className="card-body">
                      <h5 className="text-center mt-3 text-dark categoryProductCardHeading" >Eye Care</h5>
                    </div>
                </div>
                <div className=" my-3 mx-2 border CategoryProductCard">
                    <img src={img14} className="card-img-top category-Product-img" alt="..."/>
                    <div className="card-body">
                      <h5 className="text-center mt-3 text-dark categoryProductCardHeading" >Baby Care</h5>
                    </div>
                </div>
                <div className=" my-3 mx-2 border CategoryProductCard">
                    <img src={img15} className="card-img-top category-Product-img" alt="..."/>
                    <div className="card-body">
                      <h5 className="text-center mt-3 text-dark categoryProductCardHeading" >Healthy Drinks</h5>
                    </div>
                </div>
                <div className=" my-3 mx-2 border CategoryProductCard">
                    <img src={img16} className="card-img-top category-Product-img" alt="..."/>
                    <div className="card-body">
                      <h5 className="text-center mt-3 text-dark categoryProductCardHeading" >Skin Care</h5>
                    </div>
                </div>
                <div className=" my-3 mx-2 border CategoryProductCard">
                    <img src={img17} className="card-img-top category-Product-img" alt="..."/>
                    <div className="card-body">
                      <h5 className="text-center mt-3 text-dark categoryProductCardHeading">HealthCare Devices</h5>
                    </div>
                </div>
        </div>
        
        </div>
        </section>

        {/* Offers lab test */}
        <section>
        <div className="container mt-4">
            <div className="p-3">
                <h3>Booked Lab Tests <i className="bi bi-clipboard2-pulse-fill"></i></h3>
            </div>
            <div className="d-flex flex-wrap my-3 justify-content-evenly">
              <div className=" border border-1 border-dark rounded-4 bg-light" style={{height: "250px", width:"400px"}}>
                <a href="#" style={{textDecoration:"none"}}><h4 className="my-3 text-center text-dark">Full Body Health Checkup</h4></a>
                <div className=" d-flex justify-content-evenly">
                    
                    <div className="ps-3">
                        <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet  dolor sit amet amet dolor sit amet dolor sit amet.</p>
                        <h6 className="ms-3 "><i className="bi bi-currency-rupee fw-lighter"></i><span className="text-decoration-line-through fw-lighter ">999</span><span className="ms-3 fw-bold fs-5"><i className="bi bi-currency-rupee"></i>750</span></h6>
                    </div>
                    <div className="pe-2">
                        <img src={img18} height="160px" width="150px" className="rounded-4" alt="..."/>
                    </div>
                </div>
              </div>

              <div className=" border border-1 border-dark rounded-4 bg-light" style={{height: "250px", width:"400px"}}>
                <a href="#" style={{textDecoration:"none"}}><h4 className="my-3 text-center text-dark">Kids Health Checkup</h4></a>
                <div className=" d-flex justify-content-evenly">
                    
                    <div className="ps-3">
                        <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet  dolor sit amet amet dolor sit amet dolor sit amet.</p>
                        <h6 className="ms-3 "><i className="bi bi-currency-rupee fw-lighter"></i><span className="text-decoration-line-through fw-lighter ">999</span><span className="ms-3 fw-bold fs-5"><i className="bi bi-currency-rupee"></i>750</span></h6>
                    </div>
                    <div className="pe-2">
                        <img src={img19} height="160px" width="150px" className="rounded-4" alt="..."/>
                    </div>
                </div>
              </div>

              <div className=" border border-1 border-dark rounded-4 bg-light" style={{height: "250px", width:"400px"}}>
                <a href="#" style={{textDecoration:"none"}}><h4 className="my-3 text-center text-dark">Diabetes Checkup</h4></a>
                <div className=" d-flex justify-content-evenly">
                    
                    <div className="ps-3">
                        <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet  dolor sit amet amet dolor sit amet dolor sit amet.</p>
                        <h6 className="ms-3 "><i className="bi bi-currency-rupee fw-lighter"></i><span className="text-decoration-line-through fw-lighter ">999</span><span className="ms-3 fw-bold fs-5"><i className="bi bi-currency-rupee"></i>750</span></h6>
                    </div>
                    <div className="pe-2">
                        <img src={img20} height="160px" width="150px" className="rounded-4" alt="..."/>
                    </div>
                </div>
              </div>
            </div>
        </div>
        </section>

        {/*Online Payment */}
        <section>
        <div className="container">
            <h4 className="mt-4"><i className="bi bi-currency-rupee"></i>Payment Available With...</h4>
            
            <div className="d-flex mx-auto flex-wrap pb-5 justify-content-evenly">
              <div className="mx-3 mt-3 border text-center payCard paymentCard">
                    <img src={img21} className="my-3" alt="Google py img"/>
                    <a href="#" target="_blank" style={{textDecoration:"none"}}>
                        <h5 className="text-center text-dark mb-3 ">Google Pay </h5>
                    </a>
              </div>
              <div className="mx-3 mt-3 border text-center payCard paymentCard">
                    <img src={img22} className="my-3" alt="Phonepay img"/>
                    <a href="#" target="_blank" style={{textDecoration:"none"}}>
                        <h5 className="text-center text-dark mb-3 ">Phone Pay </h5>
                    </a>
              </div>
              <div className="mx-3 mt-3 border text-center payCard paymentCard">
                    <img src={img23} className="my-3" alt="Paytm img"/>
                    <a href="#" target="_blank" style={{textDecoration:"none"}}>
                        <h5 className="text-center text-dark mb-3 ">Paytm Karo</h5>
                    </a>
              </div>
            </div>
        </div>
        </section>
      </section>


      {/* About page area--------------------------------------------------------------------------------------------------------- */}
      
      <section id="about" style={{backgroundColor: "gainsboro"}}>

        <section>
            <div className="container-fluid p-3 my- text-center">
                <h3 className=" p-3 my-2">Know About Us!</h3>
            </div>
            <div className="container mb-4" style={{height: "450px", borderRadius: "10px", backgroundImage:`url(${aboutbg})`, backgroundSize: "100% 100%", backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"}}>
                <div className="about-img1-bg-color">
                    <div className="text-white text-center mx-auto fs-5">
                        {/* <!-- <h1><b>ABOUT</b></h1> --> */}
                        <p className="fs-4 font-monospace">"Good health is not something we can buy.<br/> However, it can be
                            an
                            extremely valuable savings account."<br/>
                            {/* <!-- We have the Pharmacists you can count on. Our pharmacist will make sure your most valuable health assest thrives." --> */}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container d-flex my-4" style={{height: "450px", borderRadius: "10px", backgroundImage: `url(${aboutus})`, backgroundSize: "100% 100%", backgroundPosition: "center",
                  backgroundRepeat: "no-repeat"}}>
                <div className=" p-5 " style={{width: "50%"}}>
                    <h3 className='text-center'>About Us!</h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis accusantium tempora ad
                        cupiditate
                        cum consectetur. Voluptas inventore quos libero quia! Excepturi ducimus error voluptatum
                        deleniti
                        officia, temporibus sapiente facilis aut.
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis accusantium tempora ad
                        cupiditate
                        cum consectetur. Voluptas inventore quos libero quia! Excepturi ducimus error voluptatum
                        deleniti
                        officia, temporibus sapiente facilis aut.
                    </p>
                    <h5 className="text-center">" We have the Pharmacists you can count on. <br/>Our pharmacist will make
                        sure your most<br/> valuable health assest
                        thrives."</h5>
                </div>
            </div>
        </section>


        <section>
            <div className="container mt-2 pb-5">
                <h3 className="fw-bold ps-5 pt-4 ">MEET OUR TEAM <i className="bi bi-people fs-2"></i></h3>
                <div className="d-flex flex-wrap justify-content-evenly ">
                    <div className="border my-3 team" style={{height: "300px", width:"250px"}}>
                    <img src={teamM1} style={{height: "100%", width:"100%"}} />
                        <div className="p-2 text-center">
                            <h5 className="fw-bold">Alexa Heal</h5>
                        </div>
                    </div>

                    <div className="border my-3 team" style={{height: "300px", width:"250px"}}>
                    <img src={teamM2} style={{height: "100%", width:"100%"}} />
                        <div className="p-2 text-center">
                            <h5 className="fw-bold">Marry Gold</h5>
                        </div>
                    </div>
                    <div className="border my-3 team" style={{height: "300px", width:"250px"}}>
                    <img src={teamM3} style={{height: "100%", width:"100%"}} />
                        <div className="p-2 text-center">
                            <h5 className="fw-bold">John Xender</h5>
                        </div>
                    </div>
                    <div className="border my-3 team" style={{height: "300px", width:"250px"}}>
                        <img src={teamM4} style={{height: "100%", width:"100%"}} />
                        <div className="p-2 text-center">
                            <h5 className="fw-bold">Nikolas Pooran</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </section>

      {/* Contactus page area-------------------------------------------------------------------------------------------------------- */}
      <section id="contactus">
      <div className="container-fluid py-4 " style={{ borderRadius: "10px", backgroundImage:`url(${contactusbg})`, backgroundSize: "100% 100%", backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"}}>
           <div className="p-1 mt-4">
                    <h2 className="" style={{textAlign:"start", marginLeft:"500px"}}>Contact Us <i className="bi bi-headset"></i> </h2>
           </div>
                <hr className="" style={{width: "800px", marginLeft:"170px", color: "black"}}/>
                <div className="container p-4 my-3"
                    style={{marginLeft:"90px",height:"450px", width: "65%", borderRadius: "10px"}}>
                    <div className="d-flex flex-row justify-content-evenly">
                        <div className="text-left mt-4">
                            <div className="">
                                <h4 className='text-start'><img src={"https://img.icons8.com/fluency/48/000000/address.png"} /> Address</h4>
                                <p className="contact-link">512,oldmadrasrdblr-16, Doorvaninagar<br />
                                    Bangalore, Karnataka, 56001628514152
                                </p>
                            </div>
                            <div className="contact-details">
                                <h4 className='text-start'><img src={"https://img.icons8.com/fluency/48/000000/apple-mail.png"} /> Email</h4>
                                <a className=" contact-link text-black" href="mailto:hello@gmail.com">helloworld@gmail.com
                                </a>
                            </div>
                            <div className="contact-details mt-4">
                                <h4 className='text-start '><img src={"https://img.icons8.com/fluency/48/000000/phone-office.png"}/> Phone</h4>
                                <a className="contact-link  text-black" href="tel:+91-1234567890">1234567890
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6" style={{width:"400px"}}>
                            <h4> Send Message</h4>
                            <form>
                                <input type="name" className="form-control mt-4 input-box" placeholder="Full Name"/><br />
                                <input type="email" className="form-control input-box" placeholder="Email"/><br />
                                <label for="text" className="form-label">Type your Message...</label>
                                <textarea className="form-control input-box" rows="2" placeholder="Text"></textarea><br />
                                <button type="button" className="btn btn-info contactus-btn" id="text"> <a
                                        href="#" style={{textDecoration: "none", color: "white"}}>Send</a></button>
                                <button type="button" className="ms-5 btn btn-info contactus-cancel-btn" id="text"><a
                                        href="#" style={{textDecoration: "none", color: "white"}}>Cancel</a></button>
                           </form>
                        </div>
                        
                    </div>
                </div>
      </div>
      </section>

      {/* Footer part -------------------------------------------------------------------------------------------*/}
      <footer className="text-white " style={{backgroundColor:"rgb(46, 157, 176)"}}>
        <div className="container">
            <div className="container d-flex flex-wrap justify-content-evenly">
                <div className="footer-style mt-3">
                    <a href="#"><img src={footerlogo} style={{height: "180px", width: "180px"}}
                            className="footer-img" /></a>
                </div>
                <div style={{marginTop: "50px"}}>
                    <ul style={{listStyleType: "none"}}>
                        <h4 className="mb-4">Quick Contact</h4>
                        <li><span className="fs-5"><i className="bi bi-telephone"></i> -1234567890</span></li>
                        <li><span className="fs-5"><i className="bi bi-envelope"></i> -helloworld@gmail.com</span></li>
                        <li><span className="fs-5"><i className="bi bi-house"></i> -Bangalore, Karnataka</span></li>
                    </ul>
                </div>
                <div className="footer-style" style={{marginTop: "50px"}}>
                    <ul style={{listStyleType: "none"}}>
                        <h4 className="mb-4">Find us on....</h4>
                        <li><a href="https://www.flipkart.com" target="_blank" className="m-3 text-white fs-5"
                                style={{textDecoration:"none"}}>
                                <i className="bi bi-cart"></i> Flipkart
                            </a></li>
                        <li> <a href="https://www.amazon.com" target="_blank" style={{textDecoration:"none"}}
                                className="m-3 text-white fs-5">
                                <i className="fa-brands fa-amazon"></i> Amazon</a></li>
                        <li><a href="https://www.twitter.com" target="_blank" style={{textDecoration:"none"}}
                                className="m-3 text-white fs-5">
                                <i className="fa-brands fa-square-twitter"></i> Twitter</a></li>
                        <li><a href="https://www.Facebook.com" target="_blank" style={{textDecoration:"none"}}
                                className="m-3 text-white fs-5">
                                <i className="bi bi-facebook"></i> Facebook</a></li>
                    </ul>
                </div>
                <div style={{marginTop: "50px"}}>
                    <ul style={{listStyleType: "none"}}>
                        <h4 className="mb-4">Go to...</h4>
                        <li><a className="fs-5 text-white" href="#home" style={{textDecoration:"none"}}><i
                                    className="bi bi-house"></i> Home</a></li>
                        <li><a className="fs-5 text-white" href="#about" style={{textDecoration:"none"}}><i
                                    className="bi bi-people fs-4"></i> About</a></li>
                        <li><a className="fs-5 text-white" href="#contactus" style={{textDecoration:"none"}}><i
                                    className="bi bi-envelope"></i> ContactUs</a></li>
                    </ul>
                </div>
            </div>
            <div style={{paddingBottom: "10px"}}>
                <hr>
                </hr>
                <p style={{fontSize: "20px", textAlign: "center"}} className="font-monospace "><i><b>" We have the Pharmacists
                            you can count on. Our pharmacist will make sure your most valuable health assest
                            thrives."</b></i></p>
            </div>
        </div>
    </footer>

    <script src="https://kit.fontawesome.com/e872ba44e8.js" crossorigin="anonymous"></script>
   {/* =========================================================================================================================================================== */}
  
    </div>
  );
}

export default Home;
