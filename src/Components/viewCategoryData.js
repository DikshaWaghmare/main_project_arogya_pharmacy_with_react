import axios from "axios";
import { useEffect,useState } from "react";

function ViewCategoryData(){
    let [Categories, setCategories]=useState([]);
    useEffect(()=>{
        async function viewCategoryData() {
            try{
                let result=await axios.get("http://localhost:3000/api/admin/viewAllCategory")
                    
                // console.log(result.data);
                // console.log(result.data.msg);
                setCategories(result.data);
            }
            catch(error){
                console.log(error);
            } 
        }
        viewCategoryData();
    },[])
    let CategoryData=Categories.map(obj=><tr key={obj._id}><td>{obj._id}</td><td>{obj.Cname}</td></tr>)
    //find all customers
    return (
        <div className="" style={{height:"100vh"}} >
            <div className="pt-5 px-5">
                <a className="btn btn-outline-dark" href="/customer">Back<i className="fa-solid fa-arrow-right-from-bracket"></i></a>
            </div>
            <h3 className="m-5 text-center">All Category Details!</h3>
            <table className=" table mx-auto border border-dark  bg-light shadow-sm" style={{width:"50%"}}>
                <thead className="table ">
                    <tr className="text-center border border-dark shadow">
                    <th>Id</th>
                    <th>Category Name</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {CategoryData}
                </tbody>
            </table>
           
        </div>
    )
}


export default ViewCategoryData;