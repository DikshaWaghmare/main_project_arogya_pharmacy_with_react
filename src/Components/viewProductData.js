import axios from "axios";
import { useEffect,useState } from "react";
function ViewProductData(){
    let [Products, setProducts]=useState([]);
    useEffect(()=>{
        async function viewProductData() {
            try{
                let result=await axios.get("http://localhost:3000/api/admin/viewAllProducts")
                    
                // console.log(result.data);
                // console.log(result.data.msg);
                setProducts(result.data);
            }
            catch(error){
                console.log(error);
            } 
        }
        viewProductData();
    },[])
    let ProductData=Products.map(obj=><tr key={obj._id}><td>{obj._id}</td><td>{obj.pname}</td><td>{obj.price}</td><td>{obj.quantity}</td><td>{obj.cid}</td><td>{obj.categoryName}</td></tr>)
    //find all customers
    return (
        <div className="bg-light" style={{height:"100vh"}} >
            <div className="pt-5 px-5">
                <a className="btn btn-outline-dark" href="/">Back<i className="fa-solid fa-arrow-right-from-bracket"></i></a>
            </div>
            <h3 className="m-5 text-center">All Product Details!</h3>
            <table className=" table mx-auto border border-dark " style={{width:"70%"}}>
                <thead className="table bg-white">
                    <tr className="text-center border border-dark">
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Category Id</th>
                    <th>Category Name</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {ProductData}
                </tbody>
            </table>
           
        </div>
    )
}
export default ViewProductData;