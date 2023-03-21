import axios from "axios";
import { useEffect,useState } from "react";

function ViewCustData() {
    let [customers, setCustomers]=useState([]);
    useEffect(()=>{
        async function viewCustData() {
            try{
                let result=await axios.get("http://localhost:3000/api/admin/findAllCustomers",{
                    headers:{"authorization": sessionStorage.getItem("token")}
                });

                if(result.data.msg==="Unathorized request or user"){
                    alert(result.data.msg);

                }else{
                    setCustomers(result.data);
                }
                // console.log(result.data);
                // console.log(result.data.msg);
                // setCustomers(result.data);
            }
            catch(error){
                console.log(error);
            } 
        }
        viewCustData();
    },[])
    let custData=customers.map(obj=><tr key={obj._id}><td>{obj._id}</td><td>{obj.name}</td><td>{obj.email}</td><td>{obj.gender}</td><td>{obj.age}</td><td>{obj.mobileNo}</td><td>{obj.address}</td></tr>)
    //find all customers
    return (
        <div className="bg-light" style={{height:"100vh"}} >
            <div className="pt-5 px-5">
                <a className="btn btn-outline-dark" href="/">Back<i className="fa-solid fa-arrow-right-from-bracket"></i></a>
            </div>
            <h3 className="m-5 text-center">All Details!</h3>
            <table className=" table ms-5 border border-dark" style={{width:"90%"}}>
                <thead className="table">
                    <tr className="text-center border border-dark">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Mobile No.</th>
                    <th>Address</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {custData}
                </tbody>
            </table>
           
        </div>
    )
}
export default ViewCustData;