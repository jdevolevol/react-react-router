import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";

function ViewProductPage() {
  const param = useParams();
  const [product,setProduct] = useState({});

  const getProducts = async () => {
    try{const result = await axios.get(`http://localhost:4001/products/${param.id}`)
      setProduct(result.data.data)
       
  }catch(error){
          console.log("ERROR!!!!!"+error)
      }
    }

    useEffect(()=>{getProducts()},[])

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>Product Title</h2>
          <div className="product-detail">
            <img
                  src={product.image}
                  alt="some product"
                  width="250"
                  height="250"
                />
            <h1>Product name: {product.name} </h1>
            <h2>Product price: {product.price}</h2>
            <p>Product description: {product.description} </p>
          </div>
      </div>
      <Link to="/"><button>Back to Home</button></Link>
    </div>
  );
}

export default ViewProductPage;
