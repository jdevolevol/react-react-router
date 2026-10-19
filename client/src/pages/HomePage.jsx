import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const endPoint = "http://localhost:4001/products"

  const deleteProducts = async (id) => {
    try{
      const result = await axios.delete(`${endPoint}/${id}`);
      getProducts();
    }catch(error){
      console.log("Test Error!!!!!"+error)
    }
  }

  const getProducts = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const results = await axios(endPoint);
      setProducts(results.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <div className="app-wrapper">
        <h1 className="app-title">Products</h1>
        <Link to="/CreateProductPage"><button>Craete Product </button></Link>
      </div>
      <div className="product-list">
        {products.map((product) => {
          return (
            <div className="product" key={product.id}>
              <div className="product-preview">
                <img
                  src="https://via.placeholder.com/250/250"
                  alt="some product"
                  width="250"
                  height="250"
                />
              </div>
              <div className="product-detail">
                <h1>Product name: {product.name} </h1>
                <h2>Product price: {product.price}</h2>
                <p>Product description: {product.description} </p>
                <div className="product-actions">
                  <Link to="/ViewProductPage"><button className="view-button">View</button></Link>
                  <Link to="EditProductPage"><button className="edit-button">Edit</button></Link>
                </div>
              </div>

              <button className="delete-button" onClick={()=>{deleteProducts(product.id)}}>x</button>
            </div>
          );
        })}
      </div>
      {isError ? <h1>Request failed</h1> : null}
      {isLoading ? <h1>Loading ....</h1> : null}
    </div>
  );
}

export default HomePage;
