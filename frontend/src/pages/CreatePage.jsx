import { useState } from 'react'
import './pages.css'
import axios from 'axios';
import { toast } from 'react-toastify';


const CreatePage = () => {

  const [newProduct, setNewProduct] = useState({
    name:"",
    price:"",
    image:"",
  });

  const handleAddProduct = async() => {
    try {
      await axios.post("http://localhost:5000/api/products",newProduct)
      console.log(`Product created successfully!`);
      toast.success('Product created successfully!')

    } catch (error) {
      console.log(error);
      toast.error('Something went wrong!');
    }
  }

  return (
    <div className='main-create-window'>
      <h2 className='new-heading'>Create new Product</h2>
      <div className="dark-form my-container">
      
        <div className="input-group input-group-lg mb-3">
          <input
            type="text"
            className="form-control dark-input my-input"
            placeholder="Product name" onChange={(e)=> setNewProduct({ ...newProduct, name: e.target.value})}
          />
        </div>

        <div className="input-group input-group-lg mb-3">
          <input
            type="text"
            className="form-control dark-input my-input"
            placeholder="Product Price" onChange={(e)=> setNewProduct({ ...newProduct, price: e.target.value})}
          />
        </div>

        <div className="input-group input-group-lg mb-3">
          <input
            type="text"
            className="form-control dark-input my-input"
            placeholder="Product image url" onChange={(e)=> setNewProduct({ ...newProduct, image: e.target.value})}
          />
      </div>
      <button type="button" className="btn btn-primary my-btn" onClick={handleAddProduct}>Add Product</button>
    </div>
  </div>

  )
}

export default CreatePage