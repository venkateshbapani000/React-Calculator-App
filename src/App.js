import { useState} from "react"
import { useEffect} from "react"
import ProductCard from "./productcard";
import "./App.css"

function App(){
  const [products,updateproducts]= useState([]);

 useEffect(()=>{ 
  getproducts()
 },[])

 async function getproducts(){
  let res= await fetch("https://fakestoreapi.com/products")
  let productlists= await res.json()
 updateproducts(productlists)
  console.log(productlists)}



  if (products.length == 0){
    return(<h1>fetching data....</h1>)
  }

  return(
    <div className="product-list">
   {products.map((p)=>(<ProductCard {...p} ></ProductCard>))}
   </div>
)
}
export default App