import { custPharmacyLogo, offer, img18, img19, img20, bpmonitor, inheler, cyrup } from "../assest/Images";
import '../CSS Files/App.css'
import axios from "axios";
import { useState } from "react";
function Customer() {
    let CustomerName = sessionStorage.getItem("userName")
    var custname = CustomerName.replace(/"/g, '')
    let [greeting, setGreeting] = useState("")
    function Greeting() {

        var today = new Date();
        let hoursMin = today.getHours() + '.' + today.getMinutes();
        // console.log(hoursMin);
        if (hoursMin <= 11.59) {
            setGreeting("Good Morning🌄 " + custname);
        } else if (hoursMin >= 12.00 && hoursMin <= 15.59) {
            setGreeting("Good Afternoon🕑 " + custname);
        } else if (hoursMin >= 16.00 && hoursMin <= 20.59) {
            setGreeting("Good Evening🌆 " + custname);
        } else {
            setGreeting("Working Late 🌃 " + custname);
        }
    }
    // for search category set variables
    let [category, setCategory] = useState("");
    let [cname, setCName] = useState("");
    let [cresult, setResultc] = useState(false);

    async function FindCategory() {
        let result = await axios.get("http://localhost:3000/api/customer/viewCategoryByName/" + cname);
        console.log(result.data)
        if (result.data.msg === "Record Present!") {
            setResultc(true);
            setCategory(result.data.category);
            // alert(result.data.msg);
        }
        else {
            setResultc(false);
            setCategory(result.data.msg);
            // alert(result.data.msg);
        }
    }
    async function cleanCategoryData() {
        setResultc("");
        setCName("");
    }
    //search product function
    // for search product set variables
    let [product, setProducts] = useState("");
    let [pname, setPName] = useState("");
    let [presult, setResultp] = useState(false);
    async function FindProduct() {
        let result = await axios.get("http://localhost:3000/api/customer/viewProductByName/" + pname);
        console.log(result.data)
        if (result.data.msg === "Record Present!") {
            setResultp(true);
            setProducts(result.data.product);
        }
        else {
            setResultp(false);
            setProducts(result.data.msg);
            // alert(result.data.msg)
        }
    }
    async function cleanProductData() {
        setResultp("");
    }

    // OWn data view
    let [customer, setCustomer] = useState("");
    let [cemail, setCemail] = useState("");
    let [custresult, setResultcust] = useState(false);
    let pass = (sessionStorage.getItem("userPassword"));
    async function FindCustData() {
        // 
        // alert(pass)
        try {
            let result = await axios.get("http://localhost:3000/api/customer/findCustomerByEmail/" + (sessionStorage.getItem("userEmail")), {
                headers: { "authorization": sessionStorage.getItem("token") }
            })
            console.log(result.data)
            if (result.data.msg === "Unathorized request or user") {
                alert(result.data.msg);

            } else if (result.data.msg === "Record Present!") {
                setResultcust(true);
                setCustomer(result.data.customer);
            }
            else {
                setResultp(false);
                setCustomer(result.data.msg);
                // alert(result.data.msg)
            }
        }
        catch (error) {
            console.log(error);
        }
    }


    // -------------------------------------------------------------------------------------------------------------------------------------------------------------------
    return (
        <div>
            <body onLoad={Greeting}>
            <div className="p-3 text-end mt-3 pe-5">
                <a className="btn btn-primary" href="/">Log Out <i className="fa-solid fa-arrow-right-from-bracket"></i></a>
            </div>
            {/* ==================================================================================================================== */}
            {/* Search Buttons */}
            <div className="text-center my-3 py-3 mx-auto adminHeading fs-4 fw-semibold " style={{ height: "65px", boxShadow: "0px 0px 5px blue" }}>
                {greeting}
            </div>
            <div className="container d-flex flex-wrap justify-content-evenly mx-5">
                <div className="" style={{ width: "50%" }}>
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item ">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <div className="input-group" style={{ height: "auto" }}>
                                    <input type="search" className="rounded-start border  border-end-0 border-dark mx-auto fs-6" id="categoryName"
                                        placeholder="Enter Category Name" name="cname" onChange={(event) => setCName(event.target.value)}
                                        aria-label="Enter Category Name" aria-describedby="button-addon2" style={{ width: "88.5%" }} />
                                    <button className=" btn btn-outline-secondary border border-1 border-start-0 border-dark" type="button" data-bs-toggle="collapse"
                                        id="button-addon2" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                        onClick={FindCategory}><i className="bi bi-search"></i></button>
                                    <button className="btn btn-close border border-1 border-dark border-start-0 p-2 pb-3" type="button" data-bs-toggle="collapse"
                                        id="button-addon2" aria-controls="panelsStayOpen-collapseOne" data-bs-target="#panelsStayOpen-collapseOne" onClick={cleanCategoryData}></button>
                                </div>
                                {/* </button> */}
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body ">
                                    <div className="my-1">
                                        {cresult ? "Category Id is " + category._id : ""}<br />
                                        {cresult ? "Category Name is " + category.Cname : ""}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="" style={{ width: "50%" }}>
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <div className="input-group" style={{ height: "auto" }}>
                                    <input type="search" className="rounded-start border form-control border-end-0 border-dark mx-auto fs-6" id="categoryName" list="datalistOptions"
                                        placeholder="Enter Product Name" name="pname" onChange={(event) => setPName(event.target.value)}
                                        aria-label="Enter Product Name" aria-describedby="button-addon2" style={{ width: "88.5%" }} />
                                    <datalist id="datalistOptions">
                                        <option value="Vicks Vaporub"></option>
                                        <option value="Vicks Inhaler"></option>
                                    </datalist>
                                    <button className=" btn btn-outline-secondary border border-1 border-start-0 border-dark" type="button" data-bs-toggle="collapse"
                                        id="button-addon2" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true"
                                        onClick={FindProduct}><i className="bi bi-search"></i></button>
                                    <button className="btn btn-close border border-1 border-dark border-start-0 p-2 pb-3" type="button" data-bs-toggle="collapse"
                                        id="button-addon2" aria-controls="panelsStayOpen-collapseTwo" data-bs-target="#panelsStayOpen-collapseTwo" onClick={cleanProductData}></button>
                                </div>
                                {/* </button> */}
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingTwo">
                                <div className="accordion-body ">
                                    <div className="" >
                                        {presult ? "Product Id is " + product._id : ""}<br />
                                        {presult ? "Product Name is " + product.pname : ""}<br />
                                        {presult ? "Product Price is " + product.price : ""}<br />
                                        {presult ? "Product Quantity is " + product.quantity : ""}<br />
                                        {presult ? "Product Category Id " + product.cid : ""}<br />
                                        {presult ? "Product Category Name is " + product.categoryName : ""}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            {/* Buttons */}
            <div className="container d-flex flex-wrap justify-content-evenly mt-5">
                {/* Customer Own Details */}
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item ">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <div className="input-group" style={{ height: "auto", width: "230px" }}>
                                <button className=" btn btn-outline-dark border border-1 border-dark" type="button" data-bs-toggle="collapse"
                                    id="button-addon2" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true"
                                    onClick={FindCustData} style={{ height: "auto", width: "250px" }}>My Details <i class="bi bi-person"></i></button>
                            </div>
                            {/* </button> */}
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body ">
                                <div className="my-1">
                                    {custresult ? "Name- " + customer.name : ""}<br />
                                    {custresult ? "Email- " + customer.email : ""}<br />
                                    <span>Password- {pass}</span><br />
                                    {/* {custresult ? "Password- "+customer.password:""}<br /> */}
                                    {custresult ? "Gender- " + customer.gender : ""}<br />
                                    {custresult ? "Age- " + customer.age : ""}<br />
                                    {custresult ? "MobileNo- " + customer.mobileNo : ""}<br />
                                    {custresult ? "Address- " + customer.address : ""}<br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Category data */}
                <div>
                    <a href="/viewCategoryData" target="popup" className="me-3"
                        onClick="window.open('/viewCategoryData','popup','width=700,height=700'); return false;">
                        <input type="button" className="btn btn-outline-dark"
                            value="View All Category" />
                    </a>
                </div>
                {/* Product Data */}
                <div>
                    <a href="/viewProductData" target="popup" className="me-3"
                        onClick="window.open('/viewProductData','popup','width=900,height=700'); return false;">
                        <input type="button" className="btn btn-outline-dark"
                            value="View All Products" />
                    </a>
                </div>
                {/* Add Order  */}
                <div>
                    <a href="/addOrder" target="popup" className="me-3"
                        onClick="window.open('/addOrder','popup','width=700,height=700'); return false;">
                        <button className="btn btn-outline-dark" >Shop Now <i
                            className="bi bi-cart"></i></button>
                    </a>
                </div>
                {/* Customer Own order */}
                <div>
                    <a href="/viewOrder" target="popup" className="me-3"
                        onClick="window.open('/viewOrder','popup','width=700,height=700'); return false;">
                        <button className="btn btn-outline-dark" >My Orders!</button>
                    </a>
                </div>

            </div>
            {/* --------------------------------------------------------------------------------------------------------------------------------------------- */}
            {/* info with logo part */}
            <div className="container pt-5 d-flex flex-wrap " style={{ height: "420px" }}>
                <div className="p-3 " style={{ height: "350px", width: " 49%" }}>
                    <img src={custPharmacyLogo} style={{ height: "100%", width: "100%" }} />
                </div>
                <div className=" text-center ms-5 " style={{ width: "45%", padding: "50px 30px" }}>
                    <h4 style={{ fontStyle: "oblique" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                        nulla.</h4>
                    <p className=" text-start" style={{ fontSize: "large" }}>Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.amet placeat quia assumenda, ea omnis? Minima esse numquam dolore voluptas quasi. Nobis,
                        dolorum dolore, voluptatum, eveniet quisquam nostrum modi illo quibusdam cupiditate repellendus
                        necessitatibus numquam sequi excepturi commodi a nam distinctio laudantium provident.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequatur!</p>
                </div>
            </div>
            {/* --------------------------------------------------------------------------------- */}
            {/* Lab test offers */}
            <div className="container mt-4">
                <div className="p-3">
                    <h3>Booked Lab Tests <i className="bi bi-clipboard2-pulse-fill"></i></h3>
                </div>
                <div className="d-flex flex-wrap my-3 justify-content-evenly">
                    <div className=" border border-1 border-dark rounded-4 "
                        style={{ height: "250px", width: "400px", backgroundImage: "linear-gradient(to bottom right, rgb(249, 249, 141), rgb(169, 245, 236))" }}>
                        <div className=" ps-3">
                            <span className="btn ms-2 rounded-4" style={{ backgroundColor: "rgb(216, 143, 143)" }}>73% OFF</span>
                            <img src={offer} className="" height="70px" style={{ marginLeft: "170px" }} />
                        </div>
                        <div className="d-flex justify-content-evenly">
                            <div className="ps-3">
                                <a href="#" style={{ textDecoration: "none" }}>
                                    <h5 className=" text-center text-dark fw-bold">Full Body Health Checkup</h5>
                                </a>
                                <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet dolor sit amet amet dolor sit amet dolor.
                                </p>
                                <h6 className="ms-3 "><i className="bi bi-currency-rupee fw-lighter"></i><span
                                    className="text-decoration-line-through fw-lighter ">999</span><span
                                        className="ms-3 fw-bold fs-5"><i className="bi bi-currency-rupee"></i>750</span></h6>
                            </div>
                            <div className="pe-2">
                                <img src={img18} height="160px" width="150px" className="rounded-4" alt="..." />
                            </div>
                        </div>
                    </div>

                    <div className=" border border-1 border-dark rounded-4 "
                        style={{ height: "250px", width: "400px", backgroundImage: "linear-gradient(to bottom right, rgb(249, 249, 141), rgb(169, 245, 236))" }}>
                        <div className=" ps-3">
                            <span className="btn ms-2 rounded-4" style={{ backgroundColor: "rgb(216, 143, 143)" }}>73% OFF</span>
                            <img src={offer} className="" height="70px" style={{ marginLeft: "170px" }} />
                        </div>
                        <div className=" d-flex justify-content-evenly">
                            <div className="ps-3">
                                <a href="#" style={{ textDecoration: "none" }}><h5 className="my-1 text-center text-dark">Kids Health Checkup</h5></a>
                                <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet  dolor sit amet amet dolor sit amet dolor sit amet.</p>
                                <h6 className="ms-3 "><i className="bi bi-currency-rupee fw-lighter"></i><span className="text-decoration-line-through fw-lighter ">999</span><span className="ms-3 fw-bold fs-5"><i className="bi bi-currency-rupee"></i>750</span></h6>
                            </div>
                            <div className="pe-2">
                                <img src={img19} height="150px" width="140px" className="rounded-4" alt="..." />
                            </div>
                        </div>
                    </div>

                    <div className=" border border-1 border-dark rounded-4 "
                        style={{ height: "250px", width: "400px", backgroundImage: "linear-gradient(to bottom right, rgb(249, 249, 141), rgb(169, 245, 236))" }}>
                        <div className=" ps-3">
                            <span className="btn ms-2 rounded-4" style={{ backgroundColor: "rgb(216, 143, 143)" }}>73% OFF</span>
                            <img src={offer} className="" height="70px" style={{ marginLeft: "170px" }} />
                        </div>
                        <div className=" d-flex justify-content-evenly">
                            <div className="ps-3">
                                <a href="#" style={{ textDecoration: "none" }}><h5 className="my-1 text-center text-dark">Diabetes Checkup</h5></a>
                                <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet  dolor sit amet amet dolor sit amet dolor sit amet.</p>
                                <h6 className="ms-3 "><i className="bi bi-currency-rupee fw-lighter"></i><span className="text-decoration-line-through fw-lighter ">999</span><span className="ms-3 fw-bold fs-5"><i className="bi bi-currency-rupee"></i>750</span></h6>
                            </div>
                            <div className="pe-2">
                                <img src={img20} height="160px" width="150px" className="rounded-4" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* -------------------------------------------------------------------------------------------- */}
            {/* products offer */}
            <div className="container mt-4">
                <div className="p-3">
                    <h3>Best Products For you😍 </h3>
                </div>

                <div className="d-flex flex-wrap my-3 justify-content-evenly">

                    <div className=" border border-1 border-dark rounded-4 bg-light" style={{ height: "250px", width: "400px" }}>
                        <div className=" ps-3">
                            <span className="btn ms-2 rounded-4 btn-info" style={{}}>73% OFF</span>
                            <img src={offer} className="" height="80px" style={{ marginLeft: "150px" }} />
                        </div>
                        <div className=" d-flex justify-content-evenly">
                            <div className="ms-3">
                                <h5>Blood Pressure Monitor</h5>
                                <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet.</p>
                                <h6 className="ms-3 fw-lighter text-decoration-line-through"><i
                                    className="bi bi-currency-rupee fw-lighter"></i>999</h6>
                                <h5 className="ms-3"><i className="bi bi-currency-rupee"></i>450</h5>
                            </div>
                            <div className="p-2">
                                <img src={bpmonitor} height="140px" width="150px" className="rounded-4"
                                    alt="bpmonitor" />
                            </div>
                        </div>
                    </div>
                    <div className=" border border-1 border-dark rounded-4 bg-light" style={{ height: "250px", width: "400px" }}>
                        <div className=" ps-3">
                            <span className="btn ms-2 rounded-4 btn-info" style={{}}>73% OFF</span>
                            <img src={offer} className="" height="80px" style={{ marginLeft: "150px" }} />
                        </div>
                        <div className=" d-flex justify-content-evenly">
                            <div className="ms-3">
                                <h5>Vicks Vaporub</h5>
                                <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet.</p>
                                <h6 className="ms-3 fw-lighter text-decoration-line-through"><i
                                    className="bi bi-currency-rupee fw-lighter"></i>999</h6>
                                <h5 className="ms-3"><i className="bi bi-currency-rupee"></i>450</h5>
                            </div>
                            <div className="p-2">
                                <img src={inheler} height="140px" width="150px" className="rounded-4"
                                    alt="bpmonitor" />
                            </div>
                        </div>
                    </div>
                    <div className=" border border-1 border-dark rounded-4 bg-light" style={{ height: "250px", width: "400px" }}>
                        <div className=" ps-3">
                            <span className="btn ms-2 rounded-4 btn-info" style={{}}>73% OFF</span>
                            <img src={offer} className="" height="80px" style={{ marginLeft: "150px" }} />
                        </div>
                        <div className=" d-flex justify-content-evenly">
                            <div className="ms-3">
                                <h5>Maxtra Syrup</h5>
                                <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet.</p>
                                <h6 className="ms-3 fw-lighter text-decoration-line-through"><i
                                    className="bi bi-currency-rupee fw-lighter"></i>999</h6>
                                <h5 className="ms-3"><i className="bi bi-currency-rupee"></i>450</h5>
                            </div>
                            <div className="p-2">
                                <img src={cyrup} height="140px" width="150px" className="rounded-4"
                                    alt="bpmonitor" />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            </body>
        </div >
    )
}
export default Customer;