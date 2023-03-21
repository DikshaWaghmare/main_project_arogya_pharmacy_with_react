import { signupbg } from "../assest/Images";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SignUp() {
    let [nameValue, setName] = useState();
    let [emailValue, setEmail] = useState();
    let [passwordValue, setPassword] = useState();
    let [gender, setGender] = useState();
    let [age, setAge] = useState();
    let [mobileNo, setMobileNo] = useState();
    let [address, setAddress] = useState();
    let [typeOfUser, setTypeOfUser] = useState();
    let navigate = useNavigate();
    async function storeCustomerInfo(event) {
        event.preventDefault();
        var customers = {
            name: nameValue,
            email: emailValue,
            password: passwordValue,
            gender: gender,
            age: age,
            mobileNo: mobileNo,
            address: address,
            typeOfUser: typeOfUser,
        };
        //   console.log(customers);
        let result = await axios.post("http://localhost:3000/api/customer/signUp", customers);

        if (result.data.msg === "Account created Successfully!") {
            document.getElementById("msg").innerHTML = result.data.msg;
            navigate("/customer");
        } else {
            document.getElementById("msg").innerHTML = result.data.msg;
        }
    }
    function reset() {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementsByName("gender").value = "";
        document.getElementById("age").value = "";
        document.getElementById("mobileNo").value = "";
        document.getElementById("address").value = "";
        document.getElementById("msg").innerHTML = "";
    }
    function cleanMsg() {
        document.getElementById("msg").innerHTML = "";
    }

    return (
        <div>
            <div className="container-fluid py-5 " style={{
                height: "780px", borderRadius: "10px", backgroundImage: `url(${signupbg})`, backgroundSize: "100% 100%", backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }} >
                <div>
                    <a href="/"><input type="button" value="Back" className=" mt-3 fs-5 px-4"
                        style={{ marginLeft: "50px", borderRadius: "8px", backgroundColor: "rgb(227, 243, 243)" }} /></a>
                </div>
                <form className=" p-5 border mx-auto" onSubmit={storeCustomerInfo}
                    style={{ height: "auto", width: "650px", boxShadow: "0px 0px 2px black", borderRadius: "10px", backgroundColor: " rgb(218, 245, 236)", marginTop: "50px", fontSize: "large" }}
                >
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Enter Full Name</label>
                        <div className="col-sm-8">
                            <input type="text" id="name" className="form-control" onChange={(e) => setName(e.target.value)} onKeyDown={cleanMsg} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Email</label>
                        <div className="col-sm-8">
                            <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} onKeyDown={cleanMsg} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Password</label>
                        <div className="col-sm-8">
                            <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} onKeyDown={cleanMsg} />
                        </div>
                    </div>
                    <div>
                        <label>Gender:</label>
                        <input type="radio" name="gender" value="male" className="ms-3" onClick={(e) => setGender(e.target.value)} />Male
                        <input type="radio" name="gender" value="female" className="ms-4" onClick={(e) => setGender(e.target.value)} />Female<br /><br />
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Age</label>
                        <div className="col-sm-3">
                            <input type="number" className="form-control" id="age" onChange={(e) => setAge(e.target.value)} onKeyDown={cleanMsg} />
                        </div>
                        <label className="col-sm-3 col-form-label">Mobile No.:</label>
                        <div className="col-sm-4">
                            <input type="number" className="form-control" id="mobileNo" onChange={(e) => setMobileNo(e.target.value)} onKeyDown={cleanMsg} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-3 col-form-label">Address</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" id="address" onChange={(e) => setAddress(e.target.value)} onKeyDown={cleanMsg} />
                        </div>
                    </div>

                    <label>Type Of User: </label>
                    <input type="radio" name="typeOfUser" value="admin" className="ms-3" onClick={(e) => setTypeOfUser(e.target.value)} />Admin
                    <input type="radio" name="typeOfUser" value="customer" className="ms-3" onClick={(e) => setTypeOfUser(e.target.value)} />Customer<br />
                    <input type="submit" value="Create Acc" className=" mt-3 fs-5 px-2"
                        style={{ marginLeft: "130px", borderRadius: "8px", backgroundColor: "rgb(122, 239, 241)" }} />
                    <input type="reset" value="cancel" onClick={reset} className="ms-5 mt-3 fs-5 px-4"
                        style={{ borderRadius: "8px", backgroundColor: "rgb(122, 239, 241)" }} /><br /><br />
                    <span id="msg"></span>
                </form>

            </div>
        </div>
    )
}
export default SignUp;