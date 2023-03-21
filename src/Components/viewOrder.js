import axios from "axios";
import { useEffect,useState } from "react";
function ViewOrderData(){
    let [orders, setOrders]=useState([]);
    useEffect(()=>{
        async function viewOrderData() {
            try{
                let result=await axios.get("http://localhost:3000/api/order/viewAllOrder",{
                    headers:{"authorization": sessionStorage.getItem("token")}
                });
                if(result.data.msg==="Unathorized request or user"){
                    alert(result.data.msg);

                }else{
                    setOrders(result.data);
                } 
                
            }
            catch(error){
                console.log(error);
            } 
        }
        viewOrderData();
    },[])
    let OrderData=orders.map(obj=><tr key={obj._id}><td>{obj._id}</td><td>{obj.customerEmail}</td><td>{obj.productId}</td><td>{obj.categoryId}</td><td>{obj.productqty}</td><td>{obj.dateOfOrder}</td></tr>)
    //find all customers
    return (
        <div className="bg-light" style={{height:"100vh"}} >
            <div className="pt-5 px-5">
                <a className="btn btn-outline-dark" href="/">Back<i className="fa-solid fa-arrow-right-from-bracket"></i></a>
            </div>
            <h3 className="m-5 text-center">All Order Details!</h3>
            <table className=" table mx-auto border border-dark " style={{width:"70%"}}>
                <thead className="table bg-white">
                    <tr className="text-center border border-dark">
                    <th>Order Id</th>
                    <th>Customer Email</th>
                    <th>Category Id</th>
                    <th>Product Id</th>
                    <th>Product Quantity</th>
                    <th>Order date & time</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {OrderData}
                </tbody>
            </table>
           
        </div>
    )
}
export default ViewOrderData;