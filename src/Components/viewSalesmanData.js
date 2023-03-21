import axios from "axios";
import { useEffect,useState } from "react";
function ViewSalesmanData(){
    let [salesman, setSalesman]=useState([]);
    useEffect(()=>{
        async function viewSalesmanData() {
            try{
                let result=await axios.get("http://localhost:3000/api/admin/viewAllSalesman",{
                    headers:{"authorization": sessionStorage.getItem("token")}
                });
                if(result.data.msg==="Unathorized request or user"){
                    alert(result.data.msg);

                }else{
                    setSalesman(result.data);
                } 
                // console.log(result.data);
                // console.log(result.data.msg);
                
            }
            catch(error){
                console.log(error);
            } 
        }
        viewSalesmanData();
    },[])
    let SalesmanData=salesman.map(obj=><tr key={obj._id}><td>{obj._id}</td><td>{obj.name}</td><td>{obj.email}</td><td>{obj.password}</td><td>{obj.gender}</td><td>{obj.age}</td><td>{obj.mobileNo}</td><td>{obj.address}</td></tr>)
    
    return (
        <div className="bg-light" style={{height:"100vh"}} >
            <div className="pt-5 px-5">
                <a className="btn btn-outline-dark" href="/">Back<i className="fa-solid fa-arrow-right-from-bracket"></i></a>
            </div>
            <h3 className="m-5 text-center">All Salesman Details!</h3>
            <table className=" table mx-auto border border-dark " style={{width:"70%"}}>
                <thead className="table bg-white">
                    <tr className="text-center border border-dark">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Mobile No.</th>
                    <th>Address</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {SalesmanData}
                </tbody>
            </table>
           
        </div>
    )
}
export default ViewSalesmanData;