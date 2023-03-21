import { img1 } from '../assest/Images/index';
import axios from "axios";
import { useState } from "react";
function Admin() {
    // event.preventDefault();
    // for search category set variables
    // alert("welcome "+sessionStorage.getItem("userName"))
    async function Greeting(){
        alert("welcome "+sessionStorage.getItem("userName"))
        let result=await axios.get ("http://localhost:3000/api/customer/findCustomerByName/"+(sessionStorage.getItem("userName")),{
            headers: { "authorization": sessionStorage.getItem("token") }
    });
        console.log(result)
    }


    let [category, setCategory] = useState("");
    let [cname, setCName] = useState("");
    let [cresult, setResultc] = useState(false);
    let [cmsgInfo, setMsgInfoC] = useState("");

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
    //   --------------------------------------------------------------------------
    //search product function
    // for search product set variables
    let [product, setProducts] = useState("");
    let [pname, setPName] = useState("");
    let [presult, setResultp] = useState(false);
    let [pmsg, setPMsg] = useState("");
    async function FindProduct() {
        let result = await axios.get("http://localhost:3000/api/customer/viewProductByName/" + pname);
        console.log(result.data)
        if (result.data.msg === "Record Present!") {
            setResultp(true);
            setProducts(result.data.product);
            setPMsg("");
        }
        else {
            setResultp(false);
            setPMsg(result.data.msg);
            // alert(result.data.msg)
        }
    }
    async function cleanProductData() {
        setResultp("");
    }
    // ------------------------------------------------------------------------------
    // for search order set variables
    let [order, setOrder] = useState("");
    let [custEmail, setcEmail] = useState("");
    let [oresult, setResulto] = useState(false);
    let [msgInfoO, setMsgInfoO] = useState("");
    //search order function
    async function FindOrder() {
        let result = await axios.get("http://localhost:3000/api/order/viewOrderByCustEmail/" + custEmail, {
            headers: { "authorization": sessionStorage.getItem("token") }
        });
        console.log(result.data)
        if (result.data.msg === "Unathorized request or user") {
            alert(result.data.msg);

        } else if (result.data.msg === "Record Present!") {
            setResulto(true);
            setOrder(result.data.order);
            setMsgInfoO("")
        }
        else {
            setResulto(false);
            setOrder("")
            setMsgInfoO(result.data.msg);
        }
    }
    async function cleanOrderData() {
        setResulto("");
    }
    // --------------------------------------------------------------------------------------
    // for search salesman set variables
    let [salesman, setSalesman] = useState("");
    let [sname, setsName] = useState("");
    let [sresult, setResults] = useState(false);
    let [smsgInfo, setMsgInfoS] = useState("");
    //search order function
    async function FindSalesman() {
        let result = await axios.get("http://localhost:3000/api/admin/viewSalesmanByName/" + sname, {
            headers: { "authorization": sessionStorage.getItem("token") }
        });
        console.log(result.data)
        if (result.data.msg === "Unathorized request or user") {
            alert(result.data.msg);

        } else if (result.data.msg === "Record Present!") {
            setResults(true);
            setSalesman(result.data.salesman);
            setMsgInfoS("")
        }
        else {
            setResults(false);
            setSalesman("");
            setMsgInfoS = (result.data.msg)
            // alert(result.data.msg)
        }

    }
    async function cleanSalesmanData() {
        setResults("");
    }
    return (
        <div > 
<button onClick={Greeting}>hello</button>
            <section>
                {/* navbar */}
                <nav className="navbar navbar-expand-lg bg-dark  d-flex row border">
                    <div className="container-fluid ps-4">
                        <div className="">
                            <a class="navbar-brand ms-3 text-white" href="#"><img src={img1} style={{ height: "50px", width: "50px", borderRadius: "50%" }} /><b className="fs-4 ">आपली</b>Pharmacy❤️
                            </a>

                        </div>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav  mb-2 mb-lg-0 fw-normal fs-5">
                                <li className="nav-item" style={{ marginRight: "30px", marginLeft: "400px" }}>
                                    <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item" style={{ marginRight: "30px" }}>
                                    <a class="nav-link text-white" href="#about">About</a>
                                </li>
                                <li className="nav-item" style={{ marginRight: "30px" }}>
                                    <a class="nav-link text-white" href="#contactus">Contact</a>
                                </li>

                            </ul>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </section>

            <section>
                <div className="d-flex" style={{ height: "100%" }}>
                    {/* left-side-black-part */}
                    <div className="border bg-dark" style={{ width: "20%", height: "700px" }}>
                        <div className="ps-4">
                            <nav id="navbar-example3" className=" flex-column align-items-stretch pe-4 ">
                                <div className="input-group my-3" style={{ height: "auto", width: "auto" }}>
                                    <input type="text" id="custId" placeholder="Enter Customer Id"
                                        className="rounded-start bg-dark border border-1 border-white border-end-0" />
                                    <button className="btn btn-outline-secondary border border-1 border-start-0 border-white"
                                        type="button" id="button-addon2"><i className="bi bi-search"></i></button>
                                </div>
                                <nav className="nav nav-pills flex-column">
                                    <a className="nav-link text-black text-white" href="#">Dashboard</a>
                                    <a className="nav-link text-black text-white" href="#">Customers</a>
                                    <a className="nav-link text-black text-white" href="#">Category</a>
                                    <a className="nav-link text-black text-white" href="#">Products</a>
                                    <a className="nav-link text-black text-white" href="#">Orders</a>
                                    <a className="nav-link text-black text-white" href="#">Salesman</a>
                                </nav>
                            </nav>
                        </div>
                    </div>
                    {/* right side */}
                    <div className="" style={{ width: "80%", backgroundImage: `url(./Images/adminbg.jpg)`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "100% 100%" }}>

                        {/* <!-- greeting --> */}
                        <div className="text-center my-3 py-2 mx-auto adminHeading" id="cheading">
                        </div>

                        {/* <!--Accordions  --> */}
                        <div className="accordion mx-5 " id="accordionPanelsStayOpenExample">

                            {/* <!-- customers --> */}
                            <div className="accordion-item border-dark ">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                        aria-controls="panelsStayOpen-collapseOne">
                                        Customers!
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="accordion-body ">
                                        <div>
                                            <div className="d-flex justify-content-evenly">

                                                <div className="input-group" style={{ height: "auto", width: "auto" }}>
                                                    <a href="/viewCustData" target="popup" className=""
                                                        onClick="window.open('/viewCustData','popup'; return false;">
                                                        <input type="button" className="btn btn-outline-success rounded-start"
                                                            value="View All Data" /></a>
                                                    <button
                                                        className="btn-close rounded-end border  border-dark pe-3 pt-3"
                                                        id="button-addon2" type="button" onclick="cleanTableData()">
                                                    </button>
                                                </div>

                                                <div className="d-flex">
                                                    <div className="text-start px-5 fs-5">Find Customers:</div>
                                                    <div className="input-group" style={{ height: "auto", width: "auto" }}>

                                                        <input type="search" id="cname"
                                                            className="rounded-start border border-1 border-dark border-end-0"
                                                            placeholder="Enter Customer Name" />
                                                        <button
                                                            className="btn btn-outline-secondary border border-1 border-start-0 border-dark"
                                                            type="button" id="button-addon2"><i className="bi bi-search"></i>
                                                        </button>
                                                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" >
                                                            <span style={{ fontSize: "15px" }}>❌</span></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ps-5">
                                                <p id="cDetails"></p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="mt-3 text-center" id="DataView"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Categories --> */}
                            <div className="accordion-item mt-4 border-dark border">
                                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseTwo">
                                        Categories!
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingTwo">
                                    <div className="accordion-body">
                                        <div className="d-flex justify-content-evenly">
                                            <div className="input-group" style={{ height: "auto", width: "auto" }}>
                                                <a href="/viewCategoryData" target="popup" className=""
                                                    onClick="window.open('/viewCategoryData','popup'; return false;">
                                                    <input type="button" className="btn btn-outline-success border-success rounded-end-0 border"
                                                        value="View Category Data" /></a>
                                                <button className="btn-close rounded-end border border-start-0 border-dark px-3 pt-3"
                                                    id="button-addon2" type="button" >
                                                </button>
                                            </div>
                                            <div className="d-flex">
                                                <div className="text-start px-2 fs-5 ">Find Category:</div>
                                                <div className="accordion me-5" id="accordionPanelsStayOpenExample">
                                                    <div className="accordion-item ">
                                                        <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                                                            <div className="input-group" style={{ height: "auto" }}>
                                                                <input type="search" className="rounded-start border  border-end-0 border-dark mx-auto fs-6" id="categoryName"
                                                                    placeholder="Enter Category Name" name="cname" onChange={(event) => setCName(event.target.value)}
                                                                    aria-label="Enter Category Name" aria-describedby="button-addon2" style={{ width: "" }} />
                                                                <button className=" btn btn-outline-secondary border border-1 border-start-0 border-dark" type="button" data-bs-toggle="collapse"
                                                                    id="button-addon2" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="true"
                                                                    onClick={FindCategory}><i className="bi bi-search"></i></button>
                                                                <button className="btn btn-close border border-1 border-dark border-start-0 p-2 pb-3" type="button" data-bs-toggle="collapse"
                                                                    id="button-addon2" aria-controls="panelsStayOpen-collapseSix" data-bs-target="#panelsStayOpen-collapseSix" onClick={cleanCategoryData}></button>
                                                            </div>
                                                            {/* </button> */}
                                                        </h2>
                                                        <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse"
                                                            aria-labelledby="panelsStayOpen-headingSix">
                                                            <div className="accordion-body ">
                                                                <div className="my-1">
                                                                    {cresult ? "Category Id is " + category._id : ""}<br />
                                                                    {cresult ? "Category Name is " + category.Cname : ""}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <a href="/addCategory" target="popup" className="me-3"
                                                        onClick="window.open('/addCategory','popup','width=700,height=700'); return false;">
                                                        <input type="button" className="btn btn-outline-primary rounded-start"
                                                            value="Add Category" />
                                                    </a>
                                                </div>
                                            </div>

                                            <div>
                                                <p className="mt-3 ms-5 text-center" id="CategoryDataView"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Products! --> */}
                            <div className="accordion-item mt-4 border-dark border">
                                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseThree">
                                        Products!
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingThree">
                                    <div className="accordion-body">
                                        <div className="d-flex justify-content-evenly">
                                            <div className="input-group" style={{ height: "auto", width: "auto" }}>
                                                <a href="/viewProductData" target="popup" className=""
                                                    onClick="window.open('/viewProductData','popup'; return false;">
                                                    <input type="button" className="btn btn-outline-success border-success rounded-end-0 border"
                                                        value="View Product Data" /></a>
                                                <button className="btn-close rounded-end border border-start-0 border-dark px-3 pt-3"
                                                    id="button-addon2" type="button" >
                                                </button>
                                            </div>
                                            <div className="d-flex">
                                                <div className="text-start px-2 fs-5">Find Product:</div>
                                                <div className="accordion me-5" id="accordionPanelsStayOpenExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
                                                            <div className="input-group" style={{ height: "auto", width: "310px" }}>
                                                                <input type="search" className="rounded-start border  border-end-0 border-dark mx-auto fs-6" id="categoryName"
                                                                    placeholder="Enter Product Name" name="pname" onChange={(event) => setPName(event.target.value)}
                                                                    aria-label="Enter Product Name" aria-describedby="button-addon2" style={{ height: "auto", width: "230px" }} />
                                                                <button className=" btn btn-outline-secondary border border-1 border-start-0 border-dark" type="button" data-bs-toggle="collapse"
                                                                    id="button-addon2" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="true" style={{ height: "auto", width: "47px" }}
                                                                    onClick={FindProduct}><i className="bi bi-search"></i></button>
                                                                <button className="btn btn-close border border-1 border-dark border-start-0 p-2 pb-3" type="button" data-bs-toggle="collapse"
                                                                    id="button-addon2" aria-controls="panelsStayOpen-collapseSeven" data-bs-target="#panelsStayOpen-collapseSeven" onClick={cleanProductData}></button>
                                                            </div>
                                                            {/* </button> */}
                                                        </h2>
                                                        <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse"
                                                            aria-labelledby="panelsStayOpen-headingSeven">
                                                            <div className="accordion-body ">
                                                                <div className="" >
                                                                    {pmsg}
                                                                    {presult ? "Id- " + product._id : ""}<br />
                                                                    {presult ? "Name- " + product.pname : ""}<br />
                                                                    {presult ? "Price- " + product.price : ""}<br />
                                                                    {presult ? "Quantity- " + product.quantity : ""}<br />
                                                                    {presult ? "Category Id- " + product.cid : ""}<br />
                                                                    {presult ? "Category Name- " + product.categoryName : ""}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <a href="/addProduct" target="popup" className="me-3"
                                                    onClick="window.open('/addProduct','popup','width=700,height=700'); return false;">
                                                    <input type="button" className="btn btn-outline-primary rounded-start"
                                                        value="Add Products" /></a>
                                            </div>
                                        </div>

                                        <div>
                                            <p className="mt-3 ms-5 text-center" id="ProductDataView"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Orders! --> */}
                            <div className="accordion-item mt-4 border-dark border">
                                <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseFour">
                                        Orders!
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingFour">
                                    <div className="accordion-body">
                                        <div className="d-flex justify-content-evenly">
                                            <div className="input-group" style={{ height: "auto", width: "auto" }}>
                                                <a href="/viewOrder" target="popup" className=""
                                                    onClick="window.open('/viewOrder','popup'; return false;">
                                                    <input type="button" className="btn btn-outline-success border-success rounded-end-0 border"
                                                        value="View Orders Data" /></a>

                                                <button className="btn-close rounded-end border border-start-0 border-dark px-3 pt-3"
                                                    id="button-addon2" type="button" >
                                                </button>
                                            </div>
                                            <div className="d-flex">
                                                <div className="text-start px-5 fs-5">Find Order:</div>
                                                <div className="accordion me-5" id="accordionPanelsStayOpenExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
                                                            <div className="input-group" style={{ height: "auto", width: "auto" }}>
                                                                <input type="search" className="rounded-start border  border-end-0 border-dark mx-auto fs-6"
                                                                    placeholder="Enter Customer email" name="custEmail" onChange={(event) => setcEmail(event.target.value)}
                                                                    aria-label="Enter Customer email" aria-describedby="button-addon2" style={{ height: "auto", width: "258px" }} />
                                                                <button className=" btn btn-outline-secondary border border-1 border-start-0 border-dark" type="button" data-bs-toggle="collapse"
                                                                    id="button-addon2" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="true" style={{ height: "auto", width: "47px" }}
                                                                    onClick={FindOrder}><i className="bi bi-search"></i></button>
                                                                <button className="btn btn-close border border-1 border-dark border-start-0 p-2 pb-3" type="button" data-bs-toggle="collapse"
                                                                    id="button-addon2" aria-controls="panelsStayOpen-collapseEight" data-bs-target="#panelsStayOpen-collapseEight" onClick={cleanOrderData}></button>
                                                            </div>
                                                            {/* </button> */}
                                                        </h2>
                                                        <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse"
                                                            aria-labelledby="panelsStayOpen-headingEight">
                                                            <div className="accordion-body ">
                                                                <div className="" >
                                                                    {msgInfoO}
                                                                    {oresult ? "Customer Email- " + order.customerEmail : ""}<br />
                                                                    {oresult ? "Category Id- " + order.categoryId : ""}<br />
                                                                    {oresult ? "Product Id- " + order.productId : ""}<br />
                                                                    {oresult ? "Product Qty Id- " + order.productqty : ""}<br />
                                                                    {oresult ? "Date Of Order- " + order.dateOfOrder : ""}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div>
                                            <p className="mt-3 ms-5 text-center" id="OrderDataView"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Salesman! --> */}
                            <div className="accordion-item mt-4 border-dark border">
                                <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseFive">
                                        Salesman!
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingFive">
                                    <div className="accordion-body">
                                        <div className="d-flex justify-content-evenly">
                                            <div className="input-group" style={{ height: "auto", width: "auto" }}>
                                                <a href="/viewSalesmanData" target="popup" className=""
                                                    onClick="window.open('/viewSalesmanData','popup'; return false;">
                                                    <input type="button" className="btn btn-outline-success border-success rounded-end-0 border"
                                                        value="View All Salesman Data" />
                                                </a>
                                                <button className="btn-close rounded-end border border-start-0 border-dark px-3 pt-3"
                                                    id="button-addon2" type="button" onclick="cleanSalesmanTable()">
                                                </button>
                                            </div>
                                            <div className="d-flex">
                                                <div className="text-start px-5 fs-5">Find Salesman:</div>
                                                <div className="accordion me-5" id="accordionPanelsStayOpenExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
                                                            <div className="input-group" style={{ height: "auto", width: "auto" }}>
                                                                <input type="search" className="rounded-start border  border-end-0 border-dark mx-auto fs-6"
                                                                    placeholder="Enter Salesman Name" name="sname" onChange={(event) => setsName(event.target.value)}
                                                                    aria-label="Enter Salesman Name" aria-describedby="button-addon2" style={{ height: "auto", width: "258px" }} />
                                                                <button className=" btn btn-outline-secondary border border-1 border-start-0 border-dark" type="button" data-bs-toggle="collapse"
                                                                    id="button-addon2" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="true" style={{ height: "auto", width: "47px" }}
                                                                    onClick={FindSalesman}><i className="bi bi-search"></i></button>
                                                                <button className="btn btn-close border border-1 border-dark border-start-0 p-2 pb-3" type="button" data-bs-toggle="collapse"
                                                                    id="button-addon2" aria-controls="panelsStayOpen-collapseNine" data-bs-target="#panelsStayOpen-collapseNine" onClick={cleanSalesmanData}></button>
                                                            </div>
                                                            {/* </button> */}
                                                        </h2>
                                                        <div id="panelsStayOpen-collapseNine" className="accordion-collapse collapse"
                                                            aria-labelledby="panelsStayOpen-headingNine">
                                                            <div className="accordion-body ">
                                                                <div className="" >
                                                                    {smsgInfo}
                                                                    {sresult ? "Id- " + salesman._id : ""}<br/>
                                                                    {sresult ? "Name- " + salesman.name : ""}<br />
                                                                    {sresult ? "Email- " + salesman.email : ""}<br />
                                                                    {sresult ? "Password- " + salesman.password : ""}<br />
                                                                    {sresult ? "Gender- " + salesman.gender : ""}<br />
                                                                    {sresult ? "Age- " + salesman.age : ""}<br />
                                                                    {sresult ? "MobileNo- " + salesman.mobileNo : ""}<br />
                                                                    {sresult ? "Address- " + salesman.address : ""}<br /> 
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <a href="/addSalesman" target="popup" className="me-3"
                                                    onClick="window.open('/addSalesman','popup'); return false;">
                                                    <input type="button" className="btn btn-outline-primary rounded-start"
                                                        value="Add Salesman" /></a>
                                            </div>
                                        </div>
                                        {/* <div className="ps-5">
                                            <p id="SalesmanData">{smsgInfo}</p>
                                        </div> */}
                                        <div>
                                            <p className="mt-3 ms-5 text-center" id="SalesmanDataView"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>



        </div>
    )
}
export default Admin;